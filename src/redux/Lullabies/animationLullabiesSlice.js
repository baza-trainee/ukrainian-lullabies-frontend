import axios from "axios";
import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from "./traditionalSongsSlice";

const API_URL = "http://lullabies.eu-north-1.elasticbeanstalk.com/api/";

export const fetchData = () => async (dispatch) => {
  try {
    dispatch(fetchDataStart());
    const response = await axios.get(`${API_URL}lullabies/?source-format=video`);
      const formatedData = {
      id: item.id,
      name: item.name,
      url: item.source.video,
      duration: item.duration,
    };
      dispatch(fetchDataSuccess(formatedData));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};