import React from 'react';
import ReactApexChart from 'react-apexcharts';

import { Bar } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';



const chartData: ChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };
  
  const chartOptions: ChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  