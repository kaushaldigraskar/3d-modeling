import './about.css'
import React from 'react';
import ConsoleText from '../components/consoletext';
const about = () => { 
  
  return (
<section className="w-100 relative flex-column d-flex p-2  mt-16 gap-3 bg-black ">
    <ConsoleText words={['DeVel0pEr', 'Software Engineer' , 'Pixel-wizard' , 'Caffinated' ]} id="text"
        colors={['tomato', 'rebeccapurple' , 'darkblue' , 'orange' ]} />
        <hr />
        <div className="container-fluid text-white">
        <div className=" row">
        <div className=' col d-flex flex-column justify-evenly align-items-center gap-9'>
            <h1 className='headText p-3'><strong>Love to work in these domains...</strong></h1>
            <div className="container">

            <div className="row  gap-2 p-3">
                <div className="card col d-flex flex-column  justify-center align-items-center">
                    <img src="src/assets/images/internet.png" alt="Angular" className="domainImage"/>
                    <p className="p-3 nameText">Web applications</p>
                </div>
                <div className="card col d-flex flex-column  justify-center align-items-center">
                    <img src="src/assets/images/iphone.png" alt="ionic" className="domainImage"/>
                    <p className="p-3 nameText">Mobile applications</p>
                </div>
                <div className="card col d-flex flex-column  justify-center align-items-center">
                    <img src="src/assets/images/computer.png" alt="HTML" className="domainImage"/>
                    <p className="p-3 nameText">Desktop applications</p>
                </div>

            </div>
            </div>
        </div>
        <div className='col d-flex flex-column justify-evenly align-items-center gap-9'>
            <h1 className='headText p-3'><strong>Languages that I have worked on...</strong></h1>
            <div className="container-fluid">
            <div className="row  gap-1 p-3 w-100 ">
                <div
                    className="card col d-flex  flex-column justify-center align-items-center">
                    <img src="src/assets/images/angular.png" alt="Angular" className="domainImage imageSize"/>
                    <p className="p-3 nameText">Angular</p>
                </div>
                <div
                   className="card col d-flex  flex-column justify-center align-items-center">
                    <img src="src/assets/images/ionic.png" alt="ionic" className="domainImage imageSize"/>
                    <p className="p-3 nameText">Ionic</p>
                </div>
                <div
                    className="card col d-flex flex-column justify-center align-items-center ">
                    <img src="src/assets/images/android.png" alt="android" className="domainImage imageSize"/>
                    <p className="p-3 nameText">Android app development</p>
                </div>
            </div>
            <div class="row gap-1 p-3 w-100 ">
                <div
                    className="card col d-flex flex-column justify-center align-items-center">
                    <img src="src/assets/images/html.png" alt="HTML" className="domainImage imageSize"/>
                    <p className="p-3 nameText">HTML|CSS|JS</p>
                </div>
                <div
                    className="card col d-flex flex-column justify-center align-items-center">
                    <img src="src/assets/images/java.png" alt="Java" className="domainImage imageSize "/>
                    <p className="p-3 nameText">Java</p>
                </div>
                <div
                    className="card col d-flex flex-column justify-center align-items-center">
                    <img src="src/assets/images/python.png" alt="python" className="domainImage imageSize"/>
                    <p className="p-3 nameText">Python</p>
                </div>
            </div>
            </div>

        </div>
    </div>
        </div>

    <div className="container-fluid">
    <div className="row gap-5 pt-4">
        <div className="pricing-table col ">
            <div className="head">
                <h4 className="title">Languages</h4>
            </div>
            <div className="content">
                <div className="price">
                    <img className='' src="src/assets/images/languages.png" alt="" />
                </div>
                <ul>
                    <li>Marathi (Native)</li>
                    <li>Hindi (Native)</li>
                    <li>English (Expert)</li>
                </ul>
            </div>
        </div>
        <div className="pricing-table col">
            <div className="head">
                <h4 className="title">Awards</h4>
            </div>
            <div className="content">
                <div className="price ">
                    <img src="src/assets/images/trophy.png" alt="" />
                </div>
                <ul>
                    <li>Persistent System Bravo: Top Software Developer</li>
                    <li>GIZ Massiha: India-German Software Collaboration</li>

                </ul>
            </div>
        </div>
        <div className="pricing-table col">
            <div className="head">
                <h4 className="title">Certificates</h4>
            </div>
            <div className="content">
                <div className="price">
                    <img src="src/assets/images/certificate.png" alt="" />
                </div>
                <ul>
                    <li>Angular2+</li>
                    <li>Ionic</li>
                    <li>Android App Development</li>
                    <li> Python Bootcamp Development</li>
                    <li>Responsive Framework</li>
                    <li>AWS Fundamentals</li>
                    <li>Django for Python</li>
                </ul>
            </div>
        </div>
    </div>
    </div>
</section>
  )
}

export default about