import { findId } from './findId';

describe('findId', () => {
  it('False', () => {
    expect(findId('Сколько вариантов', [])).toBe(false);
  });

  it('True', () => {
    expect(findId('Ford', [{ variant: 'Ford' }])).toBe(true);
  });
});
