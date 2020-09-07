import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { fetchFavorites, deleteVideo, filterFavorites } from '../../redux/youtube/actions';
import VideosList from '../../components/videos-list/VideosList';

function YoutubeFavorites({ favorites, fetchFavorites, deleteVideo, searchTerm, filterFavorites, filteredFavorites }) {
    useEffect(fetchFavorites, []);

    useEffect(() => {
      if (searchTerm.length > 0) {
        filterFavorites(searchTerm);
      }
    }, [searchTerm]); // eslint-disable-line

    function deleteItem(videoId) {
      deleteVideo(videoId);
    }

    return (
        <VideosList
          allRemovable
          videosData={searchTerm.length > 0 ? filteredFavorites : favorites}
          onClick={deleteItem}
        />
    )
}

const mapStateToProps = (state, ownProps) => ({
  favorites: state.youtube.favorites,
  filteredFavorites: state.youtube.filteredFavorites,
  isLoading: state.youtube.isLoading,
  searchTerm: state.youtube.searchTerm,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchFavorites: () => dispatch(fetchFavorites()),
  deleteVideo: (id) => dispatch(deleteVideo(id)),
  filterFavorites: (searchTerm) => dispatch(filterFavorites(searchTerm)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(YoutubeFavorites));