import { Canvas } from "@react-three/fiber"
import { Suspense,useState } from "react"
import Loader from "../components/loader"
import HomeInfo from "../components/homeInfo"
import { Island } from "../models/island"
import  Sky  from "../models/sky"
import Bird from "../models/bird"
import Plane from "../models/plane"
const home = () => {
    const [isRotating,setIsRotating] = useState(false)
    const [currentStage,setCurrentStage] = useState(1)
    const adjustIslandForScreenSize=()=>{
        let screenScale = null;
         let screenPosition =[0,-6.5,-43];
         let rotation = [0.1,4.7,0]
        if(window.innerWidth<768){
            screenScale =[0.9,0.9,0.9];

        }else{
            screenScale =[1,1,1];
        }
        return[screenScale,screenPosition,rotation]
    }
    const adjustPlaneForScreenSize=()=>{
        let screenScale = null;
         let screenPosition =null;
        if(window.innerWidth<768){
            screenScale =[1.5,1.5,1.5];
            screenPosition = [0,-1.5,0];

        }else{
            
            screenScale =[3,3,3];
            screenPosition = [0,-4.5,0];
        }
        return[screenScale,screenPosition]
    }
    const [islandScale,islandPosition,islandRoataion] = adjustIslandForScreenSize()
    const [planeScale,planePosition] = adjustPlaneForScreenSize()
  return (
    <section className="w-100 height-100 relative mt-10">
        <div className="position-absolute popUpSet display-flex justify-center items-center">
            {currentStage && <HomeInfo currentStage={currentStage}/>}
        </div>

        <Canvas className={`w-full h-screen relative${isRotating?" cursor-grabbing":"cursor-grab"}`} camera={{ near:0.1, far:1000}}>
        <Suspense fallback={<Loader/>}>
          <ambientLight intensity={0.5}/>
          <directionalLight position={[1,1,1]} intensity={2} />
          <hemisphereLight skyColor="blue" groundColor="black" intensity={1}/>
          <Sky isRotating={isRotating}/>
          <Bird/>
          <Island scale={islandScale} position={islandPosition} rotation={islandRoataion} isRotating={isRotating} setIsRotating={setIsRotating} setCurrentStage={setCurrentStage}/>
          <Plane palneScale={planeScale} planePosition={planePosition} isRotating={isRotating} rotation={[0,20,0]}/>
        </Suspense>
        </Canvas>

    </section>
  )
}

export default home