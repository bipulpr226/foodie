import { IMG_URL } from "../const/config";

const Restaurantcard = ({cloudinaryImageId,name,sla,avgRating,cuisines,areaName}) =>{
 // imgUrl, title, starRating, deliveryTime, cuisines, location
//  console.log("props",props);
    return(
      
      <div className=" custom-card">
      <div className="mb-2">
        <img src={IMG_URL+cloudinaryImageId}/>
        
       
       
    </div>
     <div className="px-2">
      {/* <h4>{name}</h4> */}

     <h5>{name}</h5>  
      {/* <h2>Foodie</h2> */}
     <div className="d-flex justify-content-between ">
      {/* <span>⭐{avgRating}</span> <span>25-30 mins</span> */}
       <div >⭐{avgRating}</div> 
      {/* <div>⭐4.5</div> */}
       <div style={{flex:"0.7"}}>{sla?.deliveryTime}min</div> 
      
     </div>
     
      <div className="text-secondary">{cuisines.join(", ")}</div>
     
     <div>{areaName}</div> 
     {/* <p>{areaName}</p> */}
     </div>
     
     
     </div>
     );
   };




  export default Restaurantcard;
