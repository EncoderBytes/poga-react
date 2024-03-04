import React from 'react'

const BioVivaVoice101 = () => {
    return (
        <div className=" mt-5 pl-3">
            <p className="font-semibold text-dark text-xl my-4">1. 1. What is the purpose of comparing the breathing rate at rest and after exercise?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer1" value="option1" /> To determine the effect of exercise on the respiratory system</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option2" /> To measure lung capacity</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option3" /> To assess cardiovascular fitness</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option4" /> To investigate the relationship between breathing and metabolism</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">2. How can you measure the breathing rate?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer2" value="option1" /> Counting the number of breaths per minute</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option2" /> Measuring the oxygen saturation levels</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option3" /> Monitoring heart rate</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option4" /> Assessing lung volume</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">3: What is the typical breathing rate at rest for a healthy adult?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer3" value="option1" /> 10-15 breaths per minute</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option2" /> 20-25 breaths per minute</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option3" /> 30-35 breaths per minute</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option4" /> 40-45 breaths per minute</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">4. How does exercise affect the breathing rate? </p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer4" value="option1" /> It increases the breathing rate</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option2" /> It decreases the breathing rate</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option3" /> It has no effect on the breathing rate</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option4" /> It depends on the type of exercise</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">5. Why does the breathing rate increase after exercise?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer5" value="option1" /> To supply more oxygen to the muscles</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option2" /> To remove carbon dioxide and waste products from the body</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option3" /> To regulate body temperature</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option4" /> All of the above</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">6. Which factors can influence the breathing rate during exercise?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer6" value="option1" /> Intensity of exercise</label></li>
                <li className="option"><label><input type="radio" name="answer6" value="option2" /> Fitness level of the individual</label></li>
                <li className="option"><label><input type="radio" name="answer6" value="option3" /> Environmental conditions</label></li>
                <li className="option"><label><input type="radio" name="answer6" value="option4" /> All of the above</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">7. How long should one wait after exercise to measure the breathing rate?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer7" value="option1" /> Immediately after exercise</label></li>
                <li className="option"><label><input type="radio" name="answer7" value="option2" /> 5 minutes after exercise</label></li>
                <li className="option"><label><input type="radio" name="answer7" value="option3" /> 10 minutes after exercise</label></li>
                <li className="option"><label><input type="radio" name="answer7" value="option4" /> 30 minutes after exercise</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">8. What other physiological changes may occur during exercise?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer8" value="option1" /> Increased heart rate</label></li>
                <li className="option"><label><input type="radio" name="answer8" value="option2" /> Increased blood flow</label></li>
                <li className="option"><label><input type="radio" name="answer8" value="option3" /> Increased oxygen consumption</label></li>
                <li className="option"><label><input type="radio" name="answer8" value="option4" /> All of the above</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">9. How can monitoring breathing rate be helpful in assessing fitness levels?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer9" value="option1" /> Higher breathing rate indicates better fitness</label></li>
                <li className="option"><label><input type="radio" name="answer9" value="option2" />  Lower breathing rate indicates better fitness</label></li>
                <li className="option"><label><input type="radio" name="answer9" value="option3" /> Breathing rate is not related to fitness levels</label></li>
                <li className="option"><label><input type="radio" name="answer9" value="option4" /> Breathing rate can indicate respiratory problems, not fitness levels</label></li>
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

export default BioVivaVoice101