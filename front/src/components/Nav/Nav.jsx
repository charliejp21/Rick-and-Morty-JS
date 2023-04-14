import React from "react";
import { Ul,Li,A, LiSearch } from "./styledComponents";
import SearchBar from '../SearchBar/SearchBar';
import { useLocation } from "react-router-dom";

const Nav = ({onSearch}) =>{

    const {pathname} = useLocation();

    return (
 
        <>

        <Ul>
            
            <Li><A href="/">Inicio</A></Li>

            <Li><A href="/home">Home</A></Li>

            <Li><A href="/about">About</A></Li>

            <Li><A href="/detail">Detail</A></Li>
            
            { pathname === "/home" &&  <LiSearch><SearchBar onSearch={onSearch}></SearchBar></LiSearch>}
        
        </Ul>

        <br/>
        
        </>
      
    );
    
 }

 export default Nav;
