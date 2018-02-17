import { h } from 'hyperapp';

export default ({ num }, { up, down }) =>
  <div>
    <div class="ha-logo"></div>
    <h3>{num}</h3>
    <button class="btn up" onclick={up}>Up</button>
    <button class="btn down" onclick={down}>Down</button>
  </div>;
