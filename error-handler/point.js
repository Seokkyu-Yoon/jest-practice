
const point = {};

const Messages = {
  TYPE: 'Point must be object',
  NULL: 'Point is null',
  EXCLUDED_X: 'Point must have x',
  EXCLUDED_Y: 'Point must have y',
  ILLEGAL: 'Types of x and y must be number',
};

Object.keys(Messages).forEach((errorType) => {
  const message = Messages[errorType];
  Object.defineProperty(point, errorType, {
    value: new Error(message),
    writable: false,
  });
});

module.exports = point;
