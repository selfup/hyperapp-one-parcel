import actions from './../src/actions';
import state from './../src/state';

test('Actions up', () => {
  const addResult = actions.up()(state);

  expect(addResult).toEqual({
    num: 1,
  });
});

test('Actions down', () => {
  const addResult = actions.down()(state);

  expect(addResult).toEqual({
    num: -1,
  });
});
