import { useSelector } from 'react-redux'

export default {

    isLoading: () => {
        return useSelector((state) => state.app.loading)
    },
}