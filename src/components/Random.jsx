
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";



export default function Random() {


  const {gif,loading,fetchData} = useGif();

  function ClickHandler() {
    fetchData()
  }

  return (
    <div className="w-1/2 
     bg-green-400 rounded-lg border
      border-black
      flex flex-col gap-y-5 text-center items-center " >

      <h1 className=" mt-[15px] underline font-bold text-2xl " >Random Gif</h1>


      {
        loading ? (<Spinner/>) : <img src={gif} alt="#"
        width={450}/>
      }


      <button
        className=" mb-[15px] w-10/12 bg-white p-2 rounded-lg hover:scale-[1.02]"
        onClick={ClickHandler} >Generate</button>

    </div>
  );
}
