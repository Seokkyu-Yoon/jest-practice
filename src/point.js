const ErrorHandler = require('../error-handler');

function isPoint(point) {
  if (typeof point !== 'object') {
    throw ErrorHandler.point.TYPE;
  }
  if (point === null) {
    throw ErrorHandler.point.NULL;
  }
  if (!('x' in point)) {
    throw ErrorHandler.point.EXCLUDED_X;
  }
  if (!('y' in point)) {
    throw ErrorHandler.point.EXCLUDED_Y;
  }
  if (typeof point.x !== 'number' || typeof point.y !== 'number') {
    throw ErrorHandler.point.ILLEGAL;
  }
  return true;
}

function printPoint(point = null) {
  isPoint(point);
  return `x: ${point.x}, y: ${point.y}`;
}

module.exports = {
  printPoint,
};
