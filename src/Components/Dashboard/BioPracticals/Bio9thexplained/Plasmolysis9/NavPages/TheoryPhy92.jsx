import React from 'react'

const TheoryPhy92 = () => {
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


        <p className="text-dark font-semibold text-xl mb-1">TIME PERIOD OF SIMPLE PENDULUM:</p>
        <p className="text-dark50 font-normal text-base pl-3 mb-3">A point mass M is suspended from the end of a light inextensible string, whose upper end is fixed to a rigid support. The mass is displaced from its mean position.</p>

        <p className="text-dark font-semibold text-xl mb-1">ASSUMPTIONS :</p>
        <ul className="text-dark50 font-normal text-base pl-5 list-disc">
          <li>There is negligible friction from the air and the system</li>
          <li>The arm of the pendulum does not bend or compress and is massless</li>
          <li>The pendulum swings in a perfect plane</li>
          <li>Gravity remains constant</li>
        </ul>
        <br />
        <p className="text-dark50 font-normal text-base pl-5 list-decimal">
          Pull the pendulum bob aside and let it go; the pendulum then swings back and forth. Neglecting air drag and friction at the pendulum’s pivot, these oscillations are periodic. We shall show that provided the angle is small, the motion is that of a simple harmonic oscillator. As shown in the figure below QRS, we resolve the weight w=mg into two components ‘mg cosθ’ and ‘mg sinθ’. The component ‘mg cosθ’ is balanced by the tension T in the string. The restoring force is only provided by the component ‘mg sinθ’. Therefore,
        </p>
        <br />

        <ul className="text-dark50 font-normal text-base pl-5 list-decimal mb-4">
          <li>Frestoring = -mg sinθ</li>
          <li>Also from figure, OPQ, sinθ = x/l</li>
          <li>Putting equation(1) in equation(2), we get Frestoring = -mgx/l</li>
          <li> Also by Newton’s second law of motion, Frestoring = ma <br />
            Comparing equation(3) & (4), we get, ma = -mgx/l</li>
          <li> a = -gx/l <br /><br />

            it can be also shown that the acceleration and displacement of simple pendulum are related by its time period T (the time it takes for the mass spring system to complete one cycle) by the following equation:</li>
          <li> a= -4π2x/T2 <br />
            comparing equation (5) & (6), we get <br />
            -gx/l= -4π2x/T2 <br />
            Re-arranging, T2=4π2l/g <br />
            Taking square-root on both sides, we have <br />
            √ T2=√(4π2l/g) <br />
            T=2π√l/g</li>
        </ul>

        <p className="text-dark50 font-normal text-base pl-3 mb-3">This equation shows that the time period ‘T’ of simple pendulum depends directly on the length ‘l’ of the pendulum and inversely on gravitational acceleration ‘g’. the period of the pendulum does not depend on the mass of the pendulum’s bob and its amplitude .</p>

        <p className="text-dark font-semibold text-xl mb-1">Note:</p>
        <ul className="text-dark50 font-normal text-base pl-5 list-disc mb-3" >
          <li>If the temperature of a system changes, then the time period of the simple pendulum changes due to a change in the length of the pendulum.</li>
          <li>A simple pendulum is placed in a non-inertial frame of reference (accelerated lift, horizontally accelerated vehicle, vehicle moving along an inclined plane).</li>
        </ul>


        <p className="text-dark font-semibold text-xl mb-1">For example:</p>
        <ul className="text-dark50 font-normal text-base pl-5 list-disc mb-4" >
          <li>A lift moving upwards with acceleration ‘a’, then, T = 2π × √(L/geff) = 2π √[L/(g + a)]</li>
          <li>If the lift is moving downward with acceleration ‘a’, then T = 2π × √(L/geff) = 2π √[L/(g – a)]</li>
          <li>For a simple pendulum of length L is equal to the radius of the earth ‘R’, L = R = 6.4 x 106 m, then the time period T = 2π √R/2g</li>
          <li>For infinitely long pendulum L &gt; &gt; R near the earth surface, T = 2π × √(R/g)
          </li>
        </ul>

        <p className="text-dark font-semibold text-xl mb-1">MATERIALS REQUIRED:</p>
        <ul className="text-dark50 font-normal text-base pl-5 list-decimal">
          <li>Metallic Bob with hook</li>
          <li>Thread</li>
          <li>Iron stand with clamp</li>
          <li>Vernier caliper</li>
          <li>Stopwatch</li>
          <li>Calculator</li>
          <li>Piece of chalk</li>
        </ul>
      </div>
    </div>
  )
}

export default TheoryPhy92