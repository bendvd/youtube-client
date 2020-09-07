import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { InfiniteScroll } from '../../components/InfiniteScroll/InfiniteScroll';
import Thumbnail from '../../components/thumbnail/Thumbnail';

const useStyles = makeStyles((theme) => ({
    videoList: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start'
    }
  }));

function VideosList({ bottomReachedCallback, isLoading, videosData, onClick, allRemovable }) {
    const classes = useStyles();
    return (
        <InfiniteScroll
          bottomReachedCallback={bottomReachedCallback}
          isLoading={isLoading}
        >
          {Object.keys(videosData).length > 0 ?
          <div className={classes.videoList}>
            {Object.keys(videosData).map((videoId) =>
              <Thumbnail
                deleteable={allRemovable}
                data={videosData[videoId]}
                onClick={() => onClick(videoId)}
                key={videoId}
              />
            )}
          </div> :
          <div>we couldn't find anything</div>}
        </InfiniteScroll>
    )
}

export default VideosList;
