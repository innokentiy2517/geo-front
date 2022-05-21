import { MarkerActionEnum, MarkerActions, MarkerState } from './types';

const initialState: MarkerState = {
  data: undefined,
};

export function MarkerReducer(
  action: MarkerActions,
  state = initialState,
): MarkerState {
  switch (action.type) {
    case MarkerActionEnum.ADD_MARKER:
      return {
        ...state,
        data: action.payload,
      };
    case MarkerActionEnum.DELETE_MARKER: {
      return { data: undefined };
    }
    default:
      return state;
  }
}

export default MarkerReducer;
