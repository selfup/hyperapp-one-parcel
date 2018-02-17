import { app } from 'hyperapp';
import state from './state';
import actions from './actions';
import view from './views/App';
import '../styles/index.scss';

app(
  state,
  actions,
  view,
  document.getElementById('app'),
);
