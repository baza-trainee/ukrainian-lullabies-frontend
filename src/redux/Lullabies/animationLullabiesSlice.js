import axios from "axios";
import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from "./traditionalSongsSlice";

const API_URL = "http://lullabies.eu-north-1.elasticbeanstalk.com/api/";

export const fetchData = () => async (dispatch) => {
  try {
    dispatch(fetchDataStart());
    const response = await axios.get(`${API_URL}lullabies/?source-format=video`);
      const formatedData = await Promise.all(
      response.data.map(async (item) => {
        const userResponse = await axios.get(`${API_URL}lullabies/${item.id}`);
        
        return {
          id: item.id,
          name: item.name,
          url: userResponse.data.source.video,
          duration: item.source.duration,
          cover: item.source.cover,
        };
      })
    );
      dispatch(fetchDataSuccess(formatedData));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};