import Random from './components/Random'
import Tag from './components/Tag'



export default function App() {

  return (


    <div className = ' relative background w-full h-full flex flex-col items-center ' >
      <h1 className = ' bg-white  w-11/12 font-bold text-4xl rounded-lg text-center py-2 px-10 mx-auto mt-[40px] '> Random Gifs </h1>
      <div className = ' flex flex-col w-full items-center mt-10' > 
        <Random/>
        <Tag/>
      </div>
    </div>


  )


}
