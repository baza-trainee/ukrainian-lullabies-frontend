import { configureStore } from "@reduxjs/toolkit";
import PopularSongsSlice from "./PopularSongs/PopularSongsSlice";
import themeReducer from "./theme/themeSlice";
import dataReducer from "./DataSlice";
import currentSongReducer from "./currentSong/currentSongSlice";
import selectionSongsReducer from "./SelectionSongs/selectionSongsSlice";
import contactsSlice from "./Contacts/contactsSlice";
import partnersSlice from "./Partners/partnersSlice";
import sendFormSlice from "./sendForm/sendForm-slice";
import currentPlayerReducer from "./CurrentPlayer/currentPlayerSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    popularSongs: PopularSongsSlice,
    data: dataReducer,
    currentSong: currentSongReducer,
    selectionSongs: selectionSongsReducer,
    contacts: contactsSlice,
    partners: partnersSlice,
    sendForm: sendFormSlice.reducer,
    currentPlayer: currentPlayerReducer,
  },
});

export default store;
