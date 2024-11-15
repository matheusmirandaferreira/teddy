import { Feather, Ionicons } from '@expo/vector-icons';

import { ClientProps } from '@/types/clients';

import * as S from './styles';
import { theme } from '@/styles/theme';

type CardProps = {
  client: ClientProps;
  onAdd?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onRemove?: () => void;
};

export function ClientCard(props: CardProps) {
  const { client, onAdd, onEdit, onDelete, onRemove } = props;

  const formatCurrency = (value: number) => {
    return `R$${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
  };

  return (
    <S.CardContainer>
      <S.Name>{client.name}</S.Name>
      <S.ValueText>Salário: {formatCurrency(client.salary)}</S.ValueText>
      <S.ValueText>
        Empresa: {formatCurrency(client.companyValuation)}
      </S.ValueText>
      {!onRemove ? (
        <S.IconsContainer>
          <S.IconButton onPress={onAdd}>
            <Ionicons name='add' size={20} color={theme.colors.black} />
          </S.IconButton>
          <S.IconButton
            onPress={() => {
              if (onEdit) onEdit();
            }}
          >
            <Ionicons name='pencil' size={20} color={theme.colors.black} />
          </S.IconButton>
          <S.IconButton onPress={onDelete}>
            <Ionicons name='trash-outline' size={20} color='red' />
          </S.IconButton>
        </S.IconsContainer>
      ) : (
        <S.RemoveButton activeOpacity={0.7} onPress={onRemove}>
          <Feather name='minus' size={20} color='red' />
        </S.RemoveButton>
      )}
    </S.CardContainer>
  );
}
