import React from 'react'

const ChemVivaVoice94 = () => {
    return (
        <div className=" mt-5 pl-3">
            <p className="font-semibold text-dark text-xl my-4">1. Crystals of pure copper sulphate are separated from the solution by :</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer1" value="option1" /> Condensation</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option2" /> Distillation</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option3" /> Solidification</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option4" /> Filteration</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">2. Which of the following can be separated by crystallization?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer2" value="option1" /> Copper Sulphate</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option2" /> Salt</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option3" /> Potash Alum</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option4" /> All of the Above</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">3. During crystallization of copper sulphate, heating is stopped when:</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer3" value="option1" /> Solution become saturated</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option2" /> Solution reaches boiling point</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option3" /> Solution reaches to its half</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option4" /> None of the above</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">4. Copper sulphate crystals are of which color after purification?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer4" value="option1" /> White</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option2" /> Black</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option3" /> Blue</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option4" /> Yellow</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">5. The copper sulphate solution during crystallization is filtered to:</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer5" value="option1" /> Separate Copper</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option2" /> Form Crystals</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option3" /> Separate impurities</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option4" /> All of the above</label></li>
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

export default ChemVivaVoice94