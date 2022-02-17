import { createSlice } from '@reduxjs/toolkit'

import initialState from "./state"
import reducers from "./mutations"

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers
})

export default userSlice