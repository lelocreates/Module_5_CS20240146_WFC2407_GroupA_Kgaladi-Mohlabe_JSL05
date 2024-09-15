// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax" : "R&B",
    "Rocket" : "Rock",
    "Groot" : "Pop",
};

//function generates a playlist for each guardian according to their favorite genre 
function generatePlaylist(guardians, songs) {
    // Use Object.keys to map over each guardian and their preferred genre
    const playlists = Object.keys(guardians).map(guardian => {
        const preferredGenre = guardians[guardian]; 
        // get the guardian's preferred genre from the Guardians and assigns to the preferredGenre variable
        const guardianSongs = songs.filter(song => song.genre === preferredGenre); // filter songs based on genre
        
        // the function returns a playlist string for each guardian according their favorite genre
        return `
            <div class="playlist">
                <h2>${guardian}'s Playlist</h2>
                ${guardianSongs.map(song => `${song.title} by ${song.artist}`).join('<br>')}
            </div>
        `;
    });
    
    // Append playlists to the DOM so that the playlists are displayed
    document.getElementById("playlists").innerHTML = playlists.join("");
}

// Call the function
generatePlaylist(guardians, songs);

