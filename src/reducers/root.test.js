import rootReducer from './root';

it('should be defined', () => {
  expect(rootReducer).toBeDefined();
});

it('should be a function', () => {
  expect(rootReducer).toBeInstanceOf(Function);
});

it('should return object', () => {
  const subject = rootReducer(undefined, {});
  expect(subject).toBeInstanceOf(Object);
});

it('should have categories', () => {
  const subject = rootReducer(undefined, {});
  expect(subject).toHaveProperty('categories');
});

it('should have posts', () => {
  const subject = rootReducer(undefined, {});
  expect(subject).toHaveProperty('posts');
});