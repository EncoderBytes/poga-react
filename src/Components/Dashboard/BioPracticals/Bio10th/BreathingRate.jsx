import React from 'react'
import BreathingRateImg from "../../../../assets/bio/Bio10th/BreathingRate.png"
import { NavLink } from 'react-router-dom'

const BreathingRate = () => {
    return (
        <NavLink to='/Dashmain/phypracticals/EmfExp'>
            {/* <   NavLink to='/Dashmain/'> */}
            <div className='w-64 h-64 bg-overviewWhite border-primaryGradient border-2 rounded-xl relative'>
                <div className="p-4">
                    <img src={BreathingRateImg} alt="" className='rounded-md' />
                    {/* <p className="font-semibold text-base text-dark50 mt-2">Study different types of Bacteria, Amoeba, Paramecium, and Volvox with the help of prepared slides and fresh culture / Charts</p> */}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className='absolute bottom-0 right-0'>
                    <rect width="32" height="32" rx="8" fill="url(#paint0_linear_70_3352)" />
                    <path d="M9 16L23 16" stroke="#F9F9F9" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
                    <path d="M16.8271 10L22.8271 16L16.8271 22" stroke="#F9F9F9" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
                    <defs>
                        <linearGradient id="paint0_linear_70_3352" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00C6FF" />
                            <stop offset="1" stopColor="#0072FF" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </NavLink>
    )
}

export default BreathingRate