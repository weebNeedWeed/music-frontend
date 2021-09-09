import React from "react";
import AppDialogPresentation from "./AppDialog.presentation";
import { useSelector, useDispatch } from "react-redux";
import * as uiAction from "redux/actions/ui.action";

function AppDialog() {
  const dispatch = useDispatch();

  const selectDialogTitle = useSelector((state) => state.ui.dialog.title);
  const selectDialogContent = useSelector((state) => state.ui.dialog.content);
  const selectDialogOpen = useSelector((state) => state.ui.dialog.open);

  const handleClose = () => {
    dispatch(uiAction.closeDialog());
  };

  return (
    <AppDialogPresentation
      title={selectDialogTitle}
      content={selectDialogContent}
      open={selectDialogOpen}
      handleClose={handleClose}
    />
  );
}

export default AppDialog;
