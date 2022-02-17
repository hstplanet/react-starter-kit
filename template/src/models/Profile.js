import IModel from '../hst/Intefaces/IModel';

export default class Profile extends IModel {

    constructor() {
        super("Profile");
    }

    attributes = {
        offer : true,
        update : true,
        organization : [],
        toWork : null
    }



}