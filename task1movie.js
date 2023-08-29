class movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getRating() {
        return 'the rating is' + this.rating
    }
// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
class movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = "PG";
    }
    getRating() {
        return `the rating is': ${this.rating}`
    }
    
}

let Movie1 = new movie('Casino Royale', '"Eon Productions', 'PG13' )

console.log(Movie1)