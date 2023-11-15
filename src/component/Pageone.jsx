import React from "react";
import "../assets/css/pageone.css";
import { TypeAnimation } from "react-type-animation";
import imagepage from "../assets/img/image_page.png";

function Pageone() {
    return(
        <div id="Pageone">
            <div className="text-center py-10">
                <h3 className="font-semibold text-green-900 md:text-xl text-lg"> easy to use sliders, lots of variations </h3>
                <h1 className="titlePage font-bold text-green-500 md:text-5xl text-4xl pt-8"> Welcome To Website </h1>
                <TypeAnimation
                    sequence={[
                        'Smooets Slider',
                        2000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Smooets Banner',
                        2000,
                    ]}
                    wrapper="span"
                    speed={30}
                    repeat={Infinity}
                    className="titlePage font-bold text-green-500 md:text-5xl text-4xl"
                    />
                <p className="md:font-medium font-normal md:w-7/12 w-9/12 mx-auto text-green-900 pt-8">Smooets Slider is an easy-to-use slider plugin for WordPress, 
                    allowing you to create stunning image sliders that grab the attention of your site visitors. With this Smooth Slider, 
                    you can easily display images and other content in a responsive and customizable slider.</p>
                <button className="mt-8 bg-green-500 p-3 rounded-full font-semibold text-white
                hover:scale-105 transition duration-300 hover:rotate-1">Downdload Zip File</button>
            </div>
            <div>
                <img src={imagepage} alt="" height={1000} width={1000} className="mx-auto md:w-10/12 w-11/12 border-8 border-green-200 rounded-lg shadow-md"/>
            </div>
        </div>
    )
}

export default Pageone;