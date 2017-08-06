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