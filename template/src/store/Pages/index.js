import { createSlice } from '@reduxjs/toolkit'

import initialState from "./state"
import reducers from "./mutations"

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers
})

export default pageSlice