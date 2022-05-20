import { Action } from 'redux';
import { MarkerType } from '../../pages/mapPage/components/CustomMap';

export interface MarkerState {
  data: MarkerType | undefined;
}

// eslint-disable-next-line no-shadow
export enum MarkerActionEnum {
  ADD_MARKER = 'marker/ADD_MARKER',
  DELETE_MARKER = 'marker/DELETE_MARKER',
}

export interface AddMarkerInterface
  extends Action<MarkerActionEnum.ADD_MARKER> {
  type: MarkerActionEnum.ADD_MARKER;
  payload: { longitude: number; latitude: number };
}

export interface DeleteMarkerInterface
  extends Action<MarkerActionEnum.DELETE_MARKER> {
  type: MarkerActionEnum.DELETE_MARKER;
}

export type MarkerActions = AddMarkerInterface | DeleteMarkerInterface;
