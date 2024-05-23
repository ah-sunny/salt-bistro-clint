import { useEffect, useState } from "react";
import Heading from "../../../sharded/Heading";
import ShowAll from './ShowAll'

const AllRecipe = () => {
    const [offerRecipe , setOfferRecipe] = useState([])

useEffect(()=>{
    fetch('menu.json')
    .then(res=> res.json())
    .then(data =>{ 
        const offerItem = data.filter(item => item.category ==='offered')
        setOfferRecipe(offerItem)})
},[])

    return (
        <div>
             <Heading
                subtitle={'Should try'}
                title={'chef recommends'}>
            </Heading>
            <div className="mt-7 grid grid-cols-1 lg:grid-cols-4 gap-2 ">
                {
                    offerRecipe.map((item,idx)=> <ShowAll key={idx} item={item} ></ShowAll> ) 
                }
            </div>

            
        </div>
    );
};

export default AllRecipe;