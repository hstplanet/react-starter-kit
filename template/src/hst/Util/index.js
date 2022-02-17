import { date , uid, Notify, LocalStorage, SessionStorage, LoadingBar } from "quasar";
import CityTown from "./CityTown";
import Local from "./Local";
import EmailSender from "./Email";
import HSTDate from "./HSTDate"
import IP from "./IP"
import Init from "./Init"

class Util {

    //date = date;
    date = HSTDate;
    uid = uid;
    notify = Notify;
    LocalStorage = LocalStorage;
    SessionStorage = SessionStorage;
    LoadingBar = LoadingBar;
    email = EmailSender;
    math() { };
    location = CityTown
    local = Local
    ip = IP;
    init = new Init();

}

export default new Util();