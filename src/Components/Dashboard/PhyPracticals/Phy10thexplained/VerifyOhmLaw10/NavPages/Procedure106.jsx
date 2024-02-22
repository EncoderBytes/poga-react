import React from 'react'

const Procedure106 = () => {
  return (
    <>
      <div className='w-4/5 pl-4'>
        <div className="aim mb-3 mt-8">
          <p className="text-dark font-semibold text-xl mb-1">PROCEDURE</p>
          <ol className="text-dark50 font-normal text-base pl-5 list-disc">
            <li>Initially, the key K is closed and the rheostat is adjusted to get the minimum reading in ammeter A and voltmeter V.</li>
            <li>The current in the circuit is increased gradually by moving the sliding terminal of the rheostat. During the process, the current flowing in the circuit and the corresponding value of potential difference across the resistance wire R, are recorded.</li>
            <li>This way different sets of values of voltage and current are obtained.</li>
            <li>For each set of values of V and I, the ratio of V/I is calculated.</li>
            <li>When you calculate the ratio V/I for each case, you will come to notice that it is almost the same. So V/I = R, which is a constant.</li>
            <li>Plot a graph of the current against the potential difference, it will be a straight line. This shows that the current is proportional to the potential difference.</li>
          </ol>
        </div>

        <div className="theory mb-8">
          <p className="text-dark font-semibold text-xl mb-1">PRECAUTIONS</p>
          <ul className="text-dark50 font-normal text-base pl-5 list-disc pb-3">
            <li>Make sure the power source is disconnected before making any connections or adjustments to the circuit.</li>
            <li>Use insulated tools to handle electrical components and avoid touching exposed conductors with bare hands.</li>
            <li>Use high-quality, calibrated measuring instruments to accurately measure voltage, current and resistance.</li>
          </ul>
        </div>
      </div >
    </>
  )
}

export default Procedure106