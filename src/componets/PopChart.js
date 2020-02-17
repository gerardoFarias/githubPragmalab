import React,{Component} from 'react';
import Chart from 'react-apexcharts';

class PopChart extends Component{
constructor(props){
  super(props);
this.state ={
  options:{
    Chart:{
    
    background: "#f4f4f4",
    foreColor: "#333"
    },
    xaxis: {
      categories:[
        2019,2020
      
      ]
    },
    plotOptions:{
      bar:{
        horizontal:false
      }
    },
    fill:{
      colors:['red']
    },
    title:{
      text: 'EURO',
      align:'center',
      margin:20,
      offsetY:20,
      style:{
        fontSize:'25px'
      }
    }


  },
  series:[{
    
    name: "Valor del euro &#8364;",
    data: [

      700.00,750.00,800.00,850.00
      
    
     
    ]
    }
  ]
  };
}


  render(){
    return <Chart

    options={this.state.options}
    series={this.state.series}
    type="bar"
    height="400"
    width="100%"


    
    />;
  
  }

}
export default PopChart;