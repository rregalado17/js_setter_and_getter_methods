// Add your Circle class here
class Circle {
    constructor(radius, diameter, circumference, area) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2
    }

    set diameter(newDiameter) {
        return this.radius = newDiameter / 2
    }

    get circumference() {
        return this.radius * 2 * Math.PI
    }

    set circumference(newRadius) {
        this.radius = (newRadius / Math.PI) / 2
    }

    get area() {
        return Math.PI * (this.radius * this.radius)
    }
}