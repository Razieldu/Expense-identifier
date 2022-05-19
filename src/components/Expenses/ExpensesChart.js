import React from "react";
import Chart from "../Chart/Chart"

const ExpensesChart = (props) => {
  
const chartDataPoints=[
    {label:"1月",value: 0},
    {label:"2月",value: 0},
    {label:"3月",value: 0},
    {label:"4月",value: 0},
    {label:"5月",value: 0},
    {label:"6月",value: 0},
    {label:"7月",value: 0},
    {label:"8月",value: 0},
    {label:"9月",value: 0},
    {label:"10月",value: 0},
    {label:"11月",value: 0},
    {label:"12月",value: 0},
];

for(const expense of props.expenses){

 const expenseMonth=expense.date.getMonth(); //一月的值為0//
 chartDataPoints[expenseMonth].value += expense.amount
}
  

return<Chart dataPoints={chartDataPoints}/>

};

export default ExpensesChart;
