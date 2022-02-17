import { configureStore } from '@reduxjs/toolkit'

import userReducer from './User/index'
import pageReducer from "./Pages/index"
import appReducer from "./APP/index"

export const store = configureStore({
    reducer: {
        user: userReducer.reducer,
        page: pageReducer.reducer,
        app : appReducer.reducer
    },
})