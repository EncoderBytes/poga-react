import React from 'react'

const VivaVoice95 = () => {
    return (
        <div className=" mt-5 pl-3">
            <p className="font-semibold text-dark text-xl my-4">1: Simple Pendulum does not vibrate at.
            </p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer1" value="option1" /> North Pole.</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option2" /> South Pole.</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option3" /> Surface of the earth.</label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option4" /> Center of the earth.</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">2: When a pendulum is taken on the top of the mountain, the time period will:</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer2" value="option1" /> Increase</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option2" /> Decrease</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option3" /> Remain constant.</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option4" /> Become zero.</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">3: The velocity of a particle moving with simple harmonic motion is __________ at mean position.</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer3" value="option1" /> Zero</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option2" /> Minimum</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option3" /> Maximum</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option4" /> None of these</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">4. When a rigid body is suspended vertically and it oscillates with a small amplitude under the action of the force of gravity, the body is known as:</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer4" value="option1" /> Simple pendulum.</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option2" /> Second’s pendulum.</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option3" /> Torsional Pendulum.</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option4" /> Compound Pendulum.</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">5. Which one of the following laws is not applicable to a simple pendulum?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer5" value="option1" /> The time period depends on its amplitude.</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option2" /> The time period is proportional to the length ‘l’ of the pendulum.</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option3" /> The time period is proportional to the acceleration due to gravity ‘g’.</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option4" /> None of the above.</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">6. A girl sitting on a swing. Another sits by her side. What will be the effect on the time period of the swing.</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer6" value="option1" /> Increase</label></li>
                <li className="option"><label><input type="radio" name="answer6" value="option2" /> Decrease</label></li>
                <li className="option"><label><input type="radio" name="answer6" value="option3" /> No effect.</label></li>
                <li className="option"><label><input type="radio" name="answer6" value="option4" /> None of these.</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">7. A Second’s Pendulum executes:</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer7" value="option1" /> 0.5 beats per second.</label></li>
                <li className="option"><label><input type="radio" name="answer7" value="option2" /> 1.5 beats per second.</label></li>
                <li className="option"><label><input type="radio" name="answer7" value="option3" /> 2.0 beats per second.</label></li>
                <li className="option"><label><input type="radio" name="answer7" value="option4" /> 2.5 beats per second.</label></li>
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

export default VivaVoice95