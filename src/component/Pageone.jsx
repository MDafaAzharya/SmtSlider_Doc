import React from "react";
import "../assets/css/pageone.css";
import { TypeAnimation } from "react-type-animation";
import imagepage from "../assets/img/image_page.png";
import smtslider from "../assets/smtSlider.zip"

function pageOne() {    
    return (
        <div id="Pageone">
            <div className="text-center py-10">
                <h3 className="font-semibold text-green-900 md:text-xl text-lg"> mudah digunakan dengan berbagai variasi </h3>
                <h1 className="titlePage font-bold text-green-500 md:text-5xl text-4xl pt-8"> Selamat Datang di Website </h1>
                <TypeAnimation
                    sequence={[
                        'Smooets Slider',
                        2000,
                        'Smooets Banner',
                        2000,
                    ]}
                    wrapper="span"
                    speed={30}
                    repeat={Infinity}
                    className="titlePage font-bold text-green-500 md:text-5xl text-4xl"
                />
                <p className="md:font-medium font-normal md:w-7/12 w-9/12 mx-auto text-green-900 pt-8">Smooets Slider adalah plugin slider yang mudah digunakan untuk WordPress, 
                    memungkinkan Anda membuat slider gambar yang menarik perhatian pengunjung situs Anda. Dengan Slider yang Mulus ini, 
                    Anda dapat dengan mudah menampilkan gambar dan konten lain dalam slider yang responsif dan dapat disesuaikan.</p>
                <a
        href={smtslider}
        download="Smt-Slider"
        target="_blank"
        rel="noreferrer"
      ><button
                    className="mt-8 bg-green-500 p-3 rounded-full font-semibold text-white
                    hover:scale-105 transition duration-300 hover:rotate-1"
                >
                    Unduh File Zip
                </button>
                 </a>
            </div>
            <div>
                <img src={imagepage} alt="" height={1000} width={1000} className="mx-auto md:w-10/12 w-11/12 border-8 border-green-200 rounded-lg shadow-md"/>
            </div>
        </div>
    );
}

export default Pageone;
