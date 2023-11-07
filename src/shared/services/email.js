import axios from "axios";

const instance = axios.create({
  baseURL: "http://lullabies.eu-north-1.elasticbeanstalk.com/api",
});

export const sendForm = async (data) => {
  const response = await instance.post("/email/", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response;
};

export default instance;
