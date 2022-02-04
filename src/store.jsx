import { configureStore } from '@reduxjs/toolkit';
import registerStepReducer from './reducer/registerStepSlice';

export const store = configureStore({
    reducer: {
        registerStep: registerStepReducer
    }
})
