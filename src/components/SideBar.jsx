import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import logo from '../assets/logo.png'
import navIcon from '../assets/online-learning 1.svg'
import { Button } from "@mui/material";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard/Dashboard";
const drawerWidth = 240;

const SideBar = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Navbar></Navbar>
        
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor:"#0373BA",
            color: "#ffffff"

          },
        }}
        variant="permanent"
        anchor="left"
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
  <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px", marginTop:"10px", width:"100%" }}>
    <Button variant="contained" sx={{ backgroundColor: "#C42730", marginBottom: "10px" }}>Live Class</Button>
    <Button variant="contained" sx={{ backgroundColor: "#FCB03E" }}>Announcement</Button>
  </div>
</Toolbar>
        <Typography sx={{marginLeft:"10px", marginTop:"20px"}} >Main Menu</Typography>
        <List>
          {["All Products", "Posts", "Course Management", "User Management","Test Series Management","Payment Management", "Student Management", "Faculty Management","Calendar"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton sx={{paddingTop:"0px"}}>
                <ListItemIcon>
                  <div style={{backgroundColor:"#ffffff", borderRadius: "50%" ,width:"25px" ,height:"25px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                  
                    <img src={navIcon} alt="Icon" />
                  </div>
                </ListItemIcon>
                <ListItemText primary={text}  />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
        
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        
        <Dashboard></Dashboard>
      </Box>
    </Box>
  );
};
export default SideBar;
