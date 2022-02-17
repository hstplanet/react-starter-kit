import Auth from "./Auth";
import Storage from "./Storage";
import Store from "../../models";
import Socket from "./Socket";

export default class Serive {

    auth = new Auth();
    store = new Store();
    storage = Storage;
    socket = Socket;

}
