import { configureStore } from '@reduxjs/toolkit'

{{#if_eq preset.loginsystem}}
import userReducer from './User/index'
import pageReducer from "./Pages/index"
{{/if_eq}}
import appReducer from "./APP/index"

export const store = configureStore({
    reducer: {
        {{#if_eq preset.loginsystem}}
        user: userReducer.reducer,
        page: pageReducer.reducer,
        {{/if_eq}}
        app : appReducer.reducer
    },
})