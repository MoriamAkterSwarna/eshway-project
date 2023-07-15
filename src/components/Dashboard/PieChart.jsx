
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
        <div style={{position:"relative"}}>
        <Chart 
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"230px"}
      />
        
        <div style={{ textAlign: "right",marginRight:"22%" ,position:"absolute", top:"22%" , right:"-10%" ,
        transform: "translate( 35%,-50%)",
        "@media (max-width: 780px)": {
          top: "25%"
        },}}>
        
        <div style={{display:"flex" , justifyContent: "space-between"}}>
                <Typography variant="body2" sx={{marginRight:"12px"}}>Total Sales</Typography> 
                <Typography variant="body2">₹25160</Typography>
        </div>
        <div style={{display:"flex" , justifyContent: "space-between"}}>
                <Typography variant="body2" fontSize={11} sx={{marginRight:"12px"}}>Academic Courses</Typography> 
                <Typography variant="body2" fontSize={11} >₹25160</Typography>
        </div>
        <div style={{display:"flex" , justifyContent: "space-between"}}>
                <Typography variant="body2" fontSize={11} sx={{marginRight:"12px"}}>Non-Academic Courses</Typography> 
                <Typography variant="body2" fontSize={11}>₹25160</Typography>
        </div>
        <div style={{display:"flex", justifyContent: "space-between"}}>
                <Typography variant="body2" fontSize={11} sx={{marginRight:"12px"}}>Test Series</Typography> 
                <Typography variant="body2" fontSize={11}>₹25160</Typography>
        </div>
        
      </div>
        
        </div>
    );
};

export default PieChart;


