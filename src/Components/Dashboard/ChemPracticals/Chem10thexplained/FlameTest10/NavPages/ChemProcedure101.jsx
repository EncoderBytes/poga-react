import React from 'react'

const ChemProcedure101 = () => {
  return (

    <div className='w-4/5 pl-3 pt-5 pb-14'>

      <ol className="text-dark50 font-normal text-base pl-5 list-decimal mb-5">
        <li> Dip platinum or nichrome (a nickel-chromium alloy) wire in strong hydrochloric acid and then hold it in a hot Bunsen flame to clean it . Repeat until the wire no longer creates any color in the flame.</li>
        <li> When the wire is clean, re-wet it in the acid and then dip it into a little amount of the substance to be tested, allowing some to adhere to the wire. Replace the wire in the flame.</li>
        <li>If the flame color is weak, it is often beneficial to re-dip the wire in the acid and re-place it in the flame as though cleaning it. This should result in a brief but strong burst of color.</li>
      </ol>

      <p className="text-dark font-semibold text-xl mb-1">Limitations of the Flame Test</p>
      <ol className="text-dark50 font-normal text-base pl-5 list-decimal">
        <li>If the ion concentration is extremely low, the flame test will not detect the ions.</li>
        <li> The intensity of the light fluctuates from one sample to the next. Consider the same amount of sodium and lithium. During the flame test, yellow sodium emissions are substantially more powerful than red lithium emissions.</li>
        <li>The presence of contaminants, particularly salt, will have an effect on the test results. It is found in the majority of compounds and gives the flame its yellow coloring. To prevent this, cobalt blue glass is utilized. The yellow tint is gone, and the flame color associated with the other chemical is seen.</li>
      </ol>
    </div>
  )
}

export default ChemProcedure101