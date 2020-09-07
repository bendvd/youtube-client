import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DurationLabel from './DurationLabel';

const useStyles = makeStyles((theme) => ({
    imageContainer: {
        position: 'relative',
        gridRow: '1 / 2',
        gridColumn: '1 / 2'
    },
  }));


export default function PreviewImage({ imageUrl, duration }) {
    const classes = useStyles();
    return (
        <div className={classes.imageContainer}>
            <img src={imageUrl} alt="" width="100%" height="100%"></img>
            <DurationLabel youtubeDuration={duration} />
        </div>
    )
}
