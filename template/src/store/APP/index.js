import { createSlice } from '@reduxjs/toolkit'

import initialState from "./state"
import reducers from "./mutations"

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers
})

export default appSlice