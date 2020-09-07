import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import 'moment-duration-format';

const useStyles = makeStyles((theme) => ({
    timeLabel: {
        position: 'absolute',
        background: '$text-color-dark',
        bottom: '0',
        right: '0',
        opacity: '0.8',
        borderRadius: '2px',
        fontWeight: '500',
        color: 'white',
        margin: '4px',
        padding: '2px 4px',
        lineHeight: '12px',
    },
  }));

  const processDuration = (duration) => moment
    .duration(duration)
    .format('h:mm:ss')
    .padStart(4, '0:0');

export default function DurationLabel({ youtubeDuration }) {
    const classes = useStyles();
    return (
        <div className={classes.timeLabel}>
            <span>{processDuration(youtubeDuration)}</span>
        </div>
    )
}