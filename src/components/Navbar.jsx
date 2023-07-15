import {
  Avatar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import moment from "moment/moment";
import userImg from "../assets/Avatar.png";

const Navbar = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" ,flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" }, }}>
          
          <div style={{display:"flex" , alignItems:"center", flexDirection:"row"}}>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{
              mr: 2,
              backgroundColor: "#2AD577",
              display: "flex",
              justifyContent: "space-around",
            }}
          ></IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Super Admin
          </Typography>
          </div>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,

              color: "inherit",
              textDecoration: "none",
            }}
          >
            Super Admin
          </Typography>

          <Toolbar sx={{display:"flex", justifyContent:"flex-end"}}>
            <Typography>{moment().format(" h:mm a  MMMM Do YYYY")}</Typography>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" fill="white" fillOpacity="0.01" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.48502 17.6681C6.67074 17.8539 6.89126 18.0012 7.13396 18.1018C7.37667 18.2024 7.6368 18.2541 7.89952 18.2541C8.16223 18.2541 8.42237 18.2024 8.66507 18.1018C8.90777 18.0012 9.12829 17.8539 9.31402 17.6681L6.48502 14.838C6.29906 15.0238 6.15155 15.2444 6.0509 15.4872C5.95025 15.73 5.89844 15.9902 5.89844 16.253C5.89844 16.5159 5.95025 16.7761 6.0509 17.0189C6.15155 17.2617 6.29906 17.4823 6.48502 17.6681ZM11.382 5.47705L10.657 6.20205C9.87502 6.98405 8.44702 8.01505 7.45102 8.51305L4.43402 10.0221C3.93902 10.2701 3.85002 10.7961 4.24702 11.1931L12.803 19.7491C13.201 20.1451 13.725 20.062 13.974 19.5611L15.484 16.545C15.978 15.557 17.01 14.1251 17.795 13.3391L18.52 12.6131C19.3432 11.7899 19.8567 10.7075 19.9733 9.54916C20.0899 8.39084 19.8026 7.22781 19.16 6.25705C19.2676 6.17088 19.3563 6.06362 19.4209 5.94187C19.4854 5.82011 19.5243 5.68644 19.5353 5.54907C19.5462 5.41171 19.5289 5.27355 19.4845 5.14312C19.44 5.01268 19.3694 4.89272 19.2768 4.79061C19.1843 4.6885 19.0719 4.60641 18.9464 4.54939C18.821 4.49237 18.6852 4.46162 18.5474 4.45904C18.4096 4.45646 18.2728 4.4821 18.1453 4.53438C18.0178 4.58666 17.9023 4.66448 17.806 4.76305C17.783 4.78805 17.76 4.81205 17.74 4.83805C16.9135 4.29001 15.9437 3.99783 14.952 3.99805C14.289 3.99726 13.6323 4.12741 13.0196 4.38105C12.407 4.63468 11.8505 5.0068 11.382 5.47605V5.47705Z"
                  fill="white"
                />
              </svg>

              <Typography variant="body1">Howdy, username</Typography>
            </div>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <Avatar alt="Remy Sharp" src={userImg} />
              </Tooltip>
            </Box>
          </Toolbar>
        </Toolbar>
      </Container>
      

    
  
    </>
  );
};

export default Navbar;
