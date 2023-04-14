import {Form, Button} from './styledComponents';
import { useState } from 'react';
import validation from './validation';

export default function FormLogin({login}) {

    const [userData, setUserData] = useState({

        username: "",
        password: "",

    });

    const [errors, setErrors] = useState({

        username: "",
        password: "",

    });

    const handleInputChange = (event) => {

        const property = event.target.name;

        const value = event.target.value;

        setUserData({...userData, [property]: value });

        validation({...userData, [property]: value }, errors, setErrors);

    };

    const submitHandler = (event) => {

        event.preventDefault();

        login(userData);

    }

   return (

    <Form onSubmit={submitHandler}>

        <div>

            <label htmlFor="username" >Username: </label>
            
            <input 
            
                type="text" 
                name="username" 
                value={userData.username} 
                onChange={handleInputChange}
            />

            <p>{errors.username}</p>
        
        </div>    

        <br />

        <div>

            <label htmlFor="password">Password: </label>
            
            <input 
                type="text" 
                name="password" 
                value={userData.password} 
                onChange={handleInputChange}
            />

            <p>{errors.password}</p>
        
        </div> 

        <Button>Iniciar sesión</Button>


    </Form>
     
   );
   
}
