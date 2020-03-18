import * as React from 'react';
import { connect } from 'react-redux';
import { useRouteMatch, useHistory, Link } from 'react-router-dom';
import { routes } from '../routes';
import { IttyniState } from '../store/index';
import { AdminState } from '../store/Admin/index';


interface IAdminLayoutProps {
    admin : AdminState
}

const AdminLayout: React.FC<IAdminLayoutProps> = ({admin}) => {

    console.log(admin)

    let adminPath = useRouteMatch(routes.admin.path);

    let history = useHistory();

    const {location : { pathname }} : any = history

    const handleClick=()=>{
        history.push('/auth');
        console.log("clicked")
    }

    
    // verify user and token

        // display dashboard

        // display module chosen

    // return to auth if not connected

  return(
    <div>
        <Link 
            to={{
                pathname : `${pathname}header`,
                state : admin
            }}
        >
            Admin            
        </Link>
    </div>
  ) ;
};


function Header(props : any){
    console.log(props)
    let headerPath = useRouteMatch(`/admin/:user/header`);
    console.log(headerPath)
    return<div>this is header</div>
}




const mapStateToprops = ({adminStates} : IttyniState) =>({
    admin : adminStates
})
const Admin = connect(mapStateToprops)(AdminLayout);

export default Admin;