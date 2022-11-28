import { defineStore } from "pinia";
import { useMovieStore } from "./MovieStore";

export const useSearchStore = defineStore("searchStore", {
  state: () => ({
    movies: [],
    loader: false,
  }),
  actions: {
    async getMovies(searchStr) {
      this.loader = true;
      const res = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/?keyword=${searchStr}`,
        {
          method: "GET",
          headers: {
            "X-API-KEY": "2f850ef5-800f-4801-b160-c3493c610dac",
            "Content-Type": "application/json",
          },
        }
      ).catch((err) => console.log(err));
      const data = await res.json();
      console.log(data.items);
      this.movies = await data.items;
      this.loader = false;
    },
    addToUserMovies(obj) {
      const movieStore = useMovieStore();
      movieStore.movies.push({ ...obj, isWatched: false });
      movieStore.activeTab = 1;
    },
  },
});
