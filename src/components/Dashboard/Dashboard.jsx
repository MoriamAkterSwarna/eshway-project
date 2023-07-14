import { Grid, Typography } from "@mui/material";
import PieChart from "./PieChart";
import Students from "./Students";
import Events from "./Events";
import LinearProgress from "@mui/material/LinearProgress";
const Dashboard = () => {
  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={{ xs: 2, sm: 2, md: 4 }}
      sx={{ marginTop: "20px" , 
     }}
    >
      <Grid item xs={5.5} style={{ margin: "8px" }}>
        <div style={{ padding: "10px" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid
              item
              xs={5.5}
              sx={{ boxShadow: 4, marginRight: "5%", marginBottom: "5%" }}
            >
              <div style={{ padding: "6%" }}>
                <Typography variant="subtitle2">Total Students</Typography>
                <Typography variant="body1" fontWeight="bold">3280</Typography>
                <div>
                  <LinearProgress
                    sx={{
                      height: "6px",
                      width: "90%",
                      borderRadius: "5px",
                      overflow: "hidden",
                      marginTop:"5px",
                      bgcolor:"#C4C4C4",
                      "& .MuiLinearProgress-barColorPrimary": {
                        backgroundColor: '#FCB03E',
                      },
                      
                    }}
                    variant="determinate"
                    value={80}
                    
                  />
                  <small>80% Increase in 20 Days</small>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={5.5}
              sx={{ boxShadow: 4, marginBottom: "5%" }}
            >
              <div style={{ padding: "6%" }}>
                <Typography variant="subtitle2">New Students</Typography>
                <Typography variant="body1" fontWeight="bold">245</Typography>
                <div>
                  <LinearProgress
                    sx={{
                      height: "6px",
                      width: "90%",
                      borderRadius: "5px",
                      overflow: "hidden",
                      marginTop:"5px",
                      bgcolor:"#C4C4C4",
                      "& .MuiLinearProgress-barColorPrimary": {
                        backgroundColor: '#FCB03E',
                      },
                      
                    }}
                    variant="determinate"
                    value={50}
                    
                  />
                  <small>50% Increase in 20 Days</small>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={5.5}
              sx={{ boxShadow: 4, marginRight: "5%", marginBottom: "5%" }}
            >
              <div style={{ padding: "6%" }}>
                <Typography variant="subtitle2">Total Course</Typography>
                <Typography variant="body1" fontWeight="bold">28</Typography>
                <div>
                  <LinearProgress
                    sx={{
                      height: "6px",
                      width: "90%",
                      borderRadius: "5px",
                      overflow: "hidden",
                      marginTop:"5px",
                      bgcolor:"#C4C4C4",
                      "& .MuiLinearProgress-barColorPrimary": {
                        backgroundColor: '#C42730',
                      },
                      
                    }}
                    variant="determinate"
                    value={76}
                    
                  />
                  <small>76% Increase in 20 Days</small>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={5.5}
              sx={{ boxShadow: 4, marginBottom: "5%" }}
            >
              <div style={{ padding: "6%" }}>
                <Typography variant="subtitle2">Total Sales</Typography>
                <Typography variant="body1" fontWeight="bold">₹25160</Typography>
                <div>
                  <LinearProgress
                    sx={{
                      height: "6px",
                      width: "90%",
                      borderRadius: "5px",
                      overflow: "hidden",
                      marginTop:"5px",
                      bgcolor:"#C4C4C4",
                      "& .MuiLinearProgress-barColorPrimary": {
                        backgroundColor: '#156C3C',
                      },
                      
                    }}
                    variant="determinate"
                    value={30}
                    
                  />
                  <small>30% Increase in 20 Days</small>
                </div>
              </div>
            </Grid>
            
            
          </Grid>
        </div>
      </Grid>
      <Grid sx={{ boxShadow: 3 }} item xs={5.5} style={{ margin: "20px" }}>
        <PieChart></PieChart>
      </Grid>
      <Grid sx={{ boxShadow: 3 }} item xs={3.5} style={{ marginLeft: "20px" }}>
        <Events></Events>
      </Grid>
      <Grid sx={{ boxShadow: 3 }} item xs={7.5} style={{ marginLeft: "20px" }}>
        <Students></Students>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
