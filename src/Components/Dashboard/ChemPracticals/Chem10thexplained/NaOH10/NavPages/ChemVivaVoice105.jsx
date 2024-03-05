import React from 'react'

const ChemVivaVoice105 = () => {
    return (
        <>
            <div className=" mt-5 pl-3">
                <p className="font-semibold text-dark text-xl my-4">1. For a substance to be suitable as a primary standard in a volumetric analysis, it should have:</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer1" value="option1" /> A known formula with a low molar mass</label></li>
                    <li className="option"><label><input type="radio" name="answer1" value="option2" /> A very low melting point</label></li>
                    <li className="option"><label><input type="radio" name="answer1" value="option3" /> No tendency to absorb moisture from the air.</label></li>
                    <li className="option"><label><input type="radio" name="answer1" value="option4" /> No acid–base or redox properties.</label></li>
                </ol>

                <p className="font-semibold text-dark text-xl my-4">2. What term is used to describe a substance that, when exposed to air, absorbs so much water from the air that it eventually forms a solution?</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer2" value="option1" /> Hydrated</label></li>
                    <li className="option"><label><input type="radio" name="answer2" value="option2" /> Efflorescent</label></li>
                    <li className="option"><label><input type="radio" name="answer2" value="option3" /> Hygroscopic</label></li>
                    <li className="option"><label><input type="radio" name="answer2" value="option4" /> Deliquescent</label></li>
                </ol>

                <p className="font-semibold text-dark text-xl my-4">3. One reason that sodium hydroxide is not suitable as a primary standard is that:</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer3" value="option1" /> It is highly soluble in water</label></li>
                    <li className="option"><label><input type="radio" name="answer3" value="option2" /> It is deliquescent</label></li>
                    <li className="option"><label><input type="radio" name="answer3" value="option3" /> It is dangerous to handle</label></li>
                    <li className="option"><label><input type="radio" name="answer3" value="option4" /> Its solution is colourless.</label></li>
                </ol>

                <p className="font-semibold text-dark text-xl my-4">4. 4. In general, the pH scale spans from</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer4" value="option1" /> 0 - 1</label></li>
                    <li className="option"><label><input type="radio" name="answer4" value="option2" /> - 1 - 1</label></li>
                    <li className="option"><label><input type="radio" name="answer4" value="option3" /> 0 - 7</label></li>
                    <li className="option"><label><input type="radio" name="answer4" value="option4" /> 0 - 14</label></li>
                </ol>

                <p className="font-semibold text-dark text-xl my-4">5. What is the difference between strong and weak acid?</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer5" value="option1" /> Presence and absence of halogen ions</label></li>
                    <li className="option"><label><input type="radio" name="answer5" value="option2" /> Negative and positive pHb. Negative and positive pH</label></li>
                    <li className="option"><label><input type="radio" name="answer5" value="option3" /> Complete and partial ionisation</label></li>
                    <li className="option"><label><input type="radio" name="answer5" value="option4" /> Proton donation and electron acceptance</label></li>
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

export default ChemVivaVoice105