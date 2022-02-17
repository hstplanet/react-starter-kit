import axios from "axios";

class Local {

    getLocal() {
        return new Promise((resolve, reject) => {
            axios.get("https://ipapi.co/json/").then(res => {
                resolve(res.data);
            }).catch(err => reject());
        });
    }

}

export default new Local();