import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTrends, saveVideo, deleteVideo, fetchFavorites, searchVideos, initTrends } from '../../redux/youtube/actions';
import VideosList from '../../components/videos-list/VideosList';

function YoutubeTrends({ trends, fetchTrends, nextPageToken, isLoading, saveVideo, fetchFavorites, deleteVideo, searchTerm, searchVideos, initTrends }) {

    useEffect(fetchFavorites, []);
    useEffect(() => {
      if (searchTerm.length > 0) {
        searchVideos(searchTerm);
        initTrends();
      }
    }, [searchTerm, searchVideos]); // eslint-disable-line

    function onClick(id) {
      const videoData = trends[id];
      videoData.isFavorite ? deleteVideo(id) : saveVideo({ id, data: videoData });
    }

    function bottomReachedCallback() {
      (searchTerm.length > 0) ? searchVideos(searchTerm, nextPageToken) : fetchTrends(nextPageToken);
    }
    return (
        <VideosList
          bottomReachedCallback={bottomReachedCallback}
          isLoading={isLoading}
          videosData={trends}
          onClick={onClick}
        />
    )
}

const mapStateToProps = (state, ownProps) => {
  return ({
    trends: state.youtube.trends,
    nextPageToken: state.youtube.nextPageToken,
    isLoading: state.youtube.isLoading,
    searchTerm: state.youtube.searchTerm,
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchFavorites: () => dispatch(fetchFavorites()),
  fetchTrends: (nextPageToken) => dispatch(fetchTrends(nextPageToken)),
  searchVideos: (searchTerm, nextPageToken) => dispatch(searchVideos(searchTerm, nextPageToken)),
  saveVideo: ({ id, data }) => dispatch(saveVideo({ id, data })),
  deleteVideo: (id) => dispatch(deleteVideo(id)),
  initTrends: () => dispatch(initTrends()),
})

export default connect(mapStateToProps, mapDispatchToProps)(YoutubeTrends);
