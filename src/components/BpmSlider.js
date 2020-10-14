// Imports
import React from "react";
import Slider from '@material-ui/core/Slider';

export default function BPMSlider(props) {

    function updateSlider(event, value) {
        props.updateBPM(value);
    }

    return (
        <Slider min={15} max={240} defaultValue={100} onChange={ updateSlider } valueLabelDisplay="off" />
    );

}