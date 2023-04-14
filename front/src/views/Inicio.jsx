import { H1 } from "./styles/InicioStyledComponents";
import FormLogin from "../components/Form/Form"; 


const Inicio = ({login}) => {

    return(<>

    <H1>Bienvenidos a la APP de Rick and Morty</H1>
    
    <FormLogin login={login}/>

    </>)
}

export default Inicio;