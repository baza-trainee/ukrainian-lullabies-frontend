import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./Contacts/contactsSlice";
import currentPlayerReducer from "./CurrentPlayer/currentPlayerSlice";
import animationsSliceReducer from "./Lullabies/animationLullabiesSlice";
import traditionSliceReducer from "./Lullabies/fetchLullabies";
import partnersSlice from "./Partners/partnersSlice";
import PopularSongsSlice from "./PopularSongs/PopularSongsSlice";
import selectionSongsReducer from "./SelectionSongs/selectionSongsSlice";
import achievementsReducer from "./achievements/achievementsSlice";
import currentLanguageReducer from "./currentLanguage/currentLanguageSlice";
import currentSongReducer from "./currentSong/currentSongSlice";
import docsReducer from "./docs/docsSlice";
import sendFormSlice from "./sendForm/sendForm-slice";
import themeReducer from "./theme/themeSlice";

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
    docs: docsReducer,
    achievements: achievementsReducer,
  },
});

export default store;
