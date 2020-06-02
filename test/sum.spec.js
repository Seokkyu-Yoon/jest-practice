const { printPoint } = require('../src/point');
const ErrorHandler = require('../error-handler');

describe('sum test', () => {
  it('error test', () => {
    expect.assertions(5);
    expect(() => printPoint(1)).toThrow(ErrorHandler.point.TYPE.message);
    expect(() => printPoint()).toThrow(ErrorHandler.point.NULL.message);
    expect(() => printPoint({})).toThrow(ErrorHandler.point.EXCLUDED_X.message);
    expect(() => printPoint({ x: 1 })).toThrow(ErrorHandler.point.EXCLUDED_Y.message);
    expect(() => printPoint({ x: 'x', y: 'y' })).toThrow(ErrorHandler.point.ILLEGAL.message);
  });

  const point = { x: 10.2, y: 11.8 };
  it('printPoint test', () => {
    expect.assertions(1);
    expect(printPoint(point)).toBe('x: 10.2, y: 11.8');
  });
});
