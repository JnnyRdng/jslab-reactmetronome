// Imports
import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

// Build component - AudioSelector
export default class AudioSelector extends Component {

    // Constructor
    constructor(props) {

        // Super
        super(props);
        
        // State
        this.state = {
            audioTypes: [
                {
                    name: "Click",
                    data: "data:audio/mpeg;base64,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"
                },
                {
                    name: "Beep",
                    data: "data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU="
                }
            ]
        }

        // Binds
        this.audioSelect = this.audioSelect.bind(this);
    }

    // Methods
    audioSelect(event) {
        this.props.changeSound(event.target.value);
    }


    // Render
    render() {
        const options = this.state.audioTypes.map((sound, i) => {
            return (
                <MenuItem key={i} value={sound.data}>{sound.name}</MenuItem>
            )
        });
        
        return(
            <FormControl variant="outlined" className="audio-select">
                <InputLabel id="metronome-dropdown">Metronome Sound</InputLabel>
                <Select 
                        labelId="metronome-dropdown"
                        id="metronome-dropdown"
                        onChange={ this.audioSelect } 
                        defaultValue=""
                        label="Metronome Sound"
                        >
                    <MenuItem value="" disabled><em>Chose a sound</em></MenuItem>
                    {options}
                </Select>
            </FormControl>
        );
    }

}

