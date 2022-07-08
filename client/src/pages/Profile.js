import React, { useState, useEffect } from "react";
// import { scraping } from "../../../controllers/user.controllers";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

//Componente funcional -> 
function Profile(props) {

    let navigate = useNavigate();
    // const [nicToSend, setNicToSend] = useState("");
    // const [emailToSend, setEmailToSend] = useState("");
    // const [claseToSend, setClaseToSend] = useState("");
    // const [passToSend, setPassToSend] = useState("")

    // const [emailLog, setEmailLog] = useState("");
    // const [passLog, setPassLog] = useState("");

    const [nicProfile, setNicProfile] = useState("");
    const [buildProfile, setBuildProfile] = useState("");



    useEffect(() => {
        setNicProfile(JSON.parse(localStorage.getItem('infoUser')).nic);
        setBuildProfile(JSON.parse(localStorage.getItem('infoUser')).build);

        // const clase= buildProfile
        console.log(buildProfile)


    }, []);


    const logout = () => {
        localStorage.removeItem('infoUser');
        navigate("/home")




    };

    return (


        <div >
            <Navbar />

            <div class="registro" id="registro">
                <h1 id="cabezaRegistro" class="cabezaLog">Perfil</h1>
                {/* nic */}
                <p>{nicProfile}</p>
                {/* build */}
                <p>{buildProfile}</p>

                {buildProfile == 'Warrior' ? <img src='https://eldenring.wiki.fextralife.com/file/Elden-Ring/warrior_class_elden_ring_wiki_guide_200px.png'></img> :
                    buildProfile == 'Astrologer' ? <img src='https://eldenring.wiki.fextralife.com/file/Elden-Ring/astrologer_class_elden_ring_wiki_guide_200px.png'></img> :
                        buildProfile == 'Hero' ? <img src='https://eldenring.wiki.fextralife.com/file/Elden-Ring/hero_class_elden_ring_wiki_guide_200px.png'></img> :
                            buildProfile == 'Bandit' ? <img src='https://eldenring.wiki.fextralife.com/file/Elden-Ring/bandit_class_elden_ring_wiki_guide_200px.png'></img> :
                                buildProfile == 'Prisoner' ? <img src='https://eldenring.wiki.fextralife.com/file/Elden-Ring/prisoner_class_elden_ring_wiki_guide_200px.png'></img> :
                                    buildProfile == 'Confessor' ? <img src='https://eldenring.wiki.fextralife.com/file/Elden-Ring/confessor_class_elden_ring_wiki_guide_200px.png'></img> :
                                        buildProfile == 'Vagabond' ? <img src='https://eldenring.wiki.fextralife.com/file/Elden-Ring/wretch_class_elden_ring_wiki_guide_200px.png'></img> :
                                            buildProfile == 'Prophet' ? <img src='https://eldenring.wiki.fextralife.com/file/Elden-Ring/prophet_class_elden_ring_wiki_guide_200px.png'></img> :
                                                buildProfile == 'Samurai' ? <img src='https://eldenring.wiki.fextralife.com/file/Elden-Ring/samurai_class_elden_ring_wiki_guide_200px.png'></img> : ''
                }
                <button onClick={() => logout()} id="registrarUser" class="submitBtn" >Desconectar</button>









            </div>


        </div>
    )
}
export default Profile;