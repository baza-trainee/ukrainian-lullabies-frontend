import { configureStore } from "@reduxjs/toolkit";
import PopularSongsSlice from "./PopularSongs/PopularSongsSlice";
import themeReducer from "./theme/themeSlice";
import currentSongReducer from "./currentSong/currentSongSlice";
import selectionSongsReducer from "./SelectionSongs/selectionSongsSlice";
import contactsSlice from "./Contacts/contactsSlice";
import partnersSlice from "./Partners/partnersSlice";
import sendFormSlice from "./sendForm/sendForm-slice";
import currentPlayerReducer from "./CurrentPlayer/currentPlayerSlice";
import currentLanguageReducer from "./currentLanguage/currentLanguageSlice";
import animationsSliceReducer from "./Lullabies/animationLullabiesSlice";
import traditionSliceReducer from "./Lullabies/fetchLullabies"

const store = configureStore({
  reducer: {
    theme: themeReducer,
    popularSongs: PopularSongsSlice,
    traditionalSongs: traditionSliceReducer,
    lullabiesinAnimations: animationsSliceReducer,
    currentSong: currentSongReducer,
    selectionSongs: selectionSongsReducer,
    contacts: contactsSlice,
    partners: partnersSlice,
    sendForm: sendFormSlice.reducer,
    currentPlayer: currentPlayerReducer,
    currentLanguage: currentLanguageReducer,
  },
});

export default store;
