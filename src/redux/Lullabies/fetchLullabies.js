
import axios from "axios";
import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from "../DataSlice";

const API_URL = "http://lullabies.eu-north-1.elasticbeanstalk.com/api/";

const songsData = [
  {
    id: 0,
    url: "https://deti.e-papa.com.ua/mpf/9211814143.mp3",
    name: "Колискова для мами",
    lyrics: 'колискова для мами слова',
    duration: '00:59',
  },
  {
    id: 1,
    url: "https://deti.e-papa.com.ua/mpf/17146805.mp3",
    name: "Ходить сон бiля вiкон",
    lyrics: "Ой ходить сон коло вікон, \n А дрімота — коло плота.\nПитається сон дрімоти:\n — А де будем ночувати? \n \n\n \nДе хатонька теплесенька,\nДе дитина малесенька,—Там ми будем ночувати,Дитиночку колихати.\nОй на кота та воркота,На дитину та й дрімота,Котик буде воркотати,\n\n  Дитинонька буде спати.",
    duration: '00:59',
  },
  {
    id: 2,
    url: "https://deti.e-papa.com.ua/mpf/9211811816.mp3",
    name: "Котику сіренький",
    lyrics: 'Котику Сіренький \n Котику Біленький \n Котку Волохатий \nне ходи по Хаті \n Не ходи по Хаті \n не буди Дитяти \n Дитя буде спати \n Котик воркотати \nОй на Кота на Воркота \nНа Дитинку Дрімота \n(А-а а-а а-а а)',
    duration: '00:59',
  },
  {
    id: 3,
    url: "https://deti.e-papa.com.ua/mpf/921180978.mp3",
    name: "Колискова",
    lyrics: 'Котику сіренький текст',
    duration: '00:59',
  },
   {
    id: 4,
    url: "https://soundbible.com/mp3/Radio%20Tune-SoundBible.com-1525681700.mp3",
    name: "Radio tune",
    watches: 2000,
    duration: "0:05",
  },
];

export const fetchData = () => async (dispatch) => {
  try {
    // dispatch(fetchDataStart());
    // const response = await axios.get(`${API_URL}lullabies/`);
    dispatch(fetchDataSuccess(songsData));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};
