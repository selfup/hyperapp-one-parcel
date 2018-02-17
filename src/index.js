import { h, app } from 'hyperapp';
import '../styles/index.scss';

const state = {
  num: 0,
};

const actions = {
  up() {
    return ({ num }) => ({ num: num + 1 })
  },
  down() {
    return ({ num }) => ({ num: num - 1 })
  },
};

const view = ({ num }, { up , down }) =>
  <div>
    <div class="ha-logo"></div>
    <h3>{num}</h3>
    <button class="btn up" onclick={up}>Up</button>
    <button class="btn down" onclick={down}>Down</button>
  </div>;

app(
  state,
  actions,
  view,
  document.getElementById('app'),
);
