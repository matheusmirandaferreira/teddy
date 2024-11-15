import { Dimensions, PixelRatio } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

// Define uma largura base (por exemplo, 375 para iPhone 11) para calcular proporcionalmente
const baseWidth = 375;

/** Função para dimensionamento */
export const resize = (size: number, prefix = true) => {
  // Calcula a escala com base na largura do dispositivo atual em relação à largura base
  const scale = screenWidth / baseWidth;

  // Retorna o valor escalado, arredondado para o próximo pixel inteiro
  const calculatedSize = Math.round(
    PixelRatio.roundToNearestPixel(size * scale)
  );

  if (prefix) return calculatedSize + 'px';
  else return calculatedSize;
};
