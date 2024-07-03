import { useParams } from "react-router-dom";
// import { Menu_URL } from "../const/config";
import { useState, useEffect } from "react";
import Resinfo from "./Resinfo";
import Shimmer from "./Shimmer";
export const Menu = () => {

    //  const params = useParams();
    const {id} = useParams();
    // console.log('params', params);
    const [menuData, setMenuData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getMenucard = async () => {
        try {
            const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
            const json = await data.json();
            setLoading(false)
            setMenuData(json?.data?.cards)

            console.log('json', json?.data?.cards);

            // setLoading(false);
            // console.log("json",json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
            // setRestaurantData(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
            // setRestaurantCollection(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        catch (err) {
            //   setLoading(false)
            //   setIsFailed(true)
            console.log("something went wrong", err)
        }
    }
    useEffect(() => {
        getMenucard();
    }, [])
    if (loading) {
        return (
            <div className="container d-flex flex-wrap gap-4">
                <Shimmer />
            </div>)
    }
    const { name, avgRating, totalRatingsString, costForTwoMessage, cuisines, sla, expectationNotifiers } = menuData[2]?.card?.card?.info
    const { slaString, lastMileTravelString } = sla;
    const { enrichedText } = expectationNotifiers[0]
    return (
        <div>
            <Resinfo
                name={name}
                avgRating={avgRating}
                ratingCount={totalRatingsString}
                costForTwo={costForTwoMessage}
                cuisines={cuisines.join(", ")}
                delieveryTime={slaString}
                distance={lastMileTravelString}
                remark={enrichedText} />

        </div>

    )
}
export default Menu
