import Carousel from "./Carousel";
import Filter from "./Filter";
import Searchbar from "./Searchbar";
import Cardcontainer from "./Cardcontainer";


const Body = () =>{
    return(
      <>
      <div className="text-center"> This is the body component</div>
      <Carousel/>
      <div className="d-flex justify-content-between">
        
        <Searchbar/>
        <Filter/>
      </div>
     <Cardcontainer/>
     </>
    );
    
    };
    export default Body;