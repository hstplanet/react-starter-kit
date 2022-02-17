export default {
    setUser: (state, action) => {
        state.user = action.payload;
    },

    setPhotoURL: (state, action) => {
        state.user.photoURL = action.payload;
    },

    logout: (state, action) => {
        state.user = null
    },

    setAddress: (state, action) => {
        state.address = action.payload
    },
}