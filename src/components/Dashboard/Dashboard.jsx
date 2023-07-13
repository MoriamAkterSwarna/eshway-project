import { Grid } from "@mui/material";
import PieChart from "./PieChart";

const Dashboard = () => {
  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 4 }} sx={{marginTop:"20px"}} >
      <Grid item xs={5.5} style={{ margin: "8px" }}>
        <div style={{ backgroundColor: "#FCB03E", padding: "10px" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <div style={{ backgroundColor: "#aCB503", padding: "10px" }}>
                1
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ backgroundColor: "#C42730", padding: "10px" }}>
                2
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ backgroundColor: "#aCB503", padding: "10px" }}>
                1
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ backgroundColor: "#C42730", padding: "10px" }}>
                2
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid sx={{boxShadow:3}} item xs={5.5}  style={{ margin: "20px" }}>
       
            <PieChart></PieChart>
            
        
      </Grid>
    </Grid>
  );
};

export default Dashboard;
