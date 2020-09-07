import React from 'react'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import SearchBar from '../../components/search-bar/SearchBar';
import Tabs from './tabs/Tabs';
import { updateSearchTerm, updateTabSelection } from '../../redux/youtube/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#000000',
  },
}));

function NavBar({ updateSearchTerm, selectedTab, updateTabSelection }) {
  const classes = useStyles();

  return (
      <AppBar className={classes.root} position="sticky">
        <Toolbar>
          <Tabs
            onChange={updateTabSelection}
            selectedTab={selectedTab}
          />
          <SearchBar
            onChange={updateSearchTerm}
          />
        </Toolbar>
      </AppBar>
  );
}

const mapStateToProps = (state) => ({
  selectedTab: state.youtube.selectedTab,
});

const mapDispatchToProps = (dispatch) => ({
  updateSearchTerm: (searchTerm) => dispatch(updateSearchTerm(searchTerm)),
  updateTabSelection: (tabId) => dispatch(updateTabSelection(tabId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);