import { useState } from 'react';
import * as S from './styles';
import { Feather } from '@expo/vector-icons';
import { theme } from '@/styles/theme';
import { FlatList } from 'react-native';
import { Option } from '@/types/common';

type DropdownSelectProps = {
  options: Option[];
  onSelect: (option: Option) => void;
  placeholder?: string;
  value?: Option;
};

export default function DropdownSelect({
  options,
  onSelect,
  placeholder = 'Selecione',
  value,
}: DropdownSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    value || null
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const renderOption = ({ item }: { item: Option }) => (
    <S.OptionItem onPress={() => handleSelect(item)}>
      <S.OptionText>{item.label}</S.OptionText>
    </S.OptionItem>
  );

  return (
    <S.Container>
      <S.DropdownButton onPress={toggleDropdown}>
        <S.ButtonText>
          {selectedOption ? selectedOption.label : placeholder}
        </S.ButtonText>
        <Feather name='chevron-down' size={15} color={theme.colors.border} />
      </S.DropdownButton>
      {isOpen && (
        <S.OptionsList>
          <FlatList
            data={options}
            renderItem={renderOption}
            keyExtractor={(item) => item.value}
          />
        </S.OptionsList>
      )}
    </S.Container>
  );
}
