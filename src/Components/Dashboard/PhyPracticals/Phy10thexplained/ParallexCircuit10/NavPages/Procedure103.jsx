import React from 'react'

const Procedure103 = () => {
  return (
    <>
      <div className='w-4/5 pl-4'>
        <div className="aim mb-3 mt-8">
          <p className="text-dark font-semibold text-xl mb-1">PROCEDURE</p>
          <ol className="text-dark50 font-normal text-base pl-5 list-disc">
            <li>Make all the connections as shown in the experimental setup I by keeping the key off.</li>
            <li>Insert the key when the circuit is connected appropriately.</li>
            <li>For resistors R1 and R2, note three readings of ammeter and voltmeter.</li>
            <li>Connect the circuit as shown in the experimental setup II.</li>
            <li>Resistors and voltmeter both are connected in parallel.</li>
            <li>Record three readings of ammeter and voltmeter and use a rheostat.</li>
            <li>Close the key, a current should flow through the circuit as indicated by the ammeter.</li>
            <li>Remove the key.</li>
            <li>With the help of the observation table, do the calculations.</li>
          </ol>
        </div>

        <div className="theory mb-8">
          <p className="text-dark font-semibold text-xl mb-1">PRECAUTIONS</p>
          <ul className="text-dark50 font-normal text-base pl-5 list-disc pb-3">
            <li>Remove the dust and other insulating particles from the ends of connecting wires by rubbing it with a sandpaper.</li>
            <li>All the connections should be kept tight and properly connected as per the circuit diagram.</li>
            <li>Take out the plug from the plug key in between the two observations.</li>
            <li>A low resistance rheostat should be used in the circuit to obtain a large variation in current.</li>
            <li>A thick copper connecting wire should be used in the circuit.</li>
            <li>The positive terminals of the ammeter and voltmeter must be connected to the positive terminal of the battery</li>
            <li>When there is no current flow, the ammeter and voltmeter should be at zero.</li>
            <li>To avoid heating and change the resistor’s resistance value, the current should flow while taking the readings.</li>
            <li>The least count of ammeter and voltmeter should be calculated properly.</li>
          </ul>
        </div>
      </div >
    </>
  )
}

export default Procedure103