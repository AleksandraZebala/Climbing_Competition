async function init(){
    
    const ranking = await getRanking();
    showRanking(ranking);
    
    const sendFetch = document.querySelector('#sendFetch');
    sendFetch.addEventListener("click", postRanking);
}

async function showRanking(ranking){
    
    const box = document.getElementById('box');
    const old = document.querySelector('ul');
    
    if(old) {old.parentNode.removeChild(old);}
    const ul = document.createElement('ul');
    
    ranking.forEach(contestant => showScore(contestant, ul));
    
    box.appendChild(ul);
}

async function getRanking(){
    return fetch('/ranking', {
            method : 'GET'
        })
            .then(r => r.json());
}

async function postRanking(event){
        
        const idField = document.querySelector('[name="id"]');
        const pointsField = document.querySelector('[name="points"]');
    
        event.preventDefault();
        const id = idField.value;
        const points = pointsField.value;
 
        fetch('/contestants', {
            method : 'POST',
            body   : JSON.stringify({
                id,
                points,
            }),
            headers: {
                'Content-Type' : 'application/json',
            },
        })
            .then(r => r.json())
            .then(ranking => {
                showRanking(ranking);
        });
}

async function showScore(contestant, ul){

    const li = document.createElement('li');
    const p = document.createElement('a');

    p.innerText = contestant.name + " " + contestant.points;
    p.href = "/contestants/"+contestant.id;
    li.appendChild(p);
    //li.addEventListener("click", event => showDetails(contestant.id));
    ul.appendChild(li);
}

async function showDetails(id){
    const details = await getDetails();
    ul = document.querySelector('ul');
    ul.removeC
}

async function getDetails(id){
    return fetch('/contestants/'+id, {
            method : 'GET'
        })
            .then(r => r.json());
}

document.addEventListener('DOMContentLoaded', init);
