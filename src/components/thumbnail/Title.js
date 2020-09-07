import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        fontWeight: '600',
        overflow: 'hidden',
        fontSize: '16px',
        lineHeight: '1.4em',
        maxHeight: '2.8em'
    },
  }));

export default function Title({ text }) {
    const classes = useStyles();
    return (
        <div className={classes.title}>{text}</div>
    )
}
