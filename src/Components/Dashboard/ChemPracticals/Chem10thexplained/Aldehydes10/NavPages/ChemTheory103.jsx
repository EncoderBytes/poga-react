import React from 'react'
import img from '../../../../../../assets/chem/theory1.png'

const ChemTheory103 = () => {
  return (
    <div className='w-4/5 pl-4 pt-5 pb-10'>
      <p className="text-dark font-semibold text-xl mb-1 pl-1">Theory</p>
      <p className="text-dark50 font-normal text-base pl-2 pb-4">Fehling's solution is a deep blue alkaline solution that is used to detect the presence of aldehydes or groups containing any aldehyde functional group -CHO, as well as to differentiate between reducing and non-reducing sugars when combined with Tollen's reagent. Fehling's solution can also be used to distinguish between ketone groups and water-soluble carbohydrates.</p>

      <p className="text-dark50 font-normal text-base pl-2 pb-4">The substance to be tested is heated with Fehling's solution in order to perform Fehling's test. Fehling's solution oxidizes aldehydes; hence the presence of any aldehyde group is indicated by the production of a brick-red precipitate.</p>

      <img src={img} alt="" />

    </div>
  )
}

export default ChemTheory103