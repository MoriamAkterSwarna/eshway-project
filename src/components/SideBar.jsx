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
import CastForEducationRoundedIcon from '@mui/icons-material/CastForEducationRounded';
import logo from '../assets/logo.png'
import { Button } from "@mui/material";
const drawerWidth = 240;

const SideBar = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
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
                  <div style={{backgroundColor:"#ffffff", borderRadius: "50%" ,width:"25px" ,height:"25px"}}>
                  <CastForEducationRoundedIcon sx={{  padding:"2px"  }} /> 
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
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
};
export default SideBar;
