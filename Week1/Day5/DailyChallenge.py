import math
import turtle

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius:
            self.radius = radius
            self.diameter = radius * 2
        elif diameter:
            self.diameter = diameter
            self.radius = diameter / 2
        else:
            raise ValueError("You must provide either a radius or a diameter")

    @property
    def area(self):
        return math.pi * (self.radius ** 2)

    def __str__(self):
        return f" Circle(Radius: {self.radius}, Diameter: {self.diameter}, Area: {self.area:.2f})"

    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        raise TypeError("You can only add Circle objects together")

    def __eq__(self, other):
        return self.radius == other.radius

    def __lt__(self, other):
        return self.radius < other.radius

    def __le__(self, other):
        return self.radius <= other.radius


c1 = Circle(radius=5)
c2 = Circle(diameter=16)

print(c1)
print(c2)


c4 = c1 + c2
print(c4)


circle_list = [c1, c2, c4]
sorted_circles = sorted(circle_list)
print("\n Sorted Circles:")
for circle in sorted_circles:
    print(circle)


print(f"c1 == c2? {c1 == c2}")
print(f"c1 < c2? {c1 < c2}")


def draw_circle(radius, x, y):
    turtle.penup()
    turtle.goto(x, y - radius)
    turtle.pendown()
    turtle.circle(radius)

turtle.speed(0)


x_pos = -200
for circle in sorted_circles:
    draw_circle(circle.radius * 10, x_pos, 0)
    x_pos += 100

turtle.done()