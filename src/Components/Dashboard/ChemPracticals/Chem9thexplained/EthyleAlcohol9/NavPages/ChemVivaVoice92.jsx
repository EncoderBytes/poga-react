import React from 'react'

const ChemVivaVoice92 = () => {
    return (
        <div className=" mt-5 pl-3">
            <p className="font-semibold text-dark text-xl my-4">1. The Boiling point of ethyl alcohol is _______?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer1" value="option1" /> 58oC</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option2" /> 78oC</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option3" /> 66oC</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option4" /> 100oC</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">2. Second name of ethyl alcohol is __________?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer2" value="option1" /> Ethene</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option2" /> Propyl</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option3" /> Ethanol</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option4" /> None</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">3. Chemical Formula of ethyl alcohol is_________?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer3" value="option1" /> CnH2n+2</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option2" /> CH3OH</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option3" /> CnH2n-2</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option4" /> C2H5OH</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">4. At 1 atm pressure, the boiling point of water is ____________?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer4" value="option1" /> 0oC</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option2" /> 100oC</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option3" /> -100oC</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option4" /> None of the above</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">5. Old name of ethanol is_____________?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer5" value="option1" /> Phenol</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option2" /> Amine</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option3" /> Grain/drinking alcohol</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option4" /> Ketone</label></li>
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

export default ChemVivaVoice92