import React from 'react'

const ChemVivaVoice91 = () => {
    return (
        <div className=" mt-5 pl-3">
            <p className="font-semibold text-dark text-xl my-4">1. Liquid ethanol can be separated from a mixture of ethanol and water by:</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer1" value="option1" /> Chromatography</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option2" /> Fractional Distillation</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option3" /> Schwann</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option4" /> All of the above</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">2: The process of heating a liquid mixture to form vapours and then cooling the vapours to get pure component is called ____________?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer2" value="option1" /> Distillation</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option2" /> Chromatography</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option3" /> Sublimation</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option4" /> Crystallisation</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">3: The distilled water is collected in ____________?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer3" value="option1" /> Receiver</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option2" /> Adapter</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option3" /> Condenser</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option4" /> Round bottom flask</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">4. The process of distillation is used for the liquids having ____________?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer4" value="option1" /> Sufficient difference in their boiling point</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option2" /> Sufficient difference in their melting point</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option3" /> Sufficient difference in their solubility</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option4" /> None of the above</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">5. Which of the following will vaporize faster?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer5" value="option1" /> Aniline</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option2" /> Chloroform</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option3" /> Water</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option4" /> Kerosene</label></li>
            </ol>

            <div className="btn-container mt-10 pl-2 pb-3">
                <button type="submit" className='btn py-5 px-8 rounded-lg text-overviewWhite font-semibold text-base' style={{
                    background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                }}>Submit</button>

                <span className="bg-aliceBlue py-5 px-8 rounded-lg font-semibold text-base ml-5 cursor-pointer" >

                    <button className="btn" type="reset" style={{
                        background: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                    }}>Cancel</button>

                </span>
            </div>
        </div>
    )
}

export default ChemVivaVoice91