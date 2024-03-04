import React from 'react'

const BioVivaVoice104 = () => {
    return (
        <div className=" mt-5 pl-3">
            <p className="font-semibold text-dark text-xl my-4">1. What is the purpose of examining the longitudinal section of the eye?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer1" value="option1" /> To study the anatomy and structure of the eye</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option2" /> To understand the functioning of the different parts of the eye</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option3" /> To identify any abnormalities or diseases in the eye</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option4" /> All of the above</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">2. Name the transparent structure at the front of the eye that allows light to enter.</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer2" value="option1" /> Cornea</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option2" /> Iris</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option3" /> Lens</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option4" /> Retina</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">3. Which part of the eye controls the amount of light entering the eye?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer3" value="option1" /> Cornea</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option2" /> Iris</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option3" /> Lens</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option4" /> Retina</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">4. What is the function of the lens in the eye?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer4" value="option1" /> To refract light and focus it onto the retina</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option2" /> To regulate the amount of light entering the eye</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option3" /> To transmit visual signals to the brain</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option4" /> To produce tears for lubrication</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">5. Which structure of the eye is responsible for converting light into neural signals?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer5" value="option1" /> Cornea</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option2" /> Iris</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option3" /> Lens</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option4" /> Retina</label></li>
            </ol>


            <p className="font-semibold text-dark text-xl my-4">6. What is the function of the vitreous humor in the eye?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer6" value="option1" /> To help maintain the shape of the eyeball</label></li>
                <li className="option"><label><input type="radio" name="answer6" value="option2" /> To nourish the retina</label></li>
                <li className="option"><label><input type="radio" name="answer6" value="option3" /> To refract light entering the eye</label></li>
                <li className="option"><label><input type="radio" name="answer6" value="option4" /> To regulate intraocular pressure</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">7. Which part of the eye is responsible for producing aqueous humor?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer7" value="option1" /> Cornea</label></li>
                <li className="option"><label><input type="radio" name="answer7" value="option2" /> Iris</label></li>
                <li className="option"><label><input type="radio" name="answer7" value="option3" /> Lens</label></li>
                <li className="option"><label><input type="radio" name="answer7" value="option4" /> Retina</label></li>
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

export default BioVivaVoice104