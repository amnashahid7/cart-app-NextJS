import cartReducer from '@/features/CartSlice'
import { configureStore } from '@reduxjs/toolkit'

export const makeStore = configureStore({
    reducer: {
        allCart: cartReducer,
    },
})
