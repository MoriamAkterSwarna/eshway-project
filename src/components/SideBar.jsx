


import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import navIcon from "../assets/online-learning 1.svg";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import logo from "../assets/logo.png";
import Dashboard from "./Dashboard/Dashboard";
import Navbar from "./Navbar";
const drawerWidth = 240;

function SideBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {[
          "All Products",
          "Posts",
          "Course Management",
          "User Management",
          "Test Series Management",
          "Payment Management",
          "Student Management",
          "Faculty Management",
          "Calendar",
        ].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{ paddingTop: "0px" }}>
              <ListItemIcon>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "50%",
                    width: "25px",
                    height: "25px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={navIcon} alt="Icon" />
                </div>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Navbar></Navbar>
        </Toolbar>
        
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#0373BA",
              color: "#ffffff",
            },
          }}
        >
          <Toolbar
            sx={{
              backgroundColor: "#FCB03E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={logo} alt="Logo" />
          </Toolbar>
          <Divider />

          <Toolbar>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "10px",
                marginTop: "20px",
                width: "100%",
              }}
            >
              <Button
                variant="contained"
                sx={{ backgroundColor: "#C42730", marginBottom: "10px" }}
              >
                Live Class
              </Button>
              <Button variant="contained" sx={{ backgroundColor: "#FCB03E" }}>
                Announcement
              </Button>
            </div>
          </Toolbar>
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#0373BA",
              color: "#ffffff",
            },
          }}
          open
        >
          <Toolbar
            sx={{
              backgroundColor: "#FCB03E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={logo} alt="Logo" />
          </Toolbar>
          <Divider />

          <Toolbar>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "10px",
                width: "100%",
              }}
            >
              <Button
                variant="contained"
                sx={{ backgroundColor: "#C42730", marginBottom: "10px" }}
              >
                Live Class
              </Button>
              <Button variant="contained" sx={{ backgroundColor: "#FCB03E" }}>
                Announcement
              </Button>
            </div>
          </Toolbar>
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        
        <Dashboard></Dashboard>
      </Box>
    </Box>
  );
}

SideBar.propTypes = {
  window: PropTypes.func,
};

export default SideBar;
