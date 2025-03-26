import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
  } from "@mui/material";
  import React from "react";
  
  function NavBar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar 
          sx={{ backgroundColor: "#f5ebd7", height: "90px" }} 
          position="static"
        >
          <Toolbar sx={{ height: "90px" }}>  {}
            <IconButton
              size="large"
              edge="start"
              sx={{ mr: 2 }} 
              aria-label="menu"
            >
              {}
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
  
  export default NavBar;
  