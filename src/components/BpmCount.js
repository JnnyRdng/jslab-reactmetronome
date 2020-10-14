// Imports
import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.primary.main
    }
  }));

export default function BPMCount(props) {

    const classes = useStyles();

    return (
        <Typography variant="h2">
            BPM: <span className={ classes.root }>{ props.count }</span>
        </Typography>
    );

}