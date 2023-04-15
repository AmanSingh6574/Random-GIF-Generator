import axios from "axios";
import { useEffect, useState } from "react";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const randomMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// const tagMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const useGif = (tag) => {



    const [gif, setgif] = useState("");
    const [loading, setloading] = useState(false);
  

    async function fetchData() {
        setloading(true);
        const { data } = await axios.get(tag ? `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}` : randomMemeurl);
        const imdSource = data.data.images.downsized_large.url;
        setgif(imdSource)
        setloading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);  
    

    return{
        gif , loading , fetchData

    }
   
};

export default useGif;
