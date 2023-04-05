import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import React from "react";
import CustomDialog, { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";
import { FavoriteTable } from "./FavoriteTable";

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };
  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Application
          </Typography>
          <IconButton
            color="secondary"
            aria-label="favorites"
            component="label"
            onClick={handleClick}
          >
            <AddReactionIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
