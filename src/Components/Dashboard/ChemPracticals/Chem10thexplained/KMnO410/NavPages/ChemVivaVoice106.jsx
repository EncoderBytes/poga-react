import React from 'react'

const ChemVivaVoice106 = () => {
    return (
        <div className=" mt-5 pl-3">
            <p className="font-semibold text-dark text-xl my-4">1. Which of the following hydrocarbons is saturated?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer1" value="option1" /> Ethene </label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option2" /> Ethane </label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option3" /> Propyne</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option4" /> Propyne</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">2. Saturated hydrocarbons contain:</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer2" value="option1" /> Only single bonds between carbon atoms</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option2" /> Only double bonds between carbon atoms</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option3" /> Only triple bonds between carbon atoms</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option4" /> Both single and double bonds between carbon atoms</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">3. Which of the following is an example of an unsaturated hydrocarbon?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer3" value="option1" /> Propane</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option2" /> Benzene</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option3" /> Butane</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option4" /> Pentane</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">4. Unsaturated hydrocarbons can form:</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer4" value="option1" /> Cyclic structures</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option2" /> Only linear chains</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option3" /> Only branched chains</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option4" /> Both cyclic structures and linear/branched chains</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">5. Which of the following is a characteristic of saturated fats?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer5" value="option1" /> They are solid at room temperature</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option2" /> They contain double bonds</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option3" /> They are primarily found in plant-based oils</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option4" /> They are considered healthier than unsaturated fats</label></li>
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

export default ChemVivaVoice106