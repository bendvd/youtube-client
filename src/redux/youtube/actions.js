import axios from 'axios';
import {
    SET_FAVORITES,
    SET_TRENDS,
    SET_PAGE_TOKEN,
    SET_IS_LOADING,
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
    SET_UPDATE_STATUS,
    SET_SEARCH_TERM,
    INIT_TRENDS,
    SET_SELECTED_TAB,
    SET_FILTERED_FAVORITES
} from './types';

export function fetchFavorites() {
    return (dispatch, getState) => {
        axios.get('http://localhost:3001/videos')
            .then(function (response) {
                const formattedFavorites = {};
                response.data.forEach((video) => {
                    formattedFavorites[video.youtubeId] = video;
                  })
                dispatch({ type: SET_FAVORITES, payload: formattedFavorites});
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                dispatch({ type: SET_IS_LOADING, payload: false });
            });
    }
}

export function fetchTrends(nextPageToken) {
    return (dispatch, getState) => {
        dispatch({ type: SET_IS_LOADING, payload: true });
        axios.get('http://localhost:3001/videos/trend', { params: { page: nextPageToken }})
            .then(function (response) {
                dispatch({ type: SET_PAGE_TOKEN, payload: response.data.nextPageToken });

                const formattedTrends = {};
                response.data.items.forEach((video) => {
                    formattedTrends[video.id] = video;
                    formattedTrends[video.id].isFavorite = !!(getState().youtube.favorites[video.id]);
                })

                dispatch({ type: SET_TRENDS, payload: formattedTrends });
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                dispatch({ type: SET_IS_LOADING, payload: false });
            });
    }
  }

export function searchVideos(searchTerm, nextPageToken) {
    return (dispatch, getState) => {
        dispatch({ type: SET_IS_LOADING, payload: true });
        axios.get('http://localhost:3001/videos/search', { params: { name: searchTerm, page: nextPageToken }})
            .then(function (response) {
                dispatch({ type: SET_PAGE_TOKEN, payload: response.data.nextPageToken });

                const formattedTrends = {};
                response.data.items.forEach((video) => {
                    formattedTrends[video.id] = video;
                    formattedTrends[video.id].isFavorite = !!(getState().youtube.favorites[video.id]);
                })

                dispatch({ type: SET_TRENDS, payload: formattedTrends });
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                dispatch({ type: SET_IS_LOADING, payload: false });
            });
    }
  }

export function saveVideo({ id, data }) {
    return (dispatch, getState) => {
        dispatch({ type: SET_UPDATE_STATUS, payload: { id, isUpdating: true } });

        axios.put(`http://localhost:3001/videos/${id}`, data)
            .then(function (response) {
                dispatch({ type: ADD_TO_FAVORITES, payload: id });
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                dispatch({ type: SET_UPDATE_STATUS, payload: { id, isUpdating: false } });
            });
    }
  }

export function deleteVideo(id) {
    return (dispatch, getState) => {
        dispatch({ type: SET_UPDATE_STATUS, payload: { id, isUpdating: true } });

        axios.delete(`http://localhost:3001/videos/${id}`)
        .then(function (response) {
          dispatch({ type: REMOVE_FROM_FAVORITES, payload: id });
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
            dispatch({ type: SET_UPDATE_STATUS, payload: { id, isUpdating: false } });
        });
    }
  }
export function updateSearchTerm(searchTerm) {
    return (dispatch, getState) => {
        dispatch({ type: SET_SEARCH_TERM, payload: searchTerm });
  }
}
export function initTrends() {
    return (dispatch, getState) => {
        dispatch({ type: INIT_TRENDS });
  }
}
export function updateTabSelection(tabId) {
    return (dispatch, getState) => {
        dispatch({ type: SET_SELECTED_TAB, payload: tabId });
  }
}

export function filterFavorites(searchTerm) {
    return (dispatch, getState) => {
        const filteredFavorites = {};
        const favorites = getState().youtube.favorites;
        Object.keys(favorites).forEach((videoId) => {
            if ((favorites[videoId].title).toLowerCase().includes(searchTerm.toLowerCase())) {
                filteredFavorites[videoId] = favorites[videoId];
            }
        })
        dispatch({ type: SET_FILTERED_FAVORITES, payload: filteredFavorites });
  }
}