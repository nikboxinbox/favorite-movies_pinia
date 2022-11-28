import { defineStore } from "pinia";
export const useMovieStore = defineStore("movieStore", {
  state: () => ({
    movies: [
      {
        kinopoiskId: 961694,
        imdbId: "tt5371572",
        nameRu: "LEGO Супергерои Marvel: Мстители. Снова в сборе",
        nameEn: null,
        nameOriginal: "Lego Marvel Super Heroes: Avengers Reassembled",
        countries: [
          {
            country: "США",
          },
        ],
        genres: [
          {
            genre: "фантастика",
          },
          {
            genre: "приключения",
          },
          {
            genre: "боевик",
          },
          {
            genre: "комедия",
          },
          {
            genre: "мультфильм",
          },
          {
            genre: "семейный",
          },
        ],
        ratingKinopoisk: 9.1,
        ratingImdb: 6.1,
        year: 2015,
        type: "FILM",
        posterUrl:
          "https://kinopoiskapiunofficial.tech/images/posters/kp/961694.jpg",
        posterUrlPreview:
          "https://kinopoiskapiunofficial.tech/images/posters/kp_small/961694.jpg",
        isWatched: true,
      },
      //   {
      //     kinopoiskId: 2,
      //     original_title: "The Batman",
      //     overview:
      //       "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
      //     poster_path: "/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
      //     release_date: "2022-03-01",
      //     isWatched: true,
      //   },
    ],
    activeTab: 1,
  }),
  getters: {
    watchedMovies() {
      return this.movies.filter((el) => el.isWatched);
    },
    totalCountMovies() {
      return this.movies.length;
    },
  },
  actions: {
    setActiveTab(id) {
      this.activeTab = id;
    },
    toggleWatched(id) {
      const idx = this.movies.findIndex((el) => el.kinopoiskId === id);
      this.movies[idx].isWatched = !this.movies[idx].isWatched;
    },
    deleteMovie(id) {
      this.movies = this.movies.filter((el) => el.kinopoiskId !== id);
    },
  },
});
