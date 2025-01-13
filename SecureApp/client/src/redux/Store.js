import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './AuthSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage,
    // // Specify the reducers you want to persist
    // whitelist: ['Auth'] // Assuming 'user' is the slice to persist
};

const Reducer = persistReducer(persistConfig, AuthSlice);

export const store = configureStore({
    reducer: {
        Auth: Reducer // Correctly setting the persisted reducer under its slice name
    }

});

export const persistor = persistStore(store);