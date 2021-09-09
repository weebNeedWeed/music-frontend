import * as uiType from "redux/types/ui.type";

export const changeLayoutStatus = (status) => {
  return {
    type: uiType.UI_CHANGELAYOUTSTATUS,
    payload: {
      status,
    },
  };
};

export const changeLoadingStatus = (status) => {
  return {
    type: uiType.UI_CHANGELOADINGSTATUS,
    payload: {
      status,
    },
  };
};

export const openDialog = (title, content) => {
  return {
    type: uiType.UI_OPENDIALOG,
    payload: {
      title,
      content,
    },
  };
};

export const closeDialog = () => {
  return {
    type: uiType.UI_CLOSEDIALOG,
  };
};
