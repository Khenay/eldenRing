import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
// import { scraping } from "../../../controllers/user.controllers";

//Componente funcional -> 
function Home(props) {

    const navigate = useNavigate();


    // const [nicToSend, setNicToSend] = useState("");
    // const [emailToSend, setEmailToSend] = useState("");
    // const [claseToSend, setClaseToSend] = useState("");
    // const [passToSend, setPassToSend] = useState("");



    return (


        <div >
    
            <Navbar />
    
            <img src="https://i.ibb.co/Qkrb2hq/Erdtree-1-5.webp" id="erdtree"></img>
    
        </div>
    )
    

};

// useEffect(() =>{
//     localStorage.setItem('infoUser',JSON.stringify(infoUser) )
// },[infoUser])



export default Home;