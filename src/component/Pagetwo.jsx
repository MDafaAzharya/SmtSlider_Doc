import React from "react";

function Pagetwo(){
    return(
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:px-28 px-6 gap-x-28 gap-y-6 py-8" id="Pagetwo">
            <div className="">
                <h1 className="font-bold text-lg text-green-900 pb-2"> Three sliders in one plugin </h1>
                <p> In the SMT Slider Smooets Slider plugin there are three types, namely paralax, square and popup </p>
            </div>
            <div className="">
                <h1 className="font-bold text-lg text-green-900 pb-2">Create More than one project</h1>
                <p>This plugin can create multiple slider projects, so you can vary your ideas more</p>
            </div>
            <div className="">
                <h1 className="font-bold text-lg text-green-900 pb-2"> Custom your own style</h1>
                <p>This plugin also provides custom slides according to the user's wishes</p>
            </div>
        </div>
    )
}

export default Pagetwo;