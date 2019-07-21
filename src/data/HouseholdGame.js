// Lodash
import shuffle from "lodash/shuffle";
// Mp.3 sounds
import sound1 from "../sounds/1.mp3";
import sound2 from "../sounds/2.mp3";
import sound3 from "../sounds/3.mp3";
import sound4 from "../sounds/4.mp3";

// Sound data
export const GameSounds = shuffle([
  {
    id: "cat1",
    dopeSound: sound1
  },
  {
    id: "cat2",
    dopeSound: sound2
  },
  {
    id: "cat3",
    dopeSound: sound3
  },
  {
    id: "cat4",
    dopeSound: sound4
  }
]);

// Image data
export const GameTiles = [
  {
    id: "cat1",
    picture: "http://lorempixel.com/150/150/cats/",
    alt: "pic1"
  },
  {
    id: "cat2",
    picture: "http://lorempixel.com/150/150/sports/",
    alt: "pic2"
  },
  {
    id: "cat3",
    picture: "http://lorempixel.com/150/150/nature/",
    alt: "pic3"
  },
  {
    id: "cat4",
    picture: "http://lorempixel.com/150/150/people/",
    alt: "pic4"
  }
];
