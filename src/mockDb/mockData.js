const mediaItems = [
  {
    id: 1,
    title: "Interstellar",
    directorId: 1,
    slug: "Interstellar",
    format: "Blu-ray",
  },
  {
    id: 2,
    title: "Inception",
    directorId: 1,
    slug: "Inception",
    format: "Blu-ray",
  },
  {
    id: 3,
    title: "Ready Player One",
    directorId: 2,
    slug: "Ready Player One",
    format: "Digital",
  },
];

const directors = [
  { id: 1, name: "Christopher Nolan", slug: "Christopher Nolan" },
  { id: 2, name: "Steven Spielberg", slug: "Steven Spielberg" },
];

const newMediaItem = {
  id: null,
  title: "",
  directorId: null,
  format: "",
};

const newDirector = {
  id: null,
  name: "",
};

module.exports = {
  newMediaItem,
  mediaItems,
  directors,
  newDirector,
};
