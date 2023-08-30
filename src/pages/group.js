import React from "react";

function Group() { 
    const GroupInfo = {
        name: "The Beatles",
        members: [
            "John Lennon,",
            "Paul McCartney,", 
            "George Harrison,", 
            "Ringo Starr"
        ],
        origin: "Liverpool, England",
        genres: [
            "Rock /",
            "Pop /",
            "Beat /",
            "Psychedelia"
        ],
        years: "1960-1970",
        Labels: [
            "Parlophone",
            "Apple",
            "Capitol"
        ],
        topAlbums: [
            {title: "«Sgt. Pepper’s Lonely Hearts Club Band» (1967)", cover: "ClubBand.jpg"},
            {title: "«Abbey Road» (1969)", cover: "Abbey.jpg"},
            {title: "«Revolver» (1966)", cover: "Revolver.jpg"}
        ],
    }
    return (
        <div>
            <img src = "TheBeatles.jpg"></img>
            <h1>{GroupInfo.name}</h1>
            <p>Members: {GroupInfo.members}</p>
            <p>Origin: {GroupInfo.origin}</p>
            <p>Genres: {GroupInfo.genres}</p>
            <p>Active Years: {GroupInfo.years}</p>
            <ul>
            {GroupInfo.topAlbums.map((album) => (
              <li key={album.title}>
                <h3>{album.title}</h3>
                <img src={album.cover} style={{width: "300px"}}></img>
              </li>  
            ))}               
            </ul>
        </div>
    )
}
export default Group;