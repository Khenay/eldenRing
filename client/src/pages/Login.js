import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { scraping } from "../../../controllers/user.controllers";

//Componente funcional -> 
function Login(props) {

    const navigate=useNavigate();

    
    // const [nicToSend, setNicToSend] = useState("");
    // const [emailToSend, setEmailToSend] = useState("");
    // const [claseToSend, setClaseToSend] = useState("");
    // const [passToSend, setPassToSend] = useState("");

    const [emailLog, setEmailLog] = useState("");
    const [passLog, setPassLog] = useState("");
    const [confirm, setConfirm]=useState("");
    const [infoUser, setInfoUser]=useState("");

    useEffect(() => {
        setConfirm(localStorage.getItem('usuario'));
        


    }, []);


    
    const sendLog = () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: emailLog, pass: passLog }),
        };



        fetch("login", requestOptions)
            .then((response) => response.json())


            .then((res) => {
                
                setInfoUser(res)
              
                return res
               
            })
            .then((res)=>{
                localStorage.setItem('infoUser',JSON.stringify(res) )
                localStorage.removeItem('usuario')
                return res
            })
            .then((res)=>{
                if(res.message == 'right'){navigate("/profile")}
            })
            
       
        
    };

    // useEffect(() =>{
    //     localStorage.setItem('infoUser',JSON.stringify(infoUser) )
    // },[infoUser])
    

    return (


        <div >


            <div class="registro" id="registro">
                <h1 id="cabezaRegistro" class="cabezaLog">Login</h1>
                

                    {confirm ? <p id='registroBien'>Bienvenido, {confirm}</p> :''}

                    <input onChange={(e) => setEmailLog(e.target.value)} class="imput" type="email"  name="email" id="email" placeholder="Email" required></input>

                    

                    <input onChange={(e) => setPassLog(e.target.value)} class="imput" type="password" name="passFr" id="passFr" placeholder="Password" autocomplete="off"></input>

                    {infoUser.message == 'wrong' ?  <p id="registroMal">Incorrect email or password</p> : '' } 
                    
                    <button onClick={() => sendLog()} id="registrarUser" class="submitBtn" >Logear</button>

                
            </div>


        </div>
    )
}
export default Login;