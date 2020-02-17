import React, {useState} from 'react';


const Formulario = ({busqueda,guardarBusqueda,guardarConsulta}) => {

   
    const[error,guardarError] = useState(false);

    //extraer fecha

    const {fechaInicio1,fechaFinal} = busqueda;
    




    //funcion que coloca la fecha en state

    const handleChange = e => {
        //actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value


        });
    }


            //cuando el usuario de submit al boton 

            const handleSubmit = e => {
                e.preventDefault();



                //validar

                if(fechaInicio1.trim() === '' || fechaFinal.trim() === ''){

                    guardarError(true);
                    return;
                }
                guardarError(false);


                guardarConsulta(true);
            }
            
            
    return (

        <form
                onSubmit={handleSubmit}
        
       >
            {error ? <p className="red darken-4 error"> El ingreso de fecha de inicio y de fin son obligatorias</p> : null};
            

             <div className="input-field col s12" >
               <input
                   type="date" min="2019-01-01" max="2020-02-29"
                   name="fechaInicio1"
                    id="fechaInicio1"
                    value={fechaInicio1}
                     onChange={handleChange}
                   
                   

                   
                 />
                <label   >Indique fecha de inicio de consulta</label>
                
                
            </div>

      
           
            


            


            <div className="input-field col s12" >
               <input
                   type="date" min="2019-01-01" max="2020-02-29"
                   name="fechaFinal"
                    id="fechaFinal"
                    value={fechaFinal}
                     onChange={handleChange}
                   
                   

                   
                 />
                <label   >Indique fecha de fin de consulta</label>
                
                
            </div>

            <div className="input-field col s12">

                <input
                    type="submit"
                    value="Buscar vaLor"
                    className="waves-effect waves-light btn-large btn-block blue accent-4 "
               />
            </div>


              </form>
    );

           

     

}


export default Formulario;