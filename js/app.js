const allPlayers = () => {
    // clear previous div 
    document.getElementById('player-container').textContent = '';
    // add spinner
    document.getElementById('spinner').style.display = "block"

    // main part of the function
    const searchValue = document.getElementById('search-box').value;
    // console.log(searchValue);


    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => showPlayerDetails(data.player))
    document.getElementById('spinner').style.display = 'block'
};

const showPlayerDetails = (players) => {
    // clear Input field
    document.getElementById('search-box').value = '';

    // stop spinner
    document.getElementById('spinner').style.display = 'none'
    /* if(players){
data load na hole spinner cholte thakbe
    } */

    // main part of function
    const threePlayers = players.slice(0, 3);
    // console.log(threePlayers);
    const parent = document.getElementById('player-container')

    for (const player of threePlayers) {
        // console.log(player);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
                        <img src="${player.strThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${player.strPlayer}</h5>
                            <h6>${player.strNationality}</h6>
                            <p class="card-text"></p>
                            <button class="btn btn-danger">Delete</button>
                            <button onclick="details('${player.idPlayer}')" class="btn btn-success">Details</button>
                        </div>
                    </div>
        `
        parent.appendChild(div);
    }
}

const details = (pId) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${pId}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data.players[0]))
}

const setDetails = (info) => {
    console.log(info)
    if (info.strGender == "Male") {
        document.getElementById('male').style.display = "block"
        document.getElementById('female').style.display = "none"

    } else {
        document.getElementById('female').style.display = "block"
        document.getElementById('male').style.display = "none"

    }

    const containerDiv = document.getElementById('details-container');
    containerDiv.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="" alt="">
    <h3>Name: ${info.strPlayer}</h3>
    <h5>Date Of Birth: ${info.dateBorn}</h5 >
        <p>Weight: ${info.strWeight}</p>

    `
    containerDiv.appendChild(div);
}

