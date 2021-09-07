import * as uiType from "redux/types/ui.type";

const initialState = {
  displayLayout: true,
  displayLoading: false,
};

const uiReducer = (state = initialState, action) => {
  let stateClone = { ...state };

  switch (action.type) {
    case uiType.UI_CHANGELAYOUTSTATUS:
      stateClone.displayLayout = action.payload.status;
      return stateClone;

    case uiType.UI_CHANGELOADINGSTATUS:
      stateClone.displayLoading = action.payload.status;
      return stateClone;

    default:
      return { ...state };
  }
};

export default uiReducer;
