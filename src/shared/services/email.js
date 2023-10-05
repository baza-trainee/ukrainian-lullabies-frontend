import axios from "axios";

const instance = axios.create({
  baseURL: "http://lullabies.eu-north-1.elasticbeanstalk.com/api",
});

export const sendForm = async (data) => {
  const { data: result } = await instance.post("/email/", data);
  console.log(result);
  return result;
};
export default instance;
