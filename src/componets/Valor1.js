import React from 'react';

const Valor1 = ({resultado1}) => {


//extraer valores

const myObj = resultado1;

    if(!myObj) return;

    var x=" ";

    var i="";
    
        if(myObj.serie) {
            
            for (i in myObj.serie ) {
                
                 x += myObj.serie[i].valor;
                }
        }
        return(

            <div className="card-panel #f3f3f3 col s5">
           <div className="black-text">
        <h2><span>&#8364;</span>{x}</h2>
           </div>

       </div>



);
    

}

export default Valor1;