import { listAllUsers } from './admin/listAllUsers';
import { UserDetails } from './admin/userDetails';

export const userRoutes = {
    admin : {
        usersListAll : {
            path : `/admin/:username/users/list-all`,
            component: listAllUsers
        },
        userDetails : {
            path : '/admin/:username/users/details/:userId',
            component : UserDetails
        }
    },
    web : {}
}