"use client";
import UserProfile from "@/components/UserProfile";
import React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
function ProfilePage() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div>
      <UserProfile />
      <div>
        <Button onClick={handleClick}>Open Snackbar</Button>
        <Snackbar
          open={open}
          autoHideDuration={1000}
          onClose={handleClose}
          message="Note archived"
          action={action}
        />
      </div>
    </div>
  );
}

export default ProfilePage;
