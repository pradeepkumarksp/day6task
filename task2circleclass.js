
class Circle {
    radius: number = 1.0
    color: colorData = "Red"
        
    constructor(radius: number, color: colorData) {
        if (typeof (radius) !== "undefined") { this.radius = radius }
        if (typeof (color) !== "undefined") { this.color = color }
    }

    getRadius(): number {
        return this.radius
    }

    setRadius(radius: number) {
        this.radius = radius
    }

    getColor(): colorData {
        return this.color
    }

    setColor(color: colorData) {
        this.color = color
    }

    toString(): String {
        return `Radius: ${this.radius} Color: ${this.color}`
    }

    getArea(): number {
        return ((Math.PI) * this.radius * this.radius)
    }

    getCircumference(): number {
        return (2 * (Math.PI) * this.radius)
    }
}
