class uberFare {
    constructor(distance, baseprice, cityname) {
        this.distance = distance;
        this.baseprice = baseprice;
        this.cityname = cityname;

    }
    getFareCity() {
        return (this.distance * this.baseprice)
    } 

}

let cityA = new uberFare(4, 6, 'Dharmapuri'  );

console.log(cityA.getFareCity()); 
