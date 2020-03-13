import { Reducer, combineReducers } from "redux";
import { LabTestsState, HeaderState, LabTestsListingActions } from "./types";

const initLabTestsState: LabTestsState = {
  fetching: false,
  Panel: []
};

export const LabTestsReducer: Reducer<LabTestsState> = (
  state = initLabTestsState,
  action
) => {
  switch (action.type) {
    case LabTestsListingActions.FETCH_LABTESTSFR:
      return { ...state, fetching: false };

    case LabTestsListingActions.RECEIVING_LABTESTSFR:
      return { ...state, fetching: true, data: action.payload };

    case LabTestsListingActions.SELECT_PANEL_TESTS:
      state.Panel
        ? state.Panel.push(action.payload)
        : (state.Panel = [action.payload]);

      return { ...state, Panel: [...state.Panel] };

    case "LABTEST_SEARCH_FRENCH_NAME_MNEMONIC_FINISHED":

      return { ...state, fetching: true, data: action.Tests  };

    default:
      return { ...state };
  }
};

const initHeaderState: HeaderState = {
  Header: "this is header state"
};
export const HeaderReducer: Reducer<HeaderState> = (state = initHeaderState) =>
  state;

export default combineReducers({
  LabTests: LabTestsReducer,
  Header: HeaderReducer
});
