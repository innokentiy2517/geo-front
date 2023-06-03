import { GeocodeType } from '../../types/GeocodeTypes';

export const getAddress = (data: GeocodeType | undefined): string => {
  return data === undefined
    ? 'Поставьте метку на карту'
    : `${data && data.features[0].context[1].text}, ${data.features[0].text}, д.${
        data.features[0].address
      }`;
};

export default getAddress;
