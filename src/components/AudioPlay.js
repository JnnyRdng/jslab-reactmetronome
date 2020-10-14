// Imports
import React, { Component, Fragment } from "react";
import Button from '@material-ui/core/Button';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

export default class AudioPlay extends Component {

    // Constructor
    constructor(props){

        // SUPER
        super(props);

        // State
        this.state = {
            audioPlaying: false,
        }

        // Binds
        this.toggleAudio = this.toggleAudio.bind(this);
        this.beep = this.beep.bind(this);
    }

    componentDidUpdate() {
        if (this.state.audioPlaying) {
            this.beep();
        }
    }


    // Methods
    toggleAudio() {
        
        if (this.state.audioPlaying === true) {
            this.setState({ audioPlaying: false });
            clearInterval(this.interval);
        } else {
            this.setState({ audioPlaying: true });
            this.beep(); 
        } 
        
    }

    beep() {
        let snd = new Audio( this.props.sound );
        clearInterval(this.interval);
        this.interval= setInterval(() => {
            snd.pause();
            snd.currentTime = 0;
            snd.play()
        }, 60000/this.props.count);
    }

    // Render
    render() {

        return (
            <Fragment>
                <Button 
                ref={(button) => this.button = button} 
                onClick={this.toggleAudio} 
                variant="outlined" 
                size="large" 
                color="primary" 
                startIcon={(this.state.audioPlaying) ? <PauseCircleFilledIcon /> : <PlayCircleFilledIcon />}
                className={ this.props.classes.root }>
                    { (this.state.audioPlaying) ? 'Pause' : 'Play' }
                </Button>
            </Fragment>
        )
    }
}