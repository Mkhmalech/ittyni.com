/*** admin module for ittyni.com v1.0.0 ************
 * 
 * created by @khmamed
 *  
 * @TODO
 * 
 */

import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import * as Wrapper from './common/adminWrappers';
import { Globals } from './common/adminWrappers';
import Dock from './Docks';
import { Profile } from '../ittyni-user/src/admin/profile';
import { connect } from 'react-redux';
import { IttyniState } from '../store/index';
import * as  User  from '../ittyni-user/src/admin/User';
import { labRoutes } from '../lab-ittyni/src/routes';
import { Sidebar } from '../lab-ittyni/src/labTests/admin/LabTest';
import { Admin } from './controller/admin';



interface IAppProps extends AuthLoginState, AdminState, LabTestState {}

const AdminLayout: React.FunctionComponent<IAppProps> = ({isAuth, username, userId, sidebar, labTestDetails}) => {

  // create a admin instance to control layout 
  const admin = new Admin();
  // if user is not logged in or user data is not available 
  // return to authentification component
  if (userId === undefined || !localStorage.getItem('TTUID')  ) {
    return <Redirect to="/website/auth/login" />
  } else {
    // if authenticated continue
    return (
      <>
        <Globals />
        <Wrapper.admin>


          <Wrapper.header>
            i<span style={{ color: 'red' }}>TT</span>yni
          </Wrapper.header>

          <Wrapper.container>
          {/**
           * @khmamed
           * 
           * docks layout 
           * @TODO customize docks to be loadded from
           * module and link to module pages
           * module links pages and features 
           * will be storage in a json file 
           * 
           */}
            <Wrapper.dock > <Dock username={username ? username : 'undefned'} closeOpenSide={admin.adminSidebaeClose}/> </Wrapper.dock>

            <Wrapper.main closed={sidebar}>
            {/**
             * 
             * @khmamed
             * 
             * sidebar for docks menu 
             *
             * @TODO link docks menu item to 
             * corresponding pages 
             *
             */}
              <Wrapper.sidebar >      
                <Route path={`/admin/${username}/profile`} component={()=><User.Sidebar username ={username}/>} /> 
                <Route path={labRoutes.LabTests.admin.link} component={Sidebar} />
              </Wrapper.sidebar>


             {/*** module content *******
              *  
              * @TODO
              * 
              */
             }
              <Wrapper.content>
                {/* <Wrapper.tabModule>ModuleTabs</Wrapper.tabModule> */}
                <Wrapper.page>

                    <Route path={`/admin/${username}/profile`} component={()=><Profile username ={username}/>} />
                    <Route path={labRoutes.LabTests.admin.LabTestEdit.path} 
                            component={()=><labRoutes.LabTests.admin.LabTestEdit.component 
                                        LabTest={labTestDetails}  userId = {userId} />
                                      } 
                                    />
                    <Route path={labRoutes.LabTests.admin.LabtestListAll.path} component={labRoutes.LabTests.admin.LabtestListAll.component}  exact/>
                    
                </Wrapper.page>
              </Wrapper.content>

            </Wrapper.main>

          </Wrapper.container>
        </Wrapper.admin>
      </>
    )
  }
};

const mapStateToProps = ({Auth, admin, labState} : IttyniState)=>({
  isAuth : Auth.login? Auth.login.isAuth : false,
  username : Auth.login? Auth.login.username : undefined,
  userId : Auth.login? Auth.login.userId : undefined,
  sidebar : admin.sidebar,
  labTestDetails : labState.test? labState.test.labTestDetails : undefined
})
export default connect(mapStateToProps)(AdminLayout);