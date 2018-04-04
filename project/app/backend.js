class Contestant{
    
    constructor(id, name, surname){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.routes = [];
        this.points = 0;
    }
    
    addRoute(route){
        this.routes.push(route);
        this.points = this.points + route.points;
    }
    
    getPoints(){
        return this.points;
    }
}

class Route{
    constructor(id, name, points){
        this.id = id;
        this.name = name;
        this.points = points;
    }
}

//-----------------------------------------------------

const routes = [
    new Route(0, "Banał", 1),
    new Route(1, "Krwawa Pięść", 5),
    new Route(2, "Masakracja", 8),
    new Route(3, "Drabina", 2),
    new Route(4, "Fajna droga", 4)
]

const contestants = [
    new Contestant(0, "Ola", "Zębala"),
    new Contestant(1, "Kamil", "Sięka"),
    new Contestant(2, "Jonatan", "Zazula"),
    new Contestant(3, "Bartek", "Ziemski"),
    new Contestant(4, "Ewa", "Jakubowska"),
    new Contestant(5, "Kamil", "Gacek")
]

//--------------------------------------------------------

function getRanking(){
    const ranking = [...contestants];
    ranking.sort(x => - x.points);
    return ranking;
}

function getContestant(id){
    return contestants[id];
}

//--------------------------------------------------------

const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');

const app = express();
 
app.use(bodyParser.urlencoded({
    extended : true,
}));

app.use(bodyParser.json());
 
app.use(express.static(
    path.join(__dirname, '/static')
));

app.get('/ranking', (req, res) => {
    res.json(getRanking());
});

app.post('/ranking', (req, res) => {
    const {contestant_id, route_id} = req.body;
    contestants[contestant_id].addRoute(routes[route_id]);
    res.json(getRanking());
});

app.get('/routes', (req, res) => {
    res.json(routes);
});

app.get('/contestants/:id', (req, res) => {
    res.json(getContestant(req.params.id));
});
 
app.listen(3000, () => {
    console.log('Serwer gotowy!');
});