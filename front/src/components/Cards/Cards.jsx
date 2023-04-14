import Card from '../Card/Card';
import { DivCards } from './styledComponents';

export default function Cards({characters, onClose}) {

   return (

      <div>

         {characters.map(({id, name, species, gender, image}) => {

           return ( 
           
               <DivCards>
               
               <Card 
               
                  key={id}
                  id={id}                  
                  name = {name}
                  species = {species}
                  gender = {gender}
                  image = {image}
                  onClose = {onClose}  

               />

               </DivCards>

            )
            
         })}

      </div>

   )
   
}
