import React from 'react'

const TheoryPhy105 = () => {
  return (
    <div className='w-4/5 pl-4'>
      <div className="aim mt-8 mb-3">
        <p className="text-dark font-semibold text-xl mb-1">STUDY RESISTORS IN A SERIES CIRCUIT</p>
        <p className="text-dark50 font-normal text-base pl-3">Resistance: The property of a conductor which resists or opposes the flow of current through it is called the resistance of the conductor. Its SI unit is ohm(Ω). Current ∝ 1/Resistance The resistance of a uniform conductor is:<br /></p>

        <ol className="text-dark50 font-normal text-base pl-7 list-decimal">
          <li>Directly proportional to the length of the conductor and Inversely proportional to the area of the cross - section of the conductor.</li>
        </ol>
        <p className="text-dark50 font-normal text-base pl-3">Therefore, R∝ l / A or R = ρ l / A</p> <br />
        <p className="text-dark50 font-normal text-base pl-3">Where p is the constant of proportionality, called the specific resistance or resistivity of the material of the conductor. It depends on the nature of the material of the conductor, i.e. it is constant for a particular material but different for different materials. The unit of resistivity is ohm-meter or Ω-m.</p>
      </div>

      <div className="theory mb-3 pb-3">
        <p className="text-dark font-semibold text-xl mb-1 pl-1">Series combination of resistors:</p>
        <p className="text-dark50 font-normal text-base pl-3 mb-3">
          The arrangement in which various resistors are connected in such a way that they provide only one path to the flow of current is called the series combination of the resistors. The series combination of resistors Rv R2 and R3 is shown in the figure given below.
        </p>
        <p className="text-dark font-semibold text-xl mb-1">Expression of Equivalent Resistance in series combination of resistors:
        </p>
        <p className="text-dark50 font-normal text-base pl-3 mb-3">The end-to-end connection of two or more resistors is said to be in series combination if they provide only one path to the flow of current, i.e. same current would flow through each resistor.The equivalent resistance of the series combination of two resistors is given by: Req = R1+ R2 </p>

        <p className="text-dark font-semibold text-xl mb-1">Characteristics Of Series Circuit:</p>
        <ul className="text-dark50 font-normal text-base pl-5 list-decimal">
          <li>The current flowing through all the resistors in series circuit is same.</li>
          <li>The total voltage across the combination is equal to the sum of the voltage drop across the individual resistor.</li>
          <li>Voltage across any resistor is directly proportional to the resistance of that resistor (as I is constant).</li>
          <li>Equivalent resistance of the series circuit is equal to the sum of the individual resistances, i.e. Req = R1 + R2 + R3.
          </li>
          <li>The value of equivalent resistance is higher than the highest value of resistor used in the series circuit.
          </li>
        </ul>

        <p className="text-dark font-semibold text-xl mb-1">Uses of a series circuit:</p>
        <p className="">It is used when</p>
        <ul className="text-dark50 font-normal text-base pl-5 list-decimal">
          <li>The resistance of the circuit is to be increased.</li>
          <li>The current in the circuit is to be decreased.</li>
          <li>The less potential difference across a particular resistor is needed.</li>
        </ul>

        <p className="text-dark font-semibold text-xl mb-1">MATERIALS REQUIRED:</p>

        <ul className="text-dark50 font-normal text-base pl-5 list-decimal">
          <li>Battery (voltage: 6.75 – 6.90)</li>
          <li>Voltmeter</li>
          <li>Ammeter</li>
          <li>Connecting wires.</li>
          <li>Resistors</li>
          <li>Keys</li>
        </ul>
      </div>
    </div>
  )
}

export default TheoryPhy105