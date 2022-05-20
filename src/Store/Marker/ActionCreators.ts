import axios from 'axios';
import { MarkerType } from '../../pages/mapPage/components/CustomMap';
import {
  AddMarkerInterface,
  DeleteMarkerInterface,
  MarkerActionEnum,
} from './types';
import { AppDispatch } from '../index';
import { GeocodeType } from '../../types/GeocodeTypes';

const token = 'pk.eyJ1IjoiaW5ub2tlbnRpeTI1MTciLCJhIjoiY2wwdHRicHd2MHAxZjNibm1odTdwNXk1cCJ9.aibsBxys2tKJkN25qkCAKg';

const MarkerActionCreators = {
  addMarker: (payload: MarkerType) => async (dispatch: AppDispatch) => {
    dispatch({
      type: MarkerActionEnum.ADD_MARKER,
      payload,
    });
    const {
      longitude,
      latitude,
    } = payload;
    try {
      const { data } = await axios.get<GeocodeType>(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${token}`);
      dispatch(AddressActionCreator.addAddress({ payload: data }));
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Яйца сосать');
    }
  },
  deleteMarker: (): DeleteMarkerInterface => ({
    type: MarkerActionEnum.DELETE_MARKER,
  }),
};

export default MarkerActionCreators;
