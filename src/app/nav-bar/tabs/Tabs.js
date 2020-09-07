import React, { useEffect } from 'react'
import {Link, withRouter} from 'react-router-dom';
import { useLocation} from "react-router";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function AppTabs({ selectedTab, onChange }) {
  let location = useLocation();
  useEffect(() => {
    if (location.pathname === '/favorites') {
      onChange(1);
    }
  }, []); // eslint-disable-line

  const handleChange = (event, newValue) => {
    onChange(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  return (
    <Tabs value={selectedTab} onChange={handleChange} aria-label="simple tabs example">
      <Tab label="Trending" to='/trending' component={Link} {...a11yProps(0)} />
      <Tab label="Favorites" to='/favorites' component={Link} {...a11yProps(1)} />
    </Tabs>
  );
}

export default withRouter(AppTabs);