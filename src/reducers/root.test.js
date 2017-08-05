import rootReducer from './root';

it('should be defined', () => {
  expect(rootReducer).toBeDefined();
});

it('should be a function', () => {
  expect(rootReducer).toBeInstanceOf(Function);
});

it('should return object', () => {
  expect(rootReducer()).toBeInstanceOf(Object);
});

it('should have categories', () => {
  expect(rootReducer()).toHaveProperty('categories');
});