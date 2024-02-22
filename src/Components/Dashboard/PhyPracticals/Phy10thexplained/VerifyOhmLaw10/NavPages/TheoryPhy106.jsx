import React from 'react'

const TheoryPhy106 = () => {
  return (
    <div className='w-4/5 pl-4'>
      <div className="aim mt-8 mb-3">
        <p className="text-dark font-semibold text-xl mb-1 underline pl-1">Theory</p>
        <p className="text-dark50 font-normal text-base pl-3">Ohm’s law states that Current passing through a conductor is directly proportional to the current flowing through it, provided that all the physical conditions and temperatures remains constant.
          In household electric distribution, Parallel circuit connections are applied. The reason why a parallel circuit is preferred is to avoid short circuits and to monitor the flow of current for different devices. Below is an experiment to determine the equivalent resistance when the resistors are connected in parallel.</p> <br />
        <p className="text-dark50 font-normal text-base pl-3">Mathematically, this current-voltage relationship can be written as V=IR <br />In the equation, the constant of proportionality, R, is called Resistance and has units of ohms, with the symbol Ω<br /> <br />
          The same formula can be rewritten in order to calculate the current and resistance respectively as follows:
          <br />
          <span className="text-dark font-bold text-base mb-1">I=V/R <br />R=V/I</span>
        </p>
        <br />
        <p className="text-dark50 font-normal text-base pl-3">Ohm’s law only holds true if the provided temperature and the other physical factors remain constant. In certain components, increasing the current raises the temperature. An example of this is the filament of a light bulb, in which the temperature rises as the current is increased. In this case, Ohm’s law cannot be applied. The lightbulb filament violates Ohm’s Law.</p>
      </div>

      <div className="theory mb-3 pb-3">
        <p className="text-dark font-semibold text-xl mb-1 pl-1">Ohm's Law Applications</p>
        <ul className="text-dark50 font-normal text-base pl-5 list-decimal mb-5">
          <li>To determine the voltage, resistance or current of an electric circuit.</li>
          <li>Ohm’s law maintains the desired voltage drop across the electronic components.</li>
          <li>Ohm’s law is also used in DC ammeter and other DC shunts to divert the current.</li>
        </ul>

        <p className="text-dark font-semibold text-xl mb-1 pl-1">Limitations of Ohm's Law</p>
        <p className="text-dark50 font-normal text-base pl-3">Following are the limitations of Ohm’s law:</p><br />
        <ul className="text-dark50 font-normal text-base pl-5 list-decimal mb-5">
          <li>Ohm’s law is not applicable for unilateral electrical elements like diodes and transistors as they allow the current to flow through in one direction only.</li>
          <li>For non-linear electrical elements with parameters like capacitance, resistance etc., the ratio of voltage and current won’t be constant with respect to time making it difficult to use Ohm’s law.</li>
          <li>Ohm’s law is also used in DC ammeter and other DC shunts to divert the current.</li>
        </ul>


        <p className="text-dark font-semibold text-xl mb-1">Apparatus Required</p>
        <ul className="text-dark50 font-normal text-base pl-5 list-decimal">
          <li>Resistor</li>
          <li>Ammeter</li>
          <li>Voltmeter</li>
          <li>Plug Key</li>
          <li>Rehostat</li>
        </ul>
      </div>
    </div>
  )
}

export default TheoryPhy106