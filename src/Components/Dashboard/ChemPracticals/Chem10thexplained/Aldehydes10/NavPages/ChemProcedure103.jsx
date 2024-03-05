import React from 'react'

const ChemProcedure103 = () => {
  return (
    <div className='w-4/5 pl-4'>
      <div className="aim mb-3 mt-8">
        <p className="text-dark font-semibold text-xl mb-1">Real Lab Procedure</p>
        <hr className='my-3' />
        <p className="text-dark font-semibold text-xl mb-1">At rest : Work out student A's breathing rate at rest</p>
        <ol className="text-dark50 font-normal text-base pl-5 list-decimal">
          <li>Count their number breaths for 1 minute</li>
          <li>Repeat several times to calculate an average</li>
        </ol>
      </div>

      <div className="theory mb-8 pb-10">
        <p className="text-dark font-semibold text-xl mb-1">After exercise</p>
        <ol className="text-dark50 font-normal text-base pl-5 list-decimal">
          <li>Now the same students will walk for three minutes. count their breathing rate and record it in the table</li>
          <li>After this Compare the result to the breathing rate at rest in order to work out the change in breathing rate as a result of exercise</li>
          <li>Make a table and compare all the readings</li>
        </ol>
      </div>
    </div >
  )
}

export default ChemProcedure103