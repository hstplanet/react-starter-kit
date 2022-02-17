import axios from "axios";
import auth from "../Service/Auth"
import conf from "../../../hst.conf"
import { atob } from 'react-native-quick-base64';

class Storage {

    uploadFile(file) {
        const hst = new auth();
        return new Promise((resolve, reject) => {
            hst.onAuthStateChanged().then(user => {
                var formData = new FormData();
                formData.set("avatar", file);
                formData.set("serverURL", "Deneme");
                axios.post(hst.conf.server + "service/storage/upload/" + user.id, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                ).then((res) => {
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                })
            });
        });
    }

    uploadBlob(blob) {
        const hst = new auth();
        return new Promise((resolve, reject) => {
            hst.onAuthStateChanged().then(user => {
                let formData = new FormData();
                let file = this.dataURLtoFile(blob)
                formData.append("avatar", file)
                axios.post(conf.server + "service/storage/upload/" + user.id, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then((res) => {
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                })
            });
        });
    }

    uploadURL(url) {
        const hst = new auth();
        return new Promise((resolve, reject) => {
            hst.onAuthStateChanged().then(user => {
                this.uploadImageAsync(url, user.id).then(res => {
                    res.json().then(res => {
                        resolve(res);
                    })
                }).catch(err => { console.log(err); })
            });
        });
    }

    uploadImageAsync(uri, id) {
        let apiUrl = conf.server + "service/storage/upload/" + id;
        let uriParts = uri.split('.');
        let fileType = uriParts[uriParts.length - 1];

        let formData = new FormData();
        formData.append('avatar', {
            uri,
            name: `photo.${fileType}`,
            type: `image/${fileType}`,
        });

        let options = {
            method: 'POST',
            body: formData,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
            },
        };

        return fetch(apiUrl, options);
    }


}

export default new Storage();