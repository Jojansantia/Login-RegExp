import React from 'react';

const Validacion = ({password, regexp, frase}) => {

    const check = <svg className="w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
    const uncheck = <svg className="w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="eveunchekdd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    const parrafo = <p className="text-center mx-2">{frase}</p>

    return ( 
        <>
            { (password.match(regexp)) ?
                <div className="flex justify-center">
                    {check}
                    {parrafo}
                </div>
                :
                <div className="flex justify-center text-gray-500">
                    {uncheck}
                    {parrafo}
                </div>
            } 
        </>
    );

}
 
export default Validacion;