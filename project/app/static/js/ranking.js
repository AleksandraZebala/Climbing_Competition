async function initRanking(){
    
    const ranking = await getRanking();
    showRanking(ranking);
}

async function showRanking(ranking){
    
    const rankingDiv = document.getElementById('ranking');
    const rankingTable = document.getElementById('rankingTable');
    
    if(rankingTable) {
        rankingTable.parentNode.removeChild(rankingTable);
    }
    
    const newRankingTable = document.createElement('table');
    newRankingTable.id = 'rankingTable';
    
    addHeaderToTable(newRankingTable);
    
    ranking.forEach(contestant => addScoreToTable(contestant, newRankingTable));
    
    rankingDiv.appendChild(newRankingTable);
}

async function addScoreToTable(contestant, table){

    const tableRow = document.createElement('tr');
    
    const pointsData = document.createElement('td');
    const nameData = document.createElement('td');
    const numberData = document.createElement('td');
    const detailsData = document.createElement('td');
    
    const details = document.createElement('p');
    
    pointsData.innerText = contestant.points+" pkt.";
    nameData.innerText = contestant.name+" "+contestant.surname;
    numberData.innerText = contestant.id;
    
    details.innerText = "Zobacz drogi";
    detailsData.appendChild(details);
    
    tableRow.appendChild(numberData);
    tableRow.appendChild(nameData);
    tableRow.appendChild(pointsData);
    tableRow.appendChild(detailsData);
    
    addDetails(detailsData, contestant);
    detailsData.addEventListener("click", showDetails);
    
    table.appendChild(tableRow);
}

async function addDetails(tableRow, contestant){
    
    const ul = document.createElement('ul');
    contestant.routes.forEach(route => {
        
        const p = document.createElement('p');
        p.innerText = route.name + " (" + route.points + " pkt.)";
    
        const li = document.createElement('li');
        li.appendChild(p);
    
        ul.appendChild(li);
    });
    
    ul.style.display = "none";
    
    tableRow.appendChild(ul);
}

async function showDetails(event){
    const p = this.querySelector('p');
    const ul = this.querySelector('ul');
    
    if(ul.style.display == "none"){
        p.style.display = "none";
        ul.style.display = "";
    }
    else{
        ul.style.display = "none";
        p.style.display = "";
    }
}

async function addHeaderToTable(table){
    
    const tableRow = document.createElement('tr');
    
    const pointsData = document.createElement('td');
    const nameData = document.createElement('td');
    const numberData = document.createElement('td');
    const detailsData = document.createElement('td');
    
    numberData.innerText = "Numer";
    nameData.innerText = "Imię i nazwisko";
    pointsData.innerText = "Punkty";
    detailsData.innerText = "Drogi";
    
    tableRow.appendChild(numberData);
    tableRow.appendChild(nameData);
    tableRow.appendChild(pointsData);
    tableRow.appendChild(detailsData);
    
    table.appendChild(tableRow);
}

async function getRanking(){
    return fetch('/ranking', {
            method : 'GET'
        })
            .then(r => r.json());
}

document.addEventListener('DOMContentLoaded', initRanking);
