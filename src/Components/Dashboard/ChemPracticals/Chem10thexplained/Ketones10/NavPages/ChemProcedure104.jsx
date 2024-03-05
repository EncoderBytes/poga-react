import React from 'react'
import img from '../../../../../../assets/chem/procedure1.jpg'

const ChemProcedure104 = () => {
  return (
    <div className='w-4/5 pl-4 pb-10 pt-5'>
      <p className="text-dark font-semibold text-xl mb-1">Procedure</p>
      <ol className="text-dark50 font-normal text-base pl-5 pb-3 list-decimal">
        <li>Take few cm3 of acetone or fructose solution in a test tube.</li>
        <li>Add 2-4 dinitrophenyl-hydrazine drop wise by means of a dropper.</li>
        <li>Shake the mixture vigorously. Orange yellow crystalline precipitate is formed after few minutes. Add few drops of sulphuric acid if the reaction</li>
      </ol>

      <p className="text-dark font-semibold text-xl mb-1">A positive test is indicated by:</p>
      <p className="text-dark50 font-normal text-base pl-3 pb-3">The formation of a yellow, orange or orange-red precipitate</p>
      <img src={img} alt="" />
    </div>
  )
}

export default ChemProcedure104