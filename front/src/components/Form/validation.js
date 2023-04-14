const validation = (userData, errors, setErrors) => {

    if(!userData.username) setErrors({...errors, username: "Por favor completa este campo"});

    else if(userData.username.length > 35) setErrors({...errors, username: "No puedes superar los 35 cracteres"});

    else if(

        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2})+$/.test(userData.username)

    ){

        setErrors({...errors, username: "Email inválido"});

    }else{

        setErrors({...errors, username: "" });

    }

    //Pass

    if(userData.password.length < 6 || userData.password.length > 10){

        setErrors({...errors, password: "Longitud de password invalida"});

    }else if(!/\d/.test(userData.password)){

        setErrors({...errors, password: "Debe contener al menos un número"});
        
    }else{

        setErrors({...errors, password: ""});
        
    }

};

export default validation;