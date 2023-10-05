
import axios from "axios";
import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from "../DataSlice";

const API_URL = "http://lullabies.eu-north-1.elasticbeanstalk.com/api/";

export const fetchData = () => async (dispatch) => {
  try {
    dispatch(fetchDataStart());
    const response = await axios.get(`${API_URL}lullabies/?source-format=audio`);
    const formatedData = await response.data.map((item, index) => ({
      id: index,
      name: item.name,
      url: item.source.audio,
      duration: "10:00",
    }));
    dispatch(fetchDataSuccess(formatedData));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};

