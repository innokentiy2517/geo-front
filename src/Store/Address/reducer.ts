import { AddressActionEnum, AddressActions, AddressState } from './types';

const initialState: AddressState = {
  data: undefined,
};

export function AddressReducer(
  action: AddressActions,
  state = initialState,
): AddressState {
  switch (action.type) {
    case AddressActionEnum.ADD_ADDRESS:
      return {
        ...state,
        data: action.payload,
      };
    case AddressActionEnum.DELETE_ADDRESS: {
      return { data: undefined };
    }
    default:
      return state;
  }
}

export default AddressReducer;
