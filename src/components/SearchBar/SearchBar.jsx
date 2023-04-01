import { useState } from 'react';
import { InputSearch, ButtonSearch } from './styledComponents';

export default function SearchBar({ onSearch }) {

   const [id, setId] = useState("");

   const handleChange = (event) => {

      setId(event.target.value); 

   };

   return (

      <>

      <InputSearch type="search" onChange={handleChange}/>

      <ButtonSearch onClick={() => onSearch(id)}>Agregar</ButtonSearch>
      
      </>

   );
   
}

/* onChange - Cada vez que yo escriba algo en el input ejecutar algo (una funcion) */
/* event.target es quien ejecuta (el input) y el .value lo que esta escrito en el input */
/* onClick () => onSearch(id) es así por que un click debe ejecutar una funcion, de otra manera se ejecutaría la función en automático */