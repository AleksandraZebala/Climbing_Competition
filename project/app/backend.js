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

//--------------------------------------------------------

function getRanking(){
    const ranking = [...contestants];
    console.log("PRZED "+contestants[0].name);
    ranking.sort(x => x.points);
    console.log("PO "+contestants[0].name);
    console.log("RANKING "+ranking[0].name);
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

app.post('/contestants', (req, res) => {
    const {id, points} = req.body;
    console.log(contestants[id].name);
    contestants[id].addRoute(new Route(0, "Haha", 3));
    res.json(getRanking());
});

app.get('/contestants/:id', (req, res) => {
    res.json(getContestant(req.params.id));
});
 
app.listen(3000, () => {
    console.log('Serwer gotowy!');
});