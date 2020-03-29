import { Dispatch } from 'redux';
import { store } from '../../index';
import { AdminActions } from '../store/actions';
export class Admin{

    private dispatch : Dispatch = store.dispatch

    

    constructor(){
        
    }

    /**
     * close adminSidebar
     */
    adminSidebaeClose = () => this.dispatch({type : AdminActions.ADMIN_LAYOUT_CLOSE_OPEN_SIDBAR});
}