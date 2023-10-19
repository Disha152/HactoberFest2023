import math


def calculate_tetrahedron_area(side):
	area = math.sqrt(3) * side ** 2 / 4
	return round(area, 2)


# Example usage:
side = 3
area = calculate_tetrahedron_area(side)
print("The area of a tetrahedron with side", side, "is", area)
