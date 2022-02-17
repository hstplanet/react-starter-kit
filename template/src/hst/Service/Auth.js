import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import conf from "../../../hst.conf";

export default class Auth {

    onAuthStateChanged() {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem('auth').then(token => {
                if (token) {
                    axios.post(conf.server + "service/auth/onAuthStateChanged?target=" + conf.serverTarget, { token: token }).then(user => {
                        if (user.data.err !== undefined && user.data.err) {
                            reject(user.data);
                        } else {
                            resolve(user.data);
                        }
                    }).catch(err => {
                        reject(err);
                    });
                } else {
                    reject();
                }
            });
        });
    };

    signInWithEmailAndPassword(email, password) {
        return new Promise((resolve, reject) => {
            axios.post(conf.server + "service/auth/signin?target=" + conf.serverTarget, { emailAddress: email, password: password }).then(token => {
                if (token.data.err !== undefined && token.data.err) {
                    reject(token.data);
                } else {
                    AsyncStorage.setItem("auth", token.data.token).then(() => {
                        resolve(token.data);
                    }).catch(err => reject(err));
                }
            }).catch(err => {
                reject(err);
            });
        });

    };

    createUserWithEmailAndPassword(email, password) {
        return new Promise((resolve, reject) => {
            axios.post(conf.server + "service/auth/signup?target=" + conf.serverTarget, { emailAddress: email, password: password, auth: conf.auth }).then(token => {
                if (token.data.err !== undefined && token.data.err) {
                    reject(token.data);
                } else {
                    AsyncStorage.setItem("auth", token.data.token).then(() => {
                        if (conf.auth.emailVerification) {
                            resolve(token.data);
                            /*this.sendEmailVerification().then(res => {
                                resolve(token.data);
                            });*/
                        } else {
                            resolve(token.data);
                        }
                    }).catch(err => reject(err));
                }
            }).catch(err => {
                reject(err);
            });
        });
    };

    updateProfile(update) {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem("auth").then(token => {
                update.token = token;
                axios.post(conf.server + "service/auth/update?target=" + conf.serverTarget, update).then(res => {
                    if (res.data.err) {
                        reject(res.data);
                    } else {
                        resolve(res.data)
                    }
                });
            });
        })
    };

    sendEmailVerification() {
        return new Promise((resolve, reject) => {
            this.onAuthStateChanged().then(user => {
                AsyncStorage.getItem("auth").then(token => {
                    var res = {
                        fullName: user.fullName,
                        url: conf.host + conf.auth.emailVerificationURL + "?token=" + token
                    }
                    axios.post(conf.server + "service/auth/sendEmailVerification?target=" + conf.serverTarget, { token: token, app: conf.app, message: res, config: conf.mailConfig }).then(mail => {
                        resolve(mail);
                    }).catch(err => {
                        reject(err);
                    });
                });
            });
        })
    };

    logout() {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem('auth').then(token => {
                axios.post(conf.server + "service/auth/logout?target=" + conf.serverTarget, { token: token }).then(logout => {
                    AsyncStorage.removeItem("auth").then(() => {
                        resolve(logout.data);
                    }).catch(err => reject(err));
                }).catch(err => {
                    reject(err);
                });
            });
        });
    };

    emailVerification() {
        const hst = new HST();
        return new Promise((resolve, reject) => {
            axios.post(hst.conf.server + "service/auth/emailVerification?target=" + hst.conf.serverTarget, { token: hst.util.LocalStorage.getItem("auth") }).then(verification => {
                resolve(verification.data);
            }).catch(err => {
                reject(err);
            });
        });
    };

    resetPassword(email) {
        return new Promise((resolve, reject) => {
            var res = {
                fullName: "",
                key: ""
            }
            axios.post(conf.server + "service/auth/resetPassword?target=" + conf.serverTarget, { email: email, config: conf.mailConfig, app: conf.app, message: res }).then(reset => {
                if (reset.err) {
                    reject(err);
                }
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        })
    };

    sendNewPassword(token, password) {
        return new Promise((resolve, reject) => {
            axios.post(conf.server + "service/auth/mobilSendNewPassword?target=" + conf.serverTarget, { token: token, password: password }).then(reset => {
                if (reset.data.err) reject(err);

                resolve(reset.data);
            }).catch(err => {
                reject(err);
            });
        });
    };

    controlKey(token) {
        return new Promise((resolve, reject) => {
            axios.post(conf.server + "service/auth/controlKey?target=" + conf.serverTarget, { token: token }).then(reset => {
                if (reset.data.err) reject(err);

                resolve(reset.data);
            }).catch(err => {
                reject(err);
            });
        });
    };

    errorCode() { };

}