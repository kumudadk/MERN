// MovieList.js
import React from "react";
import Card from "./Card";

const movieData = [
  {
    imgSrc:
      "https://i.pinimg.com/736x/0c/4f/8f/0c4f8fe58a8f06bdd7e63550aa7bf338.jpg",
    title: "AVATAR",
    text: "NETFLIX MOVIE",
  },
  {
    imgSrc:
      "https://m.media-amazon.com/images/M/MV5BNzRjMjhmZmUtYjRhNS00YjlmLWI4MzUtMDFhM2E0MjAyZGRjXkEyXkFqcGdeQXVyMTEwNDM0NTI2._V1_.jpg",
    title: "THANDAV",
    text: "NETFLIX MOVIE",
  },
  {
    imgSrc:
      "https://i.insider.com/5ca3d2b892c8866e8b4618d9?width=750&format=jpeg&auto=webp",
    title: "AVENGER ENDGAME",
    text: "NETFLIX MOVIE",
  },
  {
    imgSrc:
      "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
    title: "IRON MAN 3",
    text: "NETFLIX MOVIE",
  },
  // Add more movie entries as needed
];

export { movieData }; // Export the movieData variable

const MovieList = () => {
  return (
    <div className="movie-list">
      {movieData.map((movie, index) => (
        <Card key={index} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;
