function entfernung() {
  if (a1 == 1) {
    distance = 0.25;
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
  }
  else if (a1 == 2) {
    distance = 0.2;
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
  }
  else if (a1 == 3) {
    distance = 0.15;
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
  } 
  else if (a1 == 4) {
    distance = 0.1;
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
  } 
  else if (a1 == 5) {
    distance = 0.05;
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
  } 
  else if (a1 == 6) {
    distance = 0.01;
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
  }
}
