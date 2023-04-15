
import { useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";



export default function Tag() {

  
  const[tag , settag] = useState("")

 

  const{loading,gif,fetchData} = useGif(tag);


  function changeHandler(e){
    settag(e.target.value)
  }

  function ClickHandler() {
    fetchData(tag)
  }

  return (
    <div className="w-1/2 
     bg-blue-400 rounded-lg border
      border-black mt-10 mb-20
      flex flex-col gap-y-5 text-center items-center " >

      <h1 className=" mt-[15px] underline font-bold text-2xl " >Random {tag} Gif</h1>


      {
        loading ? (<Spinner/>) : <img src={gif} alt="#"
        width={450}/>
      }

      <input type="text" onChange={changeHandler}
      value={tag} placeholder="Enter Text To Generate Gif"
      className=" w-10/12 bg-white p-2 rounded-lg py-2 text-lg text-center" />


      <button
        className="hover:scale-[1.02] mb-[15px] w-10/12 bg-white p-2 rounded-lg "
        onClick={ClickHandler} >Generate</button>

    </div>
  );
}
