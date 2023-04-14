import Cards from "../components/Cards/Cards";

const Home = ({characters, onClose}) => {

  return (<>
  
  <Cards characters={characters} onClose={onClose} />
  
  </>)

}

export default Home;