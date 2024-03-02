import React from 'react'
import img1 from "../../../../../../assets/Phy/viva1.png"
import img2 from "../../../../../../assets/Phy/viva2.png"
import img3 from "../../../../../../assets/Phy/viva3.png"
import img4 from "../../../../../../assets/Phy/viva4.png"

const BioVivaVoice101 = () => {
    return (
        <div className=" mt-5 pl-3">
            <p className="font-semibold text-dark text-xl my-4">1. A ray of light incident on one of the parallel faces of a rectangular glass slab, emerges out of the opposite parallel face</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer1" value="option1" /> <img src={img1} alt="" /></label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option2" /> <img src={img2} alt="" /></label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option3" /> <img src={img3} alt="" /></label></li>
                <li className="option"><label><input type="radio" name="answer1" value="option4" /> <img src={img4} alt="" /></label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">2. Why does bending of light takes place ?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer2" value="option1" /> Because light travels with same velocity in different media</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option2" /> Because it travels with different velocity in different media</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option3" /> None of these</label></li>
                <li className="option"><label><input type="radio" name="answer2" value="option4" /> Both resistance and potential difference</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">3: In which direction does a ray bend when it travels from a denser medium to a rarer medium</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer3" value="option1" /> It bends away from the normal as it meets the surface of rarer medium</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option2" /> It bends towards the normal as it meets the surface of rarer medium</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option3" /> It goes straight</label></li>
                <li className="option"><label><input type="radio" name="answer3" value="option4" /> None of these</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">4. Refractive index is the property of :</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer4" value="option1" /> One medium</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option2" /> The pair of media</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option3" /> One vacuum</label></li>
                <li className="option"><label><input type="radio" name="answer4" value="option4" /> None of these</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">5. Does the refractive index of substance change with the colour of light ?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer5" value="option1" /> No, refractive index does not depend upon the colour of light (wavelength)</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option2" /> Yes, refractive index depends upon the colour of light (wavelength)</label></li>
                <li className="option"><label><input type="radio" name="answer5" value="option3" /> None of these.</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">6. Give the example of total internal reflection</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer6" value="option1" /> Mirage (Mrig Trishna), generally observed in deserts in summer</label></li>
                <li className="option"><label><input type="radio" name="answer6" value="option2" /> Looming, generally observed in cold region</label></li>
                <li className="option"><label><input type="radio" name="answer6" value="option3" /> Both of these</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">7. What is critical angle ?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer7" value="option1" /> Critical angle is the angle of incidence for which angle of refraction is 45 degree when light travels from denser medium to rarer</label></li>
                <li className="option"><label><input type="radio" name="answer7" value="option2" /> Is the angle of incidence for which angle of refraction is 90 when light travels from rarer to denser medium</label></li>
                <li className="option"><label><input type="radio" name="answer7" value="option3" /> Is the angle of incidence for which angle of refraction is 90 when light travels from denser to rarer medium</label></li>
                <li className="option"><label><input type="radio" name="answer7" value="option4" /> None of these</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">8. What do you mean by the statement "Refractive Index of glass is 1.5"</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer8" value="option1" /> It means refractive index of glass with respect to air is 1.5</label></li>
                <li className="option"><label><input type="radio" name="answer8" value="option2" /> Refractive index of air with respect to glass is 1.5</label></li>
                <li className="option"><label><input type="radio" name="answer8" value="option3" /> It means refractive index of glass with respect to water is 1.5</label></li>
                <li className="option"><label><input type="radio" name="answer8" value="option4" /> None of these</label></li>
            </ol>

            <p className="font-semibold text-dark text-xl my-4">9. What is the advantage of "total internal reflection" over reflection ?</p>
            <ol className='pl-2 text-dark50 text-base'>
                <li className="option"><label><input type="radio" name="answer9" value="option1" /> Total internal reflection is an interesting phenomenon than reflection</label></li>
                <li className="option"><label><input type="radio" name="answer9" value="option2" /> Loss of intensity of light is less in total internal reflection than reflection</label></li>
                <li className="option"><label><input type="radio" name="answer9" value="option3" /> None of these</label></li>
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