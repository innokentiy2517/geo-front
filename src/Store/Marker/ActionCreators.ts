import axios from 'axios';
import { MarkerType } from '../../pages/mapPage/components/CustomMap';
import {
  AddMarkerInterface,
  DeleteMarkerInterface,
  MarkerActionEnum,
} from './types';
import { GeocodeType } from '../../types/GeocodeTypes';
import AddressActionCreators from '../Address/ActionCreators';

const token = 'pk.eyJ1IjoiaW5ub2tlbnRpeTI1MTciLCJhIjoiY2wwdHRicHd2MHAxZjNibm1odTdwNXk1cCJ9.aibsBxys2tKJkN25qkCAKg';

export const MarkerActionCreators = {
  addMarker: (payload: MarkerType): AddMarkerInterface => ({
    type: MarkerActionEnum.ADD_MARKER,
    payload,
  }),
  fetchAddress: (payload: MarkerType) => async () => {
    MarkerActionCreators.addMarker(payload);
    const { longitude, latitude } = payload;
    try {
      const { data } = await axios.get<GeocodeType>(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${token}`,
      );
      AddressActionCreators.addAddress(data);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  },
  deleteMarker: (): DeleteMarkerInterface => ({
    type: MarkerActionEnum.DELETE_MARKER,
  }),
};

export default MarkerActionCreators;
