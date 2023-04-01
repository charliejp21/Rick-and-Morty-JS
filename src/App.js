import Inicio from './views/Inicio.jsx'
import Home from './views/Home.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './views/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

function App () {

  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);

  const { pathname } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {

    !access && navigate("/");

  }, [access]);

  // Credenciales fake
  const username = "roberto@correo.com";
  const password = "12345@";

  const onSearch = (id) => {

    if(characters.find((char) => char.id === id)){

      return alert ("Personaje repetido");

    }
    
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    
       .then((response) => response.json())
       
       .then((data) => {
          
          if (data.name) {
             
            setCharacters((oldChars) => [...oldChars, data]);
          
          }else{
             
            alert('Algo salió mal');
          
          }
       
       });

  }

  const onClose = (id) => {

    setCharacters(characters.filter((char) => char.id !== id));

  };

  const login = (userData) => {

    if(userData.username === username && userData.password === password){

      setAccess(true);

      navigate("/home");

    }else{

      alert("Credenciales incorrectas");

    }


  };

  return (

    <div>

      {pathname !== "/" &&  <Nav onSearch={onSearch}/>}

      <Routes>

        <Route

          path="/" 

          element={<Inicio login={login} />} 

        />

        <Route

          path="/home" 

          element={<Home characters = {characters} onClose = {onClose} />} 
        
        />

        <Route

          path="/about" 

          element={<About />} 

        />

        <Route

          path="/detail/:detailId" 

          element={<Detail />} 

        />

      </Routes>

    </div>
    
  )
  
}

export default App;

/* .then response, convierte la respuesta en formato que se pueda trabajar  */
/* if data.name solo es para comprobar que se reciba algo */
/* a setCharacters en lugar de pasarle un valor, se le pasa una callback que recibe el valor viejo y retorna el varlo nuevo   */
/* oldchars el el valor viejo del estado */
/* .filter no modifica el array */
/* .find busca algo segun el ctiterio, en este caso busca en los personajes si el id que viene conicide con el id de data data.name  */