// Leetcode 973: K Closest Points to Origin

var kClosestPoints = function(points, K) {
  points.sort((a,b) => _findDistance(a) - _findDistance(b));
  return points.slice(0, K);
};

function _findDistance(coords) {
  const [x,y] = coords;
  return Math.sqrt(x*x + y*y);
}

module.exports = kClosestPoints;