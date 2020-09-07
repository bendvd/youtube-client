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

const initialState = {
    favorites: {},
    filteredFavorites: {},
    trends: {},
    nextPageToken: null,
    isLoading: false,
    searchTerm: '',
    selectedTab: 0,
  };

function youtubeReducer(state = initialState, action) {
    switch (action.type) {
        case SET_FAVORITES:
           return {
             ...state, favorites: action.payload,
           };
        case SET_FILTERED_FAVORITES:
           return {
             ...state, filteredFavorites: {...action.payload},
           };
        case SET_TRENDS: {
          const trendsList = {...state.trends, ...action.payload};
           return {
             ...state, trends: trendsList,
           };
        }
        case SET_PAGE_TOKEN:
           return {
              ...state, nextPageToken: action.payload,
           };

        case SET_IS_LOADING:
           return {
              ...state, isLoading: action.payload,
           };
        case ADD_TO_FAVORITES: {
          const id = action.payload;
          if (Object.keys(state.trends).length > 0 && state.trends[id]) {
            state.trends[id].isFavorite = true;
            state.favorites[id] = state.trends[id];
          }
           return {
              ...state,
              trends: {...state.trends},
              favorites: {...state.favorites},
           };
        }
        case REMOVE_FROM_FAVORITES: {
          const id = action.payload;
          if (Object.keys(state.trends).length > 0 && state.trends[id]) {
            state.trends[id].isFavorite = false;
          }
          delete state.favorites[id];
          delete state.filteredFavorites[id];
          return {
            ...state,
            trends: {...state.trends},
            favorites: {...state.favorites},
            filteredFavorites: {...state.filteredFavorites},
          };
        }
        case SET_UPDATE_STATUS: {
          const { id, isUpdating } = action.payload;
          if (Object.keys(state.trends).length > 0 && state.trends[id]) {
            (state.trends[id].isUpdating = isUpdating);
          }
          return {
            ...state,
            trends: {...state.trends},
          };
        }
        case SET_SEARCH_TERM: {
          return {
            ...state,
            searchTerm: action.payload,
            trends: {},
          };
        }
        case INIT_TRENDS: {
          return {
            ...state,
            trends: {},
          };
        }
        case SET_SELECTED_TAB: {
          return {
            ...state,
            selectedTab: action.payload,
          };
        }
         default: return state;
    }
};

export default youtubeReducer;
