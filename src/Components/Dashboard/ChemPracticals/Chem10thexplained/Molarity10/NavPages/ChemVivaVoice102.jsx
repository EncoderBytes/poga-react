import React from 'react'

const ChemVivaVoice102 = () => {
    return (
        <>
            <div className=" mt-5 pl-3">
                <p className="font-semibold text-dark text-xl my-4">1. Crystals of Na2CO3. 10H2O when exposed to air_________________?</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer1" value="option1" /> Lose water and remain solid</label></li>
                    <li className="option"><label><input type="radio" name="answer1" value="option2" /> Gain water and remain solid</label></li>
                    <li className="option"><label><input type="radio" name="answer1" value="option3" /> Gain water and become liquid</label></li>
                    <li className="option"><label><input type="radio" name="answer1" value="option4" /> Remains unchanged</label></li>
                </ol>

                <p className="font-semibold text-dark text-xl my-4"> 2. What term is used to describe a substance that, when exposed to air, absorbs so much water from the air that it eventually forms a solution?</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer2" value="option1" /> Hydrated</label></li>
                    <li className="option"><label><input type="radio" name="answer2" value="option2" /> Efflorescent</label></li>
                    <li className="option"><label><input type="radio" name="answer2" value="option3" /> Efflorescent</label></li>
                    <li className="option"><label><input type="radio" name="answer2" value="option4" /> Deliquescent</label></li>
                </ol>

                <p className="font-semibold text-dark text-xl my-4">3. Which one is Natron?</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer3" value="option1" /> Na2CO3</label></li>
                    <li className="option"><label><input type="radio" name="answer3" value="option2" /> Na2CO3.10H2O</label></li>
                    <li className="option"><label><input type="radio" name="answer3" value="option3" /> Na2CO3.H2O</label></li>
                    <li className="option"><label><input type="radio" name="answer3" value="option4" /> NaHCO3</label></li>
                </ol>

                <p className="font-semibold text-dark text-xl my-4">4. In general, the pH scale spans from</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer4" value="option1" /> 0 - 1</label></li>
                    <li className="option"><label><input type="radio" name="answer4" value="option2" /> -1 - 1</label></li>
                    <li className="option"><label><input type="radio" name="answer4" value="option3" /> 0 - 7</label></li>
                    <li className="option"><label><input type="radio" name="answer4" value="option4" /> 0 - 14</label></li>
                </ol>

                <p className="font-semibold text-dark text-xl my-4">5. Which of the following as a Process to prepare washing soda?</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer5" value="option1" /> Solvay Process</label></li>
                    <li className="option"><label><input type="radio" name="answer5" value="option2" /> Amalgam Process</label></li>
                    <li className="option"><label><input type="radio" name="answer5" value="option3" /> Boiling</label></li>
                    <li className="option"><label><input type="radio" name="answer5" value="option4" /> Clark’s Process</label></li>
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
        </>
    )
}

export default ChemVivaVoice102