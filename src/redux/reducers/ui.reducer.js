import * as uiType from "redux/types/ui.type";

const initialState = {
  displayLayout: true,
  displayLoading: false,
  dialog: {
    open: false,
    title: "",
    content: "",
  },
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

    case uiType.UI_OPENDIALOG:
      var { title, content } = action.payload;

      stateClone.dialog = {
        ...stateClone.dialog,
        open: true,
        title,
        content,
      };

      return stateClone;

    case uiType.UI_CLOSEDIALOG:
      stateClone.dialog = {
        ...stateClone.dialog,
        open: false,
        title: "",
        content: "",
      };

      return stateClone;

    default:
      return { ...state };
  }
};

export default uiReducer;
