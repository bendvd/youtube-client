import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import PreviewImage from './PreviewImage';
import ActionButton from './ActionButton';

const useStyles = makeStyles((theme) => ({
    videoPreview: {
        display: 'grid',
        grid: '180px auto / 320px',
        margin: '14px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },
  }));

export default function Thumbnail({ onClick, data, deleteable }) {
    const classes = useStyles();

    return (
        <div className={classes.videoPreview}>
            <PreviewImage
                imageUrl={data.thumbnailUrl}
                duration={data.duration}
            />
            <Title
                text={data.title}
            />
            <ActionButton
                deleteable={deleteable || data.isFavorite}
                isUpdating={data.isUpdating}
                onClick={onClick}
            />
        </div>
    )
}