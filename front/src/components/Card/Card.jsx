import { DivCard, ButtonCard, ImageCard} from './styledComponents';
import { Link } from 'react-router-dom';
import {useDispatch} from "react-redux"
import { useState } from 'react';
import { deleteFavorite, addFavorite } from '../../redux/action';

export default function Card({id, name, species, gender, image, onClose}) {

   const dispatch = useDispatch();

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      
      if(isFav){

         setIsFav(false);
         dispatch(deleteFavorite(id))
      
      }else{

         setIsFav(true);
         dispatch(addFavorite({id, name, species, gender, image, onClose}))
            dispatch(addFavorite())
      }

   }

   return (

      <DivCard>

         {isFav ? (

            <button onClick={handleFavorite}> Favorite </button>

         ):(

            <button onClick={handleFavorite}> Favorite </button>

         )}

         <ButtonCard onClick={() => onClose(id)}>X</ButtonCard>

         <Link to={`/detail/${id}`}>

          <h2>Name: {name}</h2>

         </Link>

         <h2>Species: {species}</h2>

         <h2>Gender: {gender}</h2>
         
         <ImageCard src={image}/>

      </DivCard>
   );
   
}
