// Imports
import React, {Component} from "react";
import BPMCount from '../components/BpmCount';
import BPMSlider from '../components/BpmSlider';
import AudioPlayer from '../components/AudioPlay';

// Build Component - Metronome Wrapper
export default class MetronomeWrapper extends Component {

    // Constructor
    constructor(props) {
        super(props);

        // State
        this.state = {
            bpm: 100
        }
        
        // Binds
        this.onBPMUpdate = this.onBPMUpdate.bind(this);
    }
    
    // Methods
    onBPMUpdate(count) {

        this.setState({ bpm: count });
        
    }

    // Render
    render() {
        return(
            <main>
                <div className="flex">
                    <BPMCount count={ this.state.bpm } />
                    <AudioPlayer count={ this.state.bpm } />
                </div>
                <div>
                    <BPMSlider count={ this.state.bpm } updateBPM={ this.onBPMUpdate } />
                </div>
            </main>
        );
    }

}