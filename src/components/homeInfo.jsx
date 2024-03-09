import { Link } from "react-router-dom";
import {arrow} from '../assets/icons'

const HomeInfo = ({currentStage}) => {
    const InforBox = ({text,link,btnText})=>{
      return  <div className=" display-flex info-box justify-content-center align-items-center  neo-brutalism-blue">
            <p className="  text-center p-3">
            {text}
            </p>
            <Link className="neo-btn neo-brutalism-white"
            to={link}>
                {btnText}
                <img src={arrow} alt="" />
            </Link>
        </div>
    }
    const renderContent={
        1:(<h5 className="text-center info-box neo-brutalism-blue py-3 px-5 text-white ">Hi, I'm <span className="">Kaushal</span> <br />Software Engineer from India &#10084;</h5>),
        2:(<InforBox text={'Your projects missing puzzle piece is here.'} link={'/about'} btnText={'About Me'} />),
        3:(<InforBox text={'Where logic meets caffeine, innovation is brewed.'} link={'/projects'} btnText={'My Projects'} />),
        4:(<InforBox text={'Have questions about my work? Dont hesitate to get in touch.'} link={'/contact'} btnText={'Lets connect'} />),
    }
  return (
renderContent[currentStage]|| null
  )
}

export default HomeInfo