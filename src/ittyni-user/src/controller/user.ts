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
            query : `mutation{users{listAllWithRole{id email role{id name}}}}`
        }
    })

    /**
     * dispatch user list
     */
    getUserDetails = (id: string) => store.dispatch({
        type : UserActions.USER_FETCH_DETAILS,
        path : 'users',
        payload : {
            query : `mutation{users{getUserDetails(id:"${id}"){id email role{name id addedBy createdAt}}}}`
        }
    })
    /**
     * dispatch user list
     */
    addRoleToUser = (id: string) => store.dispatch({
        type : UserActions.USER_ADD_ROLE,
        path : 'users',
        payload : {query:`mutation{roleAndPermissions{addRoleToUser(inputRole:{name : "director" id:"${id}"})}}`}
    })
    /**
     * dispatch user list
     */
    getLabAccount = (query: string) => store.dispatch({
        type : UserActions.USER_FIND_ACCOUNT,
        path : 'labos',
        payload : {query:`query{searchLaboByName(query : "${query}"){name}}` }
    })

    /**
     * dispatch user list
     */
    linkAccount = (userId: string, accountName : string) => store.dispatch({
        type : UserActions.USER_LINK_ACCOUNT,
        path : 'users',
        payload : {query:`mutation {
            account {
              linkAccountToUser(iLinkAccount : {
                accountName : "${accountName}",
                id : "${userId}"
              })
            }
          }` }
    })
}

export default new User()