import React from 'react'

const ChemVivaVoice103 = () => {
    return (
        <div className=" mt-5 pl-3">
            <p className="font-semibold text-dark text-xl my-4">1. Which of the following will have the highest boiling point?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer1" value="option1" /> Methanal</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option2" /> Ethanal</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option3" /> Propanal</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option4" /> Hexanone</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">2. Formalin is _______ % solution of formaldehyde in water.</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer2" value="option1" /> 10%</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option2" /> 20%</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option3" /> 30%</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option4" /> 40%</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">3. Aldehyde and ketone have the same general formula for homologous series.</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer3" value="option1" /> CnH2nO2n</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option2" /> CnH2n</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option3" /> CnH2nO</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option4" /> CnH2nOn+1</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">4. Which compound contains the Ketonic group?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer4" value="option1" /> Camphor</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option2" /> Fragrances</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option3" /> Flowers</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option4" /> Both A and B</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">5. Which compound contains the aldehyde group?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer5" value="option1" /> Camphor</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option2" /> Sugars</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option3" /> Methane</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option4" /> Both A and B</label></li>
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

export default ChemVivaVoice103