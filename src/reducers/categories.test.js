import categories from './categories';
 
it('should initialize with empty array', () => {
  const subject = categories(undefined, {});
  expect(subject).toEqual([]);
});

it('should return payload when triggered with LOAD_CATEGORIES action', () => {
  const results = [{ name: 'item 1'}];
  const subject = categories([], {
    type: 'LOAD_CATEGORIES',
    payload: results,
  });

  expect(subject).toEqual(results);
});