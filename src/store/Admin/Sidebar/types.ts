// admin layout interfaces
export interface adminLayoutState {
    sidebarToggled : boolean;
}
//enumeration of user actions
export enum AdminLayoutActionTypes {
    //sidebar actions
    SIDEBAR_SHOW = '@@admin/SIDEBAR_SHOW',
    SIDEBAR_HIDE = '@@admin/SIDEBAR_HIDE',

    //header actions

    //footer actions
}