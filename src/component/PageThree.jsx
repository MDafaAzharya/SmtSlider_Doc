import React from "react";
import steps from "../assets/img/steps.svg"
import { MdCreateNewFolder } from "react-icons/md";
import { FaImage, FaBorderStyle, FaCopy } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";


function Pagethree(){
    return(
        <div className="md:flex md:justify-between md:px-24 py-5" id="Pagethree">
            <div className="px-10 md:px-0">
                <img src={steps} alt="" width={550} height={550} className="" />
            </div>
            <div className="md:ml-10 ml-8">
                <div>
                    <h1 className="font-bold md:text-4xl text-2xl py-3 text-green-500">Guide to using the plugin</h1>
                    <p className="font-normal md:text-md text-sm py-2">Below is a guide or steps for using the plugin, please read and understand one by one</p>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-3 pt-4">
                    <div className="flex justify-start">
                        <MdCreateNewFolder size={30} className="bg-green-200 w-8 h-8 rounded-full p-2" />
                        <p className="font-medium ml-2 my-auto text-md"> Create a Projek </p>
                    </div>
                    <div className="flex justify-start">
                        <FaImage size={30} className="bg-green-200 w-8 h-8 rounded-full p-2"  />
                        <p className="font-medium ml-2 my-auto text-md"> Add Image  </p>
                    </div>
                    <div className="flex justify-start">
                        <IoMdSettings size={30} className="bg-green-200 w-8 h-8 rounded-full p-2"  />
                        <p className="font-medium ml-2 my-auto text-md"> Setting in menu advanced</p>
                    </div>
                    <div className="flex justify-start">
                        <FaBorderStyle size={30} className="bg-green-200 w-8 h-8 rounded-full p-2"  />
                        <p className="font-medium ml-2 my-auto text-md"> Setting menu style and save </p>
                    </div>
                    <div className="flex justify-start">
                        <FaCopy size={30} className="bg-green-200 w-8 h-8 rounded-full p-2"  />
                        <p className="font-medium ml-2 my-auto text-md"> back to dashboard and copy shortcode</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagethree;