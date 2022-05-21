import { Action } from 'redux';
import { GeocodeType } from '../../types/GeocodeTypes';

export interface AddressState {
  data: GeocodeType|undefined;
}

export enum AddressActionEnum {
  ADD_ADDRESS = 'address/ADD_ADDRESS',
  DELETE_ADDRESS = 'address/DELETE_ADDRESS',
}

export interface AddAddressInterface
  extends Action<AddressActionEnum.ADD_ADDRESS> {
  type: AddressActionEnum.ADD_ADDRESS;
  payload: GeocodeType;
}

export interface DeleteAddressInterface
  extends Action<AddressActionEnum.DELETE_ADDRESS> {
  type: AddressActionEnum.DELETE_ADDRESS;
}

export type AddressActions = AddAddressInterface | DeleteAddressInterface;
