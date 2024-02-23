import React from 'react'
import img from '../../../../../../assets/Phy/simplependulum.png'

const TheoryPhy95 = () => {
  return (
    <div className='w-4/5 pl-4'>
      <div className="aim mt-8 mb-3">
        <p className="text-dark font-semibold text-xl mb-1">SIMPLE PENDULUM:</p>
        <p className="text-dark50 font-normal text-base pl-3">A simple pendulum is a point mass suspended by a weightless and inextensible string fixed rigidly to support.</p>
        <p className="text-dark font-semibold text-xl mb-1 pl-1">EXPLANATION</p>
        <p className="text-dark50 font-normal text-base pl-3">A simple pendulum is a mechanical arrangement that demonstrates periodic motion. It comprises a small bob of mass ‘m’ suspended by a thin string secured to a platform at its upper end of length L. This system sways or moves in an oscillatory motion. This motion occurs in a vertical plane and is mainly driven by gravitational force. Interestingly, the bob that is suspended at the end of a thread is very light; somewhat, we can say it is even massless. The period of a simple pendulum can be made extended by increasing the length string while taking the measurements from the point of suspension to the middle of the bob. However, it should be noted that if the mass of the bob is changed, the period will remain unchanged. The period is influenced mainly by the position of the pendulum in relation to Earth, as the strength of the gravitational field is not uniform everywhere.
          <br /><br />
          In addition, pendulums are a common system whose usage is seen in various instances. Some are used in clocks to keep track of the time, while some are just used for fun in case of a child’s swing. In some cases, it is used in an unconventional manner, such as a sinker on a fishing line. In any case, we will explore and learn more about the simple pendulum, and as well as We will derive an interesting expression for its period.</p>
      </div>

      <div className="theory mb-3 pb-3">
        <p className="text-dark font-semibold text-xl mb-1 underline pl-1">IMPORTANT TERMS:</p>
        <ul className="text-dark50 font-normal text-base pl-5 list-decimal">
          <li><strong>The oscillatory motion of a simple pendulum:</strong> Oscillatory motion is defined as the to and fro motion of the pendulum in a periodic fashion, and the center point of oscillation is known as the equilibrium position.</li>
          <li><strong>The time period of a simple pendulum:</strong> It is defined as the time taken by the pendulum to finish one full oscillation and is denoted by “T”.</li>
          <li><strong>The amplitude of a simple pendulum:</strong> It is defined as the distance traveled by the pendulum from the equilibrium position to one side.</li>
          <li><strong>Length of a simple pendulum:</strong> It is defined as the distance between the point of suspension to the center of the bob and is denoted by “l”.</li>
        </ul>


        <p className="text-dark font-semibold text-xl mb-1">EXPRESSION FOR TIME PERIOD OF SIMPLE PENDULUM:</p>
        <p className="text-dark50 font-normal text-base pl-3 mb-3">
          The mathematical expression for time period of simple pendulum is: <br />
          T=2π√l/g <br />
          This equation shows that time period pendulum depends on the length of a simple pendulum and the acceleration due to gravity with no direct dependence on the mass of the bob. However, experimental verification is necessary to confirm this relationship.
        </p>

        <img className='pl-5 pb-3' src={img} alt="" />

        <p className="text-dark font-semibold text-xl mb-1">APPARATUS</p>
        <ul className="text-dark50 font-normal text-base pl-5 list-decimal">
          <li>Two identical bobs of different masses with hooks</li>
          <li>Thread/ an inextensible string.</li>
          <li>Iron stand with clamp and heavy base.</li>
          <li>Vernier caliper</li>
          <li>Stopwatch</li>
          <li>Metre rule</li>
          <li>Laboratory balance.</li>
          <li>Calculator</li>
          <li>Piece of chalk</li>
        </ul>
      </div>
    </div>
  )
}

export default TheoryPhy95