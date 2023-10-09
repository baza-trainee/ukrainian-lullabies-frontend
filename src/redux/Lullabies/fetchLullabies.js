import axios from "axios";
import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from "./traditionalSongsSlice";

const API_URL = "http://lullabies.eu-north-1.elasticbeanstalk.com/api/";

export const fetchData = () => async (dispatch) => {
  try {
    dispatch(fetchDataStart());
    const response = await axios.get(`${API_URL}lullabies/?source-format=audio`);
    const formatedData = await response.data.map((item) => ({
      id: item.id,
      name: item.name,
      url: item.source.audio,
      lyrics: item.lyrics,
      duration: item.source.duration.slice(3, 8),
    }));
    dispatch(fetchDataSuccess(formatedData));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};
