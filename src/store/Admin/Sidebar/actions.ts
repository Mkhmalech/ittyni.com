import { action } from 'typesafe-actions';
import { AdminLayoutActionTypes } from "./types";

// sidebar handle click show
export const adminSidebarShow = () => action(AdminLayoutActionTypes.SIDEBAR_SHOW);
// sidebar handle hide click
export const adminSidebarHide = () => action(AdminLayoutActionTypes.SIDEBAR_HIDE);