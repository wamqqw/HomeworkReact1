import React from "react";

function Book() {
    const BookInfo = {
        title: "Schindler's List",
        author: "Thomas Keneally",
        genre: "Biographical novel",
        pubDate: "18 October 1982",
        pages: 380,
        description: "Schindler's List is a book based on real events during World War II, telling the story of German entrepreneur Oskar Schindler.At the war's outset, he sought to profit from the occupation, but the horrors of the Holocaust led to a transformation. He decides to save over a thousand Jewish lives by using his factory as a refuge. His story has become a symbol of heroism in times of darkness.",
        facts: 'The plot of the book "Schindlers List" by Thomas Kennelly served as the basis for the creation of the film of the same name directed by Steven Spielberg, which was released in 1993. The film became incredibly popular and received numerous awards, including seven Oscars.'
    }
    return (
        <div>
            <img src = "Schindler.png" style={{maxWidth: "300px",  }}></img>
            <h1>{BookInfo.title}</h1>
            <p>Author: {BookInfo.author}</p>
            <p>Genre: {BookInfo.genre}</p>
            <p>Publication date	: {BookInfo.pubDate}</p>
            <p>Pages: {BookInfo.pages}</p>
            <p>Description: {BookInfo.description}</p>
            <p>Interesting fact:{BookInfo.facts}</p>
        </div>
    )
}

export default Book;