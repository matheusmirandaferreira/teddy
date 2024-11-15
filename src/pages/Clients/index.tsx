import { useMutation, useQuery } from '@tanstack/react-query';
import * as S from './styles';
import { deleteClient, getClients } from '@/services/clients';
import { usePagination } from '@/hooks/pagination';
import { ActivityIndicator, Alert, RefreshControl } from 'react-native';
import { theme } from '@/styles/theme';

import { useCallback, useRef, useState } from 'react';
import DropdownSelect from '@/components/SelectDropdown';
import { Option } from '@/types/common';
import { ClientCard } from '@/components/ClientCard';
import { ClientProps } from '@/types/clients';
import { ClientForm } from '@/components/ClientForm';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Clients() {
  const pagination = usePagination();

  const [pickerValue, setPickerValue] = useState<Option>({
    label: '12',
    value: '12',
  });

  const [selectedClient, setSelectedClient] = useState<ClientProps>();
  const [checkedClients, setCheckedClients] = useState<ClientProps[]>([]);

  const actionSheetRef = useRef<ActionSheetRef>(null);

  const query = useQuery({
    queryKey: ['get-clients', pagination.page, pagination.limit],
    queryFn: () =>
      getClients({ page: pagination.page, limit: pagination.limit }),
  });

  useQuery({
    queryKey: ['initial-load'],
    queryFn: async () => {
      const res = await AsyncStorage.getItem('@teddy:checkedClients');

      const formatted = res ? JSON.parse(res) : [];
      setCheckedClients(formatted);

      return true;
    },
  });

  const deleteMutation = useMutation({
    mutationKey: ['delete-client'],
    mutationFn: deleteClient,
    onSuccess() {
      query.refetch();
      Alert.alert('Cliente excluido com sucesso');
    },
    onError() {
      Alert.alert(
        'Erro ao excluir cliente',
        'Tente novamente em alguns instantes'
      );
    },
  });

  const saveCheckedClients = useCallback(async (clients: ClientProps[]) => {
    await AsyncStorage.setItem(
      '@teddy:checkedClients',
      JSON.stringify(clients)
    );
  }, []);

  const onSelect = (option: Option) => {
    setPickerValue(option);
    pagination.updateLimit(Number(option.value));
  };

  const onDelete = (client: ClientProps) => {
    Alert.alert(
      'Excluir cliente:',
      `Tem certeza que deseja excluir o cliente ${client.name}?`,
      [
        {
          text: 'Excluir cliente',
          onPress() {
            deleteMutation.mutate(client.id);
          },
          style: 'destructive',
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ]
    );
  };

  const limits = [
    { label: '8', value: '8' },
    { label: '12', value: '12' },
    { label: '16', value: '16' },
    { label: '20', value: '20' },
  ];

  if (query.isLoading) {
    return (
      <S.Container>
        <ActivityIndicator color={theme.colors.primary} size='large' />
      </S.Container>
    );
  }

  return (
    <>
      <S.Container
        refreshControl={
          <RefreshControl
            refreshing={query.isFetching}
            onRefresh={query.refetch}
          />
        }
      >
        {!!checkedClients.length && (
          <>
            <S.Title>Clientes selecionados:</S.Title>
            <S.CardsWrapper>
              {checkedClients.map((client) => (
                <ClientCard
                  key={client.id}
                  client={client}
                  onRemove={() =>
                    setCheckedClients((prev) => {
                      const newValue = prev.filter((i) => i.id !== client.id);

                      Promise.resolve(saveCheckedClients(newValue));

                      return newValue;
                    })
                  }
                />
              ))}
              <S.OutlineButton
                onPress={() => {
                  setCheckedClients([]);
                  Promise.resolve(saveCheckedClients([]));
                }}
              >
                <S.ButtonText>Limpar clientes selecionados</S.ButtonText>
              </S.OutlineButton>
            </S.CardsWrapper>
          </>
        )}
        <S.Group>
          <S.Count>{query.data?.clients.length}</S.Count>
          <S.Label> clientes encontrados</S.Label>
        </S.Group>
        <S.Group>
          <S.Label>Clientes por página: </S.Label>

          <DropdownSelect
            options={limits}
            value={pickerValue}
            onSelect={onSelect}
          />
        </S.Group>
        <S.CardsWrapper>
          {query.data?.clients
            .filter((client) => checkedClients.every((c) => c.id !== client.id))
            .map((client) => (
              <ClientCard
                key={client.id}
                client={client}
                onDelete={() => onDelete(client)}
                onAdd={() =>
                  setCheckedClients((prev) => {
                    const newValue = prev.concat(client);

                    Promise.resolve(saveCheckedClients(newValue));

                    return newValue;
                  })
                }
                onEdit={() => {
                  setSelectedClient(client);
                  actionSheetRef.current?.show();
                }}
              />
            ))}
          <S.OutlineButton onPress={() => actionSheetRef.current?.show()}>
            <S.ButtonText>Criar cliente</S.ButtonText>
          </S.OutlineButton>
        </S.CardsWrapper>
        <S.FooterSpacing />
      </S.Container>
      <ActionSheet
        ref={actionSheetRef}
        gestureEnabled
        onClose={() => setSelectedClient(undefined)}
        containerStyle={{
          backgroundColor: '#7a7a7a',
        }}
      >
        <ClientForm
          isEdit={!!selectedClient}
          clientOnEdit={selectedClient}
          onSuccess={() => {
            query.refetch();
            actionSheetRef.current?.hide();
          }}
        />
      </ActionSheet>
    </>
  );
}
