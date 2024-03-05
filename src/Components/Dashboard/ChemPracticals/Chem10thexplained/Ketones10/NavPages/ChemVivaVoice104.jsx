import React from 'react'

const ChemVivaVoice104 = () => {
    return (
        <div className=" mt-5 pl-3">
            <p className="font-semibold text-dark text-xl my-4">1: Which functional group is present in a ketone?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer1" value="option1" /> -OH (hydroxyl group)</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option2" /> -COOH (carboxylic acid group)</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option3" /> -CHO (aldehyde group)</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option4" /> -C=O (carbonyl group)</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">2: Which of the following is an example of a ketone?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer2" value="option1" /> Ethanol</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option2" /> Acetone</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option3" /> Methanal</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option4" /> Methanol</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">3: How many carbon atoms are typically bonded to the carbonyl carbon in a ketone?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer3" value="option1" /> One</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option2" /> Two</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option3" /> Three</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option4" /> Four</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">4. Which of the following is the general formula for a ketone?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer4" value="option1" /> CnH2</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option2" /> CnH2n+2</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option3" /> CnH2nO</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option4" /> CnH2nO2</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">5. Ketones are commonly used as:</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer5" value="option1" /> Solvents</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option2" /> Sweeteners</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option3" /> Antioxidants</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option4" /> Preservatives</label></li>
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

export default ChemVivaVoice104