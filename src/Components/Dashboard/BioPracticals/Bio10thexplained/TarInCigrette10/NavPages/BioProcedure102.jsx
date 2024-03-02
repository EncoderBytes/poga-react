import React from 'react'
import img from '../../../../../../assets/Phy/Theroy5.png'

const BioProcedure102 = () => {
  return (
    <>
      <div className='w-4/5 pl-2'>
        <div className="aim my-8">
          <p className="text-dark font-semibold text-xl mb-3">PROCEDURE</p>
          <img src={img} alt="" className='w-96 pl-2' />
          <ol className="text-dark50 font-normal text-base pl-5 list-decimal">
            <li> We'll first determine the Vernier constant (VC), which is the least count (L.C) of the Vernier calliper and record it stepwise as in the equation, L.C = 1 MSD - 1 VSD.</li>
            <li> Now, bring the movable jaw in close contact with the fixed jaw and find the zero error. Do this three times and record the values. If there is no zero error, then record 'zero error nil'.</li>
            <li> Open the jaws of the Vernier Calliper and place the sphere or cylinder between the two jaws and adjust the movable jaw, such that it gently grips the body without any undue pressure on it. That done, tighten the screw attached to the Vernier scale.</li>
            <li> Note the position of the zero mark of the Vernier scale on the main scale. Record the main scale reading just before the zero mark of the Vernier scale. This reading (N) is called main scale reading (MSR).</li>
            <li> Note the number (n) of the Vernier scale division which coincides with the division of the main scale.</li>
            <li> You'll have to repeat steps 5 and 6 after rotating the body by 90o for measuring the diameter in a perpendicular direction.</li>
            <li> Repeat steps 4 to 7 for three different positions and record the observations.</li>
            <li> Now find total reading using the equation, TR = MSR+VSR = N+(n x L.C) and apply the zero correction.</li>
            <li> Take the mean of the different values of the diameter and show that in the result with the proper unit.</li>
          </ol>
        </div>
      </div >
    </>
  )
}

export default BioProcedure102