import { listAllUsers } from './admin/listAllUsers';

export const userRoutes = {
    admin : {
        usersListAll : {
            path : `/admin/:user/users/list-all`,
            component: listAllUsers
        },
        userDetails : {
            path : '',
            component : '/admin/:user/users/:userId/details'
        }
    },
    web : {}
}