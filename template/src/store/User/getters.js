import { useSelector } from 'react-redux'

export default {

    getUser: () => {
        return useSelector((state) => state.user.user)
    },

    getAddress: () => {
        return useSelector((state) => state.user.address)
    }

}