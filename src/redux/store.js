import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userslice from "./slices/Userslice"

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
const persistConfig = {
    key: 'root',
    storage,
  }

const rootReducer = combineReducers({
    user: userslice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer
})

export default store
export const persistor = persistStore(store)