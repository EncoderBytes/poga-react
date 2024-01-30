import React from 'react'

const TheoryPhy103 = () => {
  return (
    <div className='w-4/5 pl-4'>
      <div className="aim mt-8 mb-3">
        <p className="text-dark font-semibold text-xl mb-1 underline pl-1">Parallel Combination Of Resistors:</p>
        <p className="text-dark50 font-normal text-base pl-3">A circuit is said to be in a parallel connection when the resistors are connected in such a way that they branch out from one point. The potential difference in a parallel circuit is the same for each resistor and the current flow is not the same for all resistors. The total current flow through the circuit is calculated by summing up the current flow through each resistor.<br />
          In household electric distribution, Parallel circuit connections are applied. The reason why a parallel circuit is preferred is to avoid short circuits and to monitor the flow of current for different devices. Below is an experiment to determine the equivalent resistance when the resistors are connected in parallel. <br /> <br />The equivalent resistance of the series combination of n resistors is given By:</p>
        <p className="text-dark font-semibold text-xl pl-3">1/Req=1/R1+1/R2+1/R3+. . .+1/Rn</p>
      </div>

      <div className="theory mb-3 pb-3">
        <p className="text-dark font-semibold text-xl mb-1 underline pl-1">Characteristics of Parallel Circuit</p>
        <ul className="text-dark50 font-normal text-base pl-5 list-disc">
          <li>The voltage across all the resistors in parallel circuit is the same.</li>
          <li>The total current flowing through the combination is equal to the sum of the current flowing through the individual resistors.</li>
          <li> Equivalent resistance of the parallel circuit is equal to: <b>i.e 1/Req = 1/R1 + 1/R2 + 1/R3.</b></li>
        </ul>

        <p className="text-dark font-semibold text-xl mb-1">MATERIALS REQUIRED:</p>
        <ul className="text-dark50 font-normal text-base pl-5 list-disc">
          <li>A battery</li>
          <li>A plug key</li>
          <li>Connecting wires</li>
          <li>An ammeter</li>
          <li>A voltmeter</li>
          <li>Rheostat</li>
        </ul>
      </div>
    </div>
  )
}

export default TheoryPhy103