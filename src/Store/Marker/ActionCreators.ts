import { IMarker } from "../../Components/CustomMap";
import {
  AddMarkerInterface,
  DeleteMarkerInterface,
  MarkerActionEnum,
} from "./types";

export const MarkerActionCreators = {
  addMarker: (payload: IMarker): AddMarkerInterface => ({
    type: MarkerActionEnum.ADD_MARKER,
    payload,
  }),
  deleteMarker: (): DeleteMarkerInterface => ({
    type: MarkerActionEnum.DELETE_MARKER,
  }),
};
