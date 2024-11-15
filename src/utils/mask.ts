export function maskFormat(type: 'money', value: string) {
  switch (type) {
    case 'money': {
      // Remove caracteres que não são números
      const numericValue = value.replace(/[^0-9]/g, '');

      // Transforma em número com casas decimais
      const formattedValue = (Number(numericValue) / 100).toFixed(2);

      // Adiciona separadores de milhar e a vírgula para casas decimais
      return (
        'R$ ' +
        formattedValue
          .replace('.', ',') // Troca ponto por vírgula
          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      ); // Adiciona pontos nos milhares
    }

    default:
      return value;
  }
}
