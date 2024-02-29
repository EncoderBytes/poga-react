import React from 'react'
import img1 from "../../../../../../assets/Phy/refractionoflight.png"
import img2 from "../../../../../../assets/Phy/weight.jpg"
import img3 from "../../../../../../assets/Phy/slotweight.jpg"

const TheoryPhy94 = () => {
  return (
    <div className='w-4/5 pl-4'>
      <div className="aim mt-8 mb-3">
        <p className="text-dark font-semibold text-xl mb-1 pl-1">Moment of a force:</p>
        <p className="text-dark50 font-normal text-base pl-3">The moment of force is a measure of its tendency to cause a body to rotate about a specific point or axis. This is different from the tendency for a body to move, or translate, in the direction of a force. In order for a moment to develop, the force must act on the body in such a manner that the body will begin to twist. This occurs every time a force is applied so that it does not pass through the android of the body. A moment is due to force not having an equal and opposite force directly along its line of action. <br /><br />

          The magnitude of the moment of a force acting about a point is directly proportional to the distance of the net force from the point or axis. It is defined as the product of the force(F) and the moment arm (d). The moment arm or lever arm is the perpendicular distance between the line of action of the force and the centre of moments.
          Moment =Force× perpendicular Distance from the pivot <br />
          or τ=F×d</p>
        <p className="text-dark font-semibold text-xl pl-3">The Principle of Moments:</p>
        <p className="text-dark50 font-normal text-base pl-3">The principle of moments states that “when in equilibrium the total sum of the anti-clockwise moment is equal to the total sum of the clockwise moment”. When a system is stable or balanced, it is said to be in equilibrium as all the forces acting on the system cancel each other out. In equilibrium, Total Anticlockwise Moment = Total Clockwise Moment Force,F1×Moment Arm, d1 = Force, F2×Moment Arm, d2
        </p>

        <img src={img1} className='my-5' alt="" />

        <p className="text-dark50 font-normal text-base pl-3">The principle of moments can be explained with the help of the following experiment.</p>
      </div>

      <div className="theory mb-3 pb-3">
        <p className="text-dark font-semibold text-xl mb-1">MATERIALS REQUIRED:</p>
        <ul className="text-dark50 font-normal text-base pl-5 list-disc">
          <li>Wedge</li>
          <li>Meter rod</li>
          <li>Slotted weights</li>
          <li>Thread</li>
        </ul>

        <p className="text-dark font-semibold text-xl mb-1">Weights</p>
        <img src={img2} className='w-40 my-5' alt="" />
        <p className="text-dark font-semibold text-xl mb-1">Slotted Weights</p>
        <img src={img3} className='w-40 my-5' alt="" />
      </div>
    </div>
  )
}

export default TheoryPhy94