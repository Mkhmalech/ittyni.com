import { store } from '../../../index';
import { Dispatch } from 'redux';
import { UserActions } from '../store/actions';

export class User {

    constructor(){}

    /**
     * @function getUsername
     * 
     * @return string
     */
    getUsername = ()=>{
        
    }

    /**
     * dispatch user list
     */
    getAllUsers = () => store.dispatch({
        type : UserActions.USER_LIST_ALL,
        path : 'users',
        payload : {
            query : `mutation{users{listAllWithRole{id email role{name}}}}`
        }
    })
}