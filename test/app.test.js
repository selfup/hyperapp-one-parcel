import { h, app } from 'hyperapp';
import appActions from './../src/actions';
import appState from './../src/state';
import App from './../src/views/App';

beforeEach(() => {
  document.body.innerHTML = '';
});

test('Counter test', done => {
  const view = (state, actions) =>
    h(
      'div',
      {
        oncreate() {
          expect(!document.body.innerHTML.includes('0')).toBe(true);
          expect(document.body.innerHTML.includes('1')).toBe(true);
          done();
        },
      },
      [App(state, actions)],
    );

  const main = app(appState, appActions, view, document.body);

  main.up();
});

test('App test', done => {
  const view = (state, actions) =>
    h(
      'div',
      {
        oncreate() {
          expect(!document.body.innerHTML.includes('0')).toBe(true);
          expect(document.body.innerHTML.includes('-1')).toBe(true);
          done();
        },
      },
      [App(state, actions)],
    );

  const main = app(appState, appActions, view, document.body);

  main.down();
});
