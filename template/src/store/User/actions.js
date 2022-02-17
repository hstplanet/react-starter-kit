import actions from "./index"

export default {

    setUser: (action) => {
        return actions.actions.setUser(action)
    },

    setLogout: () => {
        return actions.actions.logout();
    },

    setPhotoURL: (action) => {
        return actions.actions.setPhotoURL(action)
    },

    setAddress: (action) => {
        return actions.actions.setAddress(action)
    }

}