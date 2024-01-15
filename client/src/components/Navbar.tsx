import { AppBar, CssBaseline } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import React from "react";

const Navbar = () => {
  return (
    <>
      <CssBaseline />
      <AppBar
        sx={{
          height: "64px",
          position: "static",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "50px",
            padding: '10px',
            marginLeft: '5px'
          }}
        >
          <CallMadeIcon
            fontSize="medium"
            sx={{ color: "black"}}
          />
        </div>
      </AppBar>
    </>
  );
};

export default Navbar;
