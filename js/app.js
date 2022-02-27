const allPlayers = () => {
    const searchValue = document.getElementById('search-box').value;
    // console.log(searchValue);

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => showPlayerDetails(data.player))
}

const showPlayerDetails = (players) => {
    const parent = document.getElementById('player-container')
    players.forEach(player => {
        console.log(player);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
                        <img src="${player.strThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${player.strPlayer}</h5>
                            <h6>${player.strNationality}</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <button class="btn btn-danger">Delete</button>
                            <button class="btn btn-success">Details</button>
                        </div>
                    </div>
        `
        parent.appendChild(div);
    });


}