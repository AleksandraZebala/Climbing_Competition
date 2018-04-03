class Contestant{
    
    constructor(id, name, surname){
        this.name = name;
        this.surname = surname;
        this.routes = [];
    }
    
    addRoute(route){
        this.routes.push(route);
    }
    
    getPoints(){
        return this.routes
            .reduce((prev, curr) => prev + curr.points, 0);
    }
}

class Route{
    constructor(id, name, points){
        this.name = name;
        this.points = points;
    }
}

const routes = [
    new Route(0, "Superek", 1),
    new Route(1, "Krwawa Pięść", 5),
    new Route(2, "Masakracja", 8),
    new Route(3, "Banał", 2),
    new Route(4, "Fajna droga", 4)
]

const contestants = [
    new Contestant(0, "Ola", "Zębala"),
    new Contestant(1, "Kamil", "Sięka")
]

/*contestants[0].addRoute(routes[0]);
contestants[0].addRoute(routes[1]);
contestants[0].addRoute(routes[2]);
contestants[1].addRoute(routes[3]);
contestants[1].addRoute(routes[4]);*/