import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from "@react-native-async-storage/async-storage";
import thunk from "redux-thunk";

import cardsReducer from "./entities/cards";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [],
}

const rootReducer = combineReducers({
    cards: cardsReducer,

});

const persistedReducer = persistReducer(persistConfig, rootReducer);



export const store = configureStore({
    reducer: persistedReducer,
    // reducer: rootReducer,
    middleware: [thunk]

});

export const persistor = persistStore(store);