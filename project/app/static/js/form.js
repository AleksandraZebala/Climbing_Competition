async function initForm(){
    
    const sendFetch = document.querySelector('#sendFetch');
    sendFetch.addEventListener("click", postRanking);
}

async function postRanking(event){
        
        const idField = document.querySelector('[name="id"]');
        const pointsField = document.querySelector('[name="points"]');
    
        event.preventDefault();
        const contestant_id = idField.value;
        const route_id = pointsField.value;
 
        fetch('/ranking', {
            method : 'POST',
            body   : JSON.stringify({
                contestant_id,
                route_id,
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

document.addEventListener('DOMContentLoaded', initForm);