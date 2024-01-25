import React from 'react'

const VivaVoice101 = () => {
    return (
        <>
            <div className=" mt-5 pl-3">
                <p className="font-semibold text-dark text-xl my-4">1. What is the general formula for finding the focal length?</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer1" value="option1" /> 1/q=1/p+1/f</label></li>
                    <li className="option"><label><input type="radio" name="answer1" value="option2" /> 1/f=1/p+1/q</label></li>
                    <li className="option"><label><input type="radio" name="answer1" value="option3" /> 1/f=1/q-1/p</label></li>
                    <li className="option"><label><input type="radio" name="answer1" value="option4" /> All of the above</label></li>
                </ol>

                <p className="font-semibold text-dark text-xl my-4">2. What is the basic principle behind the parallax method to find the focal length of a convex lens?</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer2" value="option1" /> Diffraction of light</label></li>
                    <li className="option"><label><input type="radio" name="answer2" value="option2" /> Reflection of light</label></li>
                    <li className="option"><label><input type="radio" name="answer2" value="option3" /> TRefraction of light</label></li>
                    <li className="option"><label><input type="radio" name="answer2" value="option4" /> Dispersion of light.</label></li>
                </ol>

                <p className="font-semibold text-dark text-xl my-4">3. In the parallax method, what is the object whose position is observed through the lens?</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer3" value="option1" /> Convex lens</label></li>
                    <li className="option"><label><input type="radio" name="answer3" value="option2" /> Concave lens</label></li>
                    <li className="option"><label><input type="radio" name="answer3" value="option3" /> Light source</label></li>
                    <li className="option"><label><input type="radio" name="answer3" value="option4" /> Real object</label></li>
                </ol>

                <p className="font-semibold text-dark text-xl my-4">4. What type of image is formed on a convex lens in the parallax method?</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer4" value="option1" /> Real and inverted</label></li>
                    <li className="option"><label><input type="radio" name="answer4" value="option2" /> Virtual and inverted</label></li>
                    <li className="option"><label><input type="radio" name="answer4" value="option3" /> Virtual and erect</label></li>
                    <li className="option"><label><input type="radio" name="answer4" value="option4" /> Real and erect</label></li>
                </ol>

                <p className="font-semibold text-dark text-xl my-4">5. What other methods can be used to determine the focal length of a convex lens apart from the parallax method?</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer5" value="option1" /> Reading from the lens markings</label></li>
                    <li className="option"><label><input type="radio" name="answer5" value="option2" /> Measuring the radius of curvature</label></li>
                    <li className="option"><label><input type="radio" name="answer5" value="option3" /> Using the lens equation directly</label></li>
                    <li className="option"><label><input type="radio" name="answer5" value="option4" /> All of the above</label></li>
                </ol>

                <p className="font-semibold text-dark text-xl my-4">6. The parallax method can be used to determine the focal length of which type of lens?</p>
                <ol className='pl-2 text-dark50 text-base'>
                    <li className="option"><label><input type="radio" name="answer6" value="option1" /> Both Concave and Convex lens</label></li>
                    <li className="option"><label><input type="radio" name="answer6" value="option2" /> Concave lens only</label></li>
                    <li className="option"><label><input type="radio" name="answer6" value="option3" /> Convex lens only</label></li>
                    <li className="option"><label><input type="radio" name="answer6" value="option4" /> Spherical lens only</label></li>
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

export default VivaVoice101