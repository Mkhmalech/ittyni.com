import {store} from '../../../../index'
import { Dispatch } from "redux";
import { action } from 'typesafe-actions';
import { LabTestsListingActions } from '../../../../store/webSite/home/types';


class LabTestsClass {

    constructor(){}

    private Panel : any[] = [];

    // import actions Dispatcher
    private dispatch: Dispatch = store.dispatch;

    //on select test fill Panel List
    addTestToPanel = ({name, price, mnemonic} : any) => this.dispatch(action(LabTestsListingActions.SELECT_PANEL_TESTS, {name, price, mnemonic}))
    
    //get Panel
    // getLabTestsPanel = () => {
    //     console.log(this.Panel)
    // }
    
}

export default LabTestsClass;
