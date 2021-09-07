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
