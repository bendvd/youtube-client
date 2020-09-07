import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10px',
    },
    }));

export default function ActionButton({ onClick, deleteable, isUpdating }) {
    const classes = useStyles();

    return (
        <div className={classes.buttonContainer}>
            {isUpdating ?
            <CircularProgress /> :
            <Button onClick={onClick} variant="contained" color={deleteable ? 'secondary' : 'primary'}>
                {deleteable ? 'delete' : 'save'}
            </Button>}
        </div>
    )
}