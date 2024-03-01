import React from 'react'

const BioVivaVoice94 = () => {
    return (
        <div className=" mt-5 pl-3">
            <p className="font-semibold text-dark text-xl my-4">1. What is binary fission?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer1" value="option1" />  A form of sexual reproduction</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option2" /> A process of asexual reproduction </label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option3" /> A process of cell division in animals</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option4" /> A method of spore formation</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">2. Which organism is commonly observed undergoing binary fission?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer2" value="option1" /> Amoeba</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option2" /> Euglena</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option3" /> Paramecium</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option4" /> Spirogyra</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">3: What happens during binary fission in amoeba?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer3" value="option1" /> The amoeba divides into three daughter cells.</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option2" /> The amoeba divides into two daughter cells.</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option3" /> The amoeba undergoes mitosis to form gametes.</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option4" /> The amoeba forms cysts for protection.</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">4. At what stage of binary fission does the constriction appear in the amoeba? a. Initial elongation</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer4" value="option1" /> Initial elongation</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option2" /> Final separation</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option3" /> Middle division</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option4" /> No constriction appears</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">5. Which objective lens should be used for a clearer observation of binary fission?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer5" value="option1" /> 4x</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option2" /> 10x</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option3" /> 40x</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option3" /> 100x</label></li>
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

export default BioVivaVoice94