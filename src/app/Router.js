import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import YoutubeTrends from './youtube-trends/YoutubeTrends';
import YoutubeFavorites from './youtube-favorites/YoutubeFavorites';

export default function AppRouter() {
    return (
        <Switch>
            <Route path="/trending">
                <YoutubeTrends />
            </Route>
            <Route path="/favorites">
                <YoutubeFavorites />
            </Route>
            <Route exact path="/">
                <YoutubeTrends />
            </Route>
        </Switch>
    );
}