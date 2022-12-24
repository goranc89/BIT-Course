// 10.
// a. Write a constructor function that creates points in space. Each point in space has its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.
// b. Write a function that calculates the distance between two points in the space.

function PointInSpace(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}

function calculateDistance(point1, point2) {
  let dx = point2.x - point1.x;
  let dy = point2.y - point1.y;
  let dz = point2.z - point1.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

let point1 = new PointInSpace(3, 4, 7);
let point2 = new PointInSpace(1, 2, 3);

let dist = calculateDistance(point1, point2);

console.log(
  "The distance between (" +
    point1.x +
    ", " +
    point1.y +
    ", " +
    point1.z +
    ") and (" +
    point2.x +
    ", " +
    point2.y +
    ", " +
    point2.z +
    ") is " +
    dist
);
