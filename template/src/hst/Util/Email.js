import axios from "axios";
import ejs from "ejs";
import hst from "hst/index";
import cr from 'crypto-js';
import invitation from "pages/Mail/OrganizationInvitation.ejs";

class EmailSender {

    sendMail(mailView, email, data) {
        return new Promise((resolve, reject) => {
            var mailConfig = new hst().conf.mailConfig;
            var message = ejs.render(invitation, data);
            mailConfig.auth.pass = cr.AES.encrypt(mailConfig.auth.pass, new hst().conf.hstcloud.key).toString();
            mailConfig.auth.user = cr.AES.encrypt(mailConfig.auth.user, new hst().conf.hstcloud.key).toString();
            axios.post(new hst().conf.server + "service/mailservice/send", { message: message, config: mailConfig, to: email, subject: "Organizasyon Daveti" }).then(mail => {
                resolve(mail);
            }).catch(err => {
                reject(err);
            });
        })
    }



}

export default new EmailSender();