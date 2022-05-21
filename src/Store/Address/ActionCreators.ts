import { GeocodeType } from '../../types/GeocodeTypes';
import {
  AddAddressInterface,
  AddressActionEnum,
  DeleteAddressInterface,
} from './types';

export const AddressActionCreators = {
  addAddress: (payload: GeocodeType): AddAddressInterface => ({
    type: AddressActionEnum.ADD_ADDRESS,
    payload,
  }),
  deleteAddress: (): DeleteAddressInterface => ({
    type: AddressActionEnum.DELETE_ADDRESS,
  }),
};
export default AddressActionCreators;
