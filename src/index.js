import { app } from 'hyperapp';
import state from './state';
import actions from './actions';
import view from './views/App';
import '../styles/index.scss';

const appArgs = [
  state,
  actions,
  view,
  document.getElementById('app'),
];

function onMount(main) {
  const {
    up,
    down,
  } = main;

  setTimeout(up, 0);
  setTimeout(down, 1000);
}

let main;

if (process.env.NODE_ENV !== 'production') {
  import('hyperapp-redux-devtools')
    .then((devtools) => {
      main = devtools(app)(...appArgs);

      onMount(main);
    });
} else {
  main = app(...appArgs);

  onMount(main);
}
