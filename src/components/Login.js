import React, {useState, useEffect} from 'react';
import Validacion from './Validacion';

const Login = () => {

    const [username, guardarUsername] = useState("");
    const [password, guardarPassword] = useState("");
    
    const [tipo, guardarTipo] = useState("password");
    const [validacionUser, setValidacionUser] = useState('')
    const [validacion, guardarValidacion] = useState({
        validate:"",
        color:""
    });

    const [alerta, cambiarAlerta] = useState({
        bool: false,
        tipo: ''
    })

    const [regexp] = useState([
        /(?=^.{6,}$)/,
        /(?=.*[a-z])/,
        /(?=.*[A-Z])/,
        /(?=.*[|¡!#"$%&·@~€¬=¿?<>/()^'\\+\-_.:,;`´ç*])/,
        /(?=.*[0-9])/
    ]);

    const [frases] = useState(["Minimo 6 caracteres", "Letra minuscula", "Letra mayuscula", "Simbolo", "Numero"]);
    // const frases = ["","","","",""] // No funciona

    const handleClick = () => {
        if(tipo === "text"){
            guardarTipo("password")
        }else if(tipo === "password"){
            guardarTipo("text")
        }
    }

    const handleButton = () => {
        if(username.length < 10){
            cambiarAlerta({
                bool: true,
                tipo: 'user',
                mensaje:'¡Error! El nombre de usuario debe tener más de 10 carácteres.'})
            setTimeout(() => {
                cambiarAlerta({})
            }, 2000);
            return;
        }else if(!regexp.every(reg => password.match(reg))){
            cambiarAlerta({
                bool: true,
                tipo: 'pass', 
                mensaje:'¡Error! La password no cumple las validaciones requeridas.'})
            setTimeout(() => {
                cambiarAlerta({})
            }, 2000);
            return;
        }else{
            cambiarAlerta({
                bool: true,
                tipo: 'login', 
                mensaje: `${username} haz iniciado sesión correctamente.`})
            setTimeout(() => {
                cambiarAlerta({})
            }, 4000);
            guardarPassword("")
            guardarUsername("")
        }
    }

    useEffect(() => {
        if(password.length > 0){
            if(password.length < 3){
                guardarValidacion({
                    color:"border-red-700"
                })
            }else if(password.length >= 5 && password.length < 10){
                guardarValidacion({
                    color:"border-yellow-700"
                })
            }else if(password.length >= 10){
                guardarValidacion({
                    color:"border-green-700"
                })
            }
        }else{
            guardarValidacion({
                validate:"",
                color:""
            })
        }
    }, [password]);

    useEffect(() => {
        if(username.length > 0){
            if(username.length < 3){
                setValidacionUser("border-red-700")
            }else if(username.length >= 5 && username.length < 10){
                setValidacionUser("border-yellow-700")
            }else if(username.length >= 10){
                setValidacionUser("border-green-700")
            }
        }else{
            setValidacionUser('')
        }
    }, [username]);

    let classPass = `relative focus:outline-none focus:shadow-2xl border-2 rounded w-full mx-2 mb-2 p-2 ${validacion.color}`
    let classUser = `relative focus:outline-none focus:shadow-2xl border-2 rounded w-full mx-2 mb-2 p-2 ${validacionUser}`
    let classAlert = `${alerta.tipo === 'login' ? 'bg-green-400' : 'bg-red-400'} font-bold text-center w-2/5 m-auto my-5 text-white p-2`

    return ( 
        <>
            <h1 className="text-white text-center font-bold uppercase text-3xl mt-24 md:mt-32">
                Login
            </h1>  

            {alerta.bool && 
                <p className={classAlert}>
                    {alerta.mensaje}
                </p>
            }

            <div className="container m-auto w-4/5 border px-4 rounded-lg" id="fondo_inicio" >

                <div >
                    <label className="mx-1 mt-4 p-2 block text-gray-800 text-sm font-bold " htmlFor="username">
                        Nombre de Usuario
                    </label>
                    <div className="flex w-full justify-between relative inline-block">
                        <input
                            className={classUser}
                            id="username"
                            type="text"
                            onChange={e => guardarUsername(e.target.value)}
                            value={username}
                        />
                    </div>
                </div>

                <div >
                    <label className="mx-1 mt-2 p-2 block text-gray-800 text-sm font-bold " htmlFor="password">
                        Contraseña
                    </label>
                    <div className="flex w-full justify-between relative inline-block">
                        <input
                            className={classPass}
                            id="password"
                            type={tipo}
                            onChange={e => guardarPassword(e.target.value)}
                            value={password}
                        />
                        
                        {tipo === "password" 
                            ?   <svg onClick={handleClick} className="w-6 text-gray-700 absolute cursor-pointer mt-2 mr-4 " style={{right: "0px"}} fill="currentColor" viewBox="0 0 19 19"><path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd"></path><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"></path></svg>
                            :   <svg onClick={handleClick} className="w-6 text-gray-700 absolute cursor-pointer mt-2 mr-4 " style={{right: "0px"}}  fill="currentColor" viewBox="0 0 19 19"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path></svg>
                        }

                    </div>
                </div>

                <div className="flex flex-wrap ">
                {
                    frases.map( (frase, i) => (
                        <Validacion 
                            // check={!letra ? true : false}
                            key={i} 
                            password={password}
                            regexp={regexp[i]}
                            frase={frase}
                        />
                    ))
                } 
            </div>
                <div className="flex justify-center my-2">
                    <button
                        onClick={handleButton}
                        id="button"
                        className="bg-blue-800 rounded p-2 text-white uppercase hover:bg-blue-900"
                    >
                        Iniciar Sesión
                    </button>
                </div>
                    {/* <div className="flex">
                        <div className="w-1/6 p-2 m-2 rounded-lg bg-red-300"></div>
                        <div className="w-1/6 p-2 m-2 rounded-lg bg-yellow-300"></div>
                        <div className="w-1/6 p-2 m-2 rounded-lg bg-green-300"></div>
                    </div> */}
            </div>
        </>
    );
}
 
export default Login;