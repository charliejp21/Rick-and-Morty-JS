import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
//import styled from "./styled-components";
import axios from "axios";

const DetailId = () =>{

        const {detailId} = useParams();

        const [character, setCharacter] = useState({});

        useEffect(() => {

            axios(`https://rickandmortyapi.com/api/character/${detailId}`).then((response) => setCharacter(response.data));

        }, []);

        return (  

            <div>

                {character.name ? 
               
                (<>

                <h2>{character.name}</h2>

                <p>{character.status}</p>
                
                <p>{character.species}</p>
                
                <p>{character.gender}</p>
                
                <p>{character.origin?.name}</p>
                
                <img src={character.image}/>

                </>):(

                    <h3>Loading...</h3>
            
                )}

            </div>

        );

}

export default DetailId;