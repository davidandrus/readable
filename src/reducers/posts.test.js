import posts from './posts';
 
it('should initialize with empty array', () => {
  const subject = posts(undefined, {});
  expect(subject).toEqual([]);
});

it('should return payload when triggered with LOAD_POSTS action', () => {
  const results = [{ name: 'item 1'}];
  const subject = posts([], {
    type: 'LOAD_POSTS',
    payload: results,
  });

  expect(subject).toEqual(results);
});

it('should add new post to posts when CREATE_POST_FULLFILLED', () => {
  const result = { name: 'item 1', 'id': 'id' };
  const subject = posts([], {
    type: 'CREATE_POST_FULFILLED',
    payload: result,
  });

  expect(subject).toEqual([result]);
})