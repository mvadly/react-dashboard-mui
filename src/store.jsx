import { configureStore } from '@reduxjs/toolkit';
import registerStepReducer from './reducer/registerStepSlice';
import productSliceReducer from './reducer/Product'

export const store = configureStore({
    reducer: {
        registerStep: registerStepReducer,
        product: productSliceReducer
    }
})
