const Resinfo=({name, avgRating, cuisines, delieveryTime, distance, costForTwo, ratingCount, remark})=>{
    return(
     <div className="space">
        <h1>{name}</h1>
        <p>⭐{avgRating} ({ratingCount}) <span>-</span> {costForTwo}</p>
        <p>{cuisines}</p>
        <p className="text-lowecase">{delieveryTime}</p>
     <p>🚲 {remark.replace(/<\/?b>/g, "")}.</p>
     </div>   

    )
}
export default Resinfo