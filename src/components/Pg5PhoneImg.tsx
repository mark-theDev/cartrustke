import React from 'react'
import { CiCircleAlert } from "react-icons/ci";

const Pg5PhoneImg = () => {
  return (
    
        <div className='relative object-contain w-full'>
            <img src="./assets/LandingPg5/PhoneFrame.png" alt=""
                style={{width:'100%' }} />
            <img src="./assets/LandingPg5/Anime4.png" alt="" className='absolute'
                style={{maxHeight:'250px', bottom: '-20%', right: '-20%'}}
            />
            <img src="./assets/LandingPg5/Key1.png" alt="" className='absolute'
                style={{top: '5%', right: '-10%', width: '400px'}} 
            /> 
            <div style={{top:'37%', right: '-30%'}} className='absolute shadow-md border rounded-lg flex items-center gap-2 p-1 pr-4 bg-white text-black'>
                <div className='bg-[#4d9df5] rounded-lg p-1'><CiCircleAlert className=' text-white text-lg' /></div> 
                <p className='text-xs'>Mileage 127,000 km</p>
            </div>    
            <div style={{top:'50%', left:'-30%'}} className='absolute shadow-md border rounded-lg pr-4 flex items-center gap-2 p-1 bg-white text-black'>
                <div className='bg-[#4d9df5] rounded-lg p-1'><CiCircleAlert className=' text-white text-lg' /></div> 
                <p className='text-xs'>Price: Ksh2,249,500</p>
            </div>    
        </div>  
    
  )  
}

export default Pg5PhoneImg