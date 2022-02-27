const allPlayers = () => {
    const searchValue = document.getElementById('search-box').value;
    // console.log(searchValue);

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => showPlayerDetails(data.player))
};

const showPlayerDetails = (players) => {

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
    // console.log(info)
    const containerDiv = document.getElementById('details-container');
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="" alt="">
    <h1>${info.strPlayer}</h1>
    `
    containerDiv.appendChild(div);
}

