import React from 'react'
import Nav from './Nav/Nav'
import OhmImage from "../../../../../assets/ohm1.png"

const MicroScopicEx9Outlet = ({ children }) => {
    return (
        <div className="bg-dashmain py-5">
            <div className='w-11/12 m-auto '>
                <div className="top h-60 uppercase flex items-center justify-between bg-overviewWhite rounded-lg">
                    <div className="left pl-10">
                        <p className="text-dark50 font-medium text-2xl">Chemistry</p>
                        <div className="font-bold text-5xl w-3/3" style={{
                            background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                        }}>MICROSCOPIC EXAMINATION OF AN ANIMAL CELL  AND A PLANT CELL USING APPROPRIATE TEMPORARY TECHNIQUES</div>
                    </div>

                    <div className="right p-5">
                        <img src={OhmImage} alt="" />
                    </div>
                </div>

                <div className=" bg-overviewWhite rounded-lg mt-6">
                    <Nav />
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MicroScopicEx9Outlet