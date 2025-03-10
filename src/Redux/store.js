"use client"

import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./authslice"
import { persistStore,persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import { FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER } from "redux-persist";
import itemsCartReducer from "./itemsCartSlice"

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer=combineReducers({
  auth:authReducer,
  itemsCart:itemsCartReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor=persistStore(store)