import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage"
import Authentication from "./Authentication";


const persistConfig={
    key:"root",
    storage
}
const persisReducer = persistReducer(persistConfig,Authentication);
const store = configureStore({
    reducer:persisReducer
})
export default store;
export const persistor = persistStore(store);