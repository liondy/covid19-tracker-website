import React from "react";
import Chart from "react-apexcharts";


function RiskPieChart({data}) {

    let riskT;
    let riskS;
    let riskR;
    let noCase;
    let none;
  
    let options = {
        
        labels: ['Resiko Tinggi', 'Resiko Sedang', 'Resiko Rendah', 'Tidak ada kasus', 'Tidak terdampak'],
        responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }]
    }
    
  
    return(
        
        <div class="risk">
            <h3>TEST PIE</h3>
            <Chart
            options={options}
            series={[44, 55, 13, 43, 22]}
            width={500}
            type="pie"
            />
        </div>

    );
    
   
    }

export default RiskPieChart;
