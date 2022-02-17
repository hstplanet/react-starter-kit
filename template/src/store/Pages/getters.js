import { useSelector } from 'react-redux'

export default {

    getPage: () => {
        return useSelector((state) => state.page.pages)
    }

}