import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import promise from 'redux-promise'

import PostIndex from './components/post_index';
import PostsNew from './components/posts_new'
import PostsShow from './components/posts_show'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/posts/new" component={PostsNew}></Route>
        <Route path="/posts/:id" component={PostsShow}></Route>
        <Route path="/" component={PostIndex}></Route>
      </Switch>
    </div>
  </BrowserRouter>
</Provider>, document.querySelector('.container'));
