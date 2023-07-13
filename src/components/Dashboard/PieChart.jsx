
import { Typography } from "@mui/material";
import { Chart } from "react-google-charts";

export const data = [
  ["Total Sales", "₹25160"],
  ["Academic Courses", 60],
  ["Non-Academic Courses", 25],
  ["Test Series", 15],
];

export const options = {
  title: "Payment Analytics",
  colors: ["#C42730", "#3366CC", "green"],
  legend: {
    position: "right",
    alignment: "end",
  },
};
const PieChart = () => {
    return (
        <>
        <Chart style={{position:"relative"}}
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"230px"}
      />
        
        <div style={{ textAlign: "right",marginRight:"22%" ,position:"absolute", top:"22%" , right:"-13%"}}>
        
        <div style={{display:"flex"}}>
                <Typography variant="body2" sx={{marginRight:"7px"}}>Total Sales</Typography> 
                <Typography variant="body2">₹25160</Typography>
        </div>
        <div style={{display:"flex"}}>
                <Typography variant="body2" fontSize={11} sx={{marginRight:"7px"}}>Academic Courses</Typography> 
                <Typography variant="body2" fontSize={11}>₹25160</Typography>
        </div>
        <div style={{display:"flex"}}>
                <Typography variant="body2" fontSize={11} sx={{marginRight:"7px"}}>Non-Academic Courses</Typography> 
                <Typography variant="body2" fontSize={11}>₹25160</Typography>
        </div>
        <div style={{display:"flex"}}>
                <Typography variant="body2" fontSize={11} sx={{marginRight:"7px"}}>Test Series</Typography> 
                <Typography variant="body2" fontSize={11}>₹25160</Typography>
        </div>
        
      </div>
        
        </>
    );
};

export default PieChart;

