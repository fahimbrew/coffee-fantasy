import toast from "react-hot-toast";

// get all coffees from local storage
const getAllFavorites = ()=>{
    const all = localStorage.getItem("favorites");
    if(all){
        const favorites = JSON.parse(all);
        // console.log(favorites);
        return favorites;
    }else{
        // console.log([])
        return [];
    }
    
    
}

// add a coffee to local storage

const addFavorite = coffee =>{
    // get all previously saved coffee data
    // console.log(coffee);
    const favorite = getAllFavorites();
    const isExist = favorite.find(item=>item.id==coffee.id);
    if(isExist) return toast.error("Already Exist");
    favorite.push(coffee);
    // console.log(favorite);
    localStorage.setItem("favorites",JSON.stringify(favorite));
    toast.success("Successfully added!")
}

// remove a coffee from local storage
const removeFavourite = (id)=>{
    const favorite = getAllFavorites();
    const remaining = favorite.filter(coffee=>coffee.id!==id);
    localStorage.setItem("favorites",JSON.stringify(remaining));
    toast.success("Removed from the cart")

}


export {addFavorite,getAllFavorites,removeFavourite}