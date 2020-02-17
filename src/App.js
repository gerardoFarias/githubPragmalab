import React, { Fragment, useState, useEffect } from 'react';
import Header from './componets/Header';
import Formulario from './componets/Formulario';
import Valor from './componets/Valor';
import Valor1 from './componets/Valor1';
import moment from 'moment';
import PopChart from './componets/PopChart';



function App() {


 
  const [busqueda, guardarBusqueda] = useState ({

     fechaInicio1:'',
     fechaFinal:''

     



});

  
  const [consultar, guardarConsulta] = useState(false);
  
 

  

  const [resultado,guardarResultado] = useState({});
  const [resultado1,guardarResultado1] = useState({});


  
  


 const fechaInicio = moment(busqueda.fechaInicio1,'YYYY-MM-DD').format('DD-MM-YYYY');
 const fechaFinal = moment(busqueda.fechaFinal,'YYYY-MM-DD').format('DD-MM-YYYY');

 
  const medida = "euro";

  

  useEffect (() =>{

    const consultarAPI = async () =>{
      
     
       if(consultar){
      

        const url ='https://mindicador.cl/api/'+ medida+'/'+fechaInicio;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        

        const url1 ='https://mindicador.cl/api/'+ medida+'/'+fechaFinal;
        const respuesta1 = await fetch(url1);
        const resultado1 = await respuesta1.json();


        guardarResultado(resultado);

        guardarResultado1(resultado1);

        guardarConsulta(false);

      
     
       
       }

    }
    consultarAPI();

  }
  ,[consultar]);

  
  return (
    <Fragment>

      <Header
        titulo="VALOR EURO"

        />
        <div className="contenedor-form">
            <div className="container">
              <div className="row">
                
                <div className="col m6 s12">
                   < Formulario 
                    busqueda={busqueda}
                    guardarBusqueda={guardarBusqueda}
                    guardarConsulta={guardarConsulta}
                />
                </div>
                <div className="col m6 s12">
                  <Valor
                resultado={resultado}

                />
                 </div>
                 <div className="col m6 s12">
                  <Valor1
                  
                  resultado1={resultado1}
                  

                />
                
                 </div>
                 <div className="container1">
                  <PopChart
                />
                
                 </div>
                 
                

                 
                 
                 
                 <div>
                   
                   
                 </div>
                 
                 


              </div>

          </div>
        </div>
        
        
    
  


       </Fragment>
       
      
                 
  
  );
  
}

export default App;
