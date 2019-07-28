// Mp.3 sounds
import acoustic_guitar from "../sounds/acoustic_guitar.mp3";
import bass_guitar from "../sounds/bass_guitar.mp3";
import clarinet from "../sounds/clarinet.mp3";
import double_bass from "../sounds/double_bass.mp3";
import electric_guitar_clean from "../sounds/electric_guitar_clean.mp3";
import electric_guitar_overdrive from "../sounds/electric_guitar_overdrive.mp3";
import harmonica from "../sounds/harmonica.mp3";
import harp from "../sounds/harp.mp3";
import piano from "../sounds/piano.mp3";
import tenor_saxophone from "../sounds/tenor_saxophone.mp3";
import trumpet from "../sounds/trumpet.mp3";
import violin from "../sounds/violin.mp3";

// Sound data
export const GameSounds = [
  {
    id: "acoustic guitar",
    gameSound: acoustic_guitar
  },
  {
    id: "bass guitar",
    gameSound: bass_guitar
  },
  {
    id: "clarinet",
    gameSound: clarinet
  },
  {
    id: "double bass",
    gameSound: double_bass
  },
  {
    id: "electric guitar (clean)",
    gameSound: electric_guitar_clean
  },
  {
    id: "electric guitar (overdrive)",
    gameSound: electric_guitar_overdrive
  },
  {
    id: "harmonica",
    gameSound: harmonica
  },
  {
    id: "harp",
    gameSound: harp
  },
  {
    id: "piano",
    gameSound: piano
  },
  {
    id: "tenor saxophone",
    gameSound: tenor_saxophone
  },
  {
    id: "trumpet",
    gameSound: trumpet
  },
  {
    id: "violin",
    gameSound: violin
  }
];

// Only the IDs
export const GameTiles = GameSounds.map(value => value.id);
