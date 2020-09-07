import React from 'react';
import { Waypoint}  from 'react-waypoint';
import CircularProgress from '@material-ui/core/CircularProgress';
import './InfiniteScroll.css';

export function InfiniteScroll(props) {
  return (
    <React.Fragment>
      {props.children}
      <Waypoint onEnter={props.bottomReachedCallback}>
        <div className='loader-container'>
          {props.isLoading && <CircularProgress />}
        </div>
      </Waypoint>
    </React.Fragment>
  );
}