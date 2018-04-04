async function initRoutes(event){
        fetch('/routes', {
            method : 'GET',
        })
            .then(r => r.json())
            .then(routes => {
                showRoutes(routes);
        });
}

async function showRoutes(routes){
    
    const routesDiv = document.getElementById('routes');
    
    const table = document.createElement('table');
    addHeaderToTable(table);
    routes.forEach(route => addRouteToTable(route, table));
    routesDiv.appendChild(table);
}

async function addRouteToTable(route, table){
    
    const tableRow = document.createElement('tr');
    
    const numberData = document.createElement('td');
    const nameData = document.createElement('td');
    const pointsData = document.createElement('td');
    
    numberData.innerText = route.id;
    nameData.innerText = route.name;
    pointsData.innerText = route.points + " pkt.";
    
    tableRow.appendChild(numberData);
    tableRow.appendChild(nameData);
    tableRow.appendChild(pointsData);
    
    table.appendChild(tableRow);
}

async function addRoutesHeader(table){
    
    const tableRow = document.createElement('tr');
    
    const numberData = document.createElement('td');
    const nameData = document.createElement('td');
    const pointsData = document.createElement('td');
    
    numberData.innerText = "Numer";
    nameData.innerText = "Nazwa";
    pointsData.innerText = "Punkty";
    
    tableRow.appendChild(numberData);
    tableRow.appendChild(nameData);
    tableRow.appendChild(pointsData);
    
    table.appendChild(tableRow);
}

document.addEventListener('DOMContentLoaded', initRoutes);