// Imports
import React from "react";

export default function BPMSlider(props) {

    function updateSlider(event) {
        props.updateBPM(event.target.value);
    }

    return (
        <input type="range" id="bpm-slider" min={15} max={240} defaultValue={props.count} onChange={ updateSlider } />
    );

}