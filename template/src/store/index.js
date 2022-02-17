import { configureStore } from '@reduxjs/toolkit'
{{#if preset.loginsystem}}
import userReducer from './User/index'
import pageReducer from "./Pages/index"
{{/if}}
import appReducer from "./APP/index"

export const store = configureStore({
    reducer: {
        {{#if preset.loginsystem}}user: userReducer.reducer,
        page: pageReducer.reducer,{{/if}}
        app : appReducer.reducer
    },
})