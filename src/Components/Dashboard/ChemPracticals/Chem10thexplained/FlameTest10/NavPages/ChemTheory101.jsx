import React from 'react'
import img from '../../../../../../assets/chem/img.png'

const ChemTheory101 = () => {
  return (
    <div className='w-4/5 pl-4 pt-5 pb-10'>
      <p className="text-dark font-semibold text-xl mb-1 pl-1">Theory</p>
      <p className="text-dark50 font-normal text-base pl-3 pb-5">A flame test is an analytical process used in chemistry to detect the presence of particular elements, typically metal ions, based on each element's unique flame emission spectrum (which may be modified by the presence of chloride ion). The color of flames in general is also affected by temperature and oxygen supply. A flame test is a qualitative examination used by chemists to identify metal and metalloid ions in a material. Not all metal ions emit color when heated in a gas burner. A flame test is the simplest approach to determine the presence of group 1 metal ions in a chemical. There are several reliable ways for other metals, but a flame test will give you a better idea of where to look.</p>

      <p className="text-dark font-semibold text-xl mb-1">Flame colors of common elements</p>
      <img src={img} alt="" />
    </div>
  )
}

export default ChemTheory101