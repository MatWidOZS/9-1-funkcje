function getTriangleArea(a, h) {
	if (a > 0 && h > 0) {
		return a * h / 2;
	} else {
		return 'Nieprawidłowe dane';
	}
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, -15);
console.log('pole pierwszego trójkąta: ' + triangle1Area);

var	triangle2Area = getTriangleArea(0, 20);
console.log('pole drugiego trójkąta: ' + triangle2Area);

var	triangle3Area = getTriangleArea(-2.5, 8);
console.log('pole trzeciego trójkąta: ' + triangle3Area);
