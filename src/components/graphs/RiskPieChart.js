import { reduce } from "highcharts";
import React from "react";
import Chart from "react-apexcharts";



function RiskPieChart({zoneColor}) {

    let options = {
 
        labels: ['Resiko Tinggi', 'Resiko Sedang', 'Resiko Rendah', 'Tidak ada kasus'],
        colors:["rgba(242, 38, 19, 0.9)", "#ff4b0d","rgba(248, 148, 6, 0.9)","rgba(63, 195, 128, 0.9)"],
        responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 300
              },
              legend: {
                position: "bottom"
              }
            }
          }]
    }
    
  
    return(
 
        <div class="risk" style={{paddingLeft:"35%"}} >
            <span></span>
            <h2>Persentase Zona Resiko di Indonesia</h2>
            <span></span>
            <Chart
            options={options}
            series={[zoneColor[0],zoneColor[1],zoneColor[2],zoneColor[3]]}
            width={500}
            type="pie"
            />
        </div>

    );
    
   
    }

export default RiskPieChart;