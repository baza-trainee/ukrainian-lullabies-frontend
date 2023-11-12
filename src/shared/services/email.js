import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.kolyskova.com/lullabies",
});

export const sendForm = async (data) => {
  const response = await instance.post("/email/", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response;
};

export default instance;
