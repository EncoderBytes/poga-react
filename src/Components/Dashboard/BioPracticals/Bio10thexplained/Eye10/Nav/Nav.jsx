import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../../../../../App.css"

const Nav = () => {
    return (
        <div className='p-2'>
            <nav className="bottom w-full h-14 rounded-lg bg-dark25 flex  justify-start items-center" >
                <ul className='flex'>
                    <li className=''>
                        <NavLink to="/Dashmain/biopracticals/Eye10/theory" className="py-4 px-6 rounded-lg"> Theory  </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Dashmain/biopracticals/Eye10/procedure" className="py-4 px-6 rounded-lg">Procedure</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Dashmain/biopracticals/Eye10/animation" className="py-4 px-6 rounded-lg">Animation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Dashmain/biopracticals/Eye10/simulator" className="py-4 px-6 rounded-lg">Simulator</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Dashmain/biopracticals/Eye10/video" className="py-4 px-6 rounded-lg">Video</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Dashmain/biopracticals/Eye10/viva" className="py-4 px-6 rounded-lg">Viva Voice</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Dashmain/biopracticals/Eye10/resources" className="py-4 px-6 rounded-lg">Resources</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Dashmain/biopracticals/Eye10/feedback" className="py-4 px-6 rounded-lg">Feedback</NavLink>
                    </li>
                </ul>
            </nav >
        </div>
    )
}

export default Nav