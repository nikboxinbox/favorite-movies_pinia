<template>
  <div class="movie">
    <img :src="movie.posterUrl" :alt="movie.nameOriginal" class="movie-img" />
    <div>
      <div class="movie-name">{{ movie.nameOriginal }} ({{ movie.year }})</div>
      <span class="movie-overview">{{ movie.nameRu }}</span>
      <div class="movie-buttons" v-if="!isSearch">
        <button
          class="btn movie-buttons-watched"
          @click="movieStore.toggleWatched(movie.kinopoiskId)"
        >
          <span v-if="!movie.isWatched">Watched</span>
          <span v-else>Unwatched</span>
        </button>
        <button
          class="btn movie-buttons-delete"
          @click="movieStore.deleteMovie(movie.kinopoiskId)"
        >
          Delete
        </button>
      </div>
      <div class="movie-buttons" v-if="isSearch">
        <button
          class="btn_green_add"
          @click="searchStore.addToUserMovies(movie)"
        >
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMovieStore } from "../stores/MovieStore";
import { useSearchStore } from "../stores/SearchStore";

const movieStore = useMovieStore();
const searchStore = useSearchStore();
const props = defineProps({
  movie: {
    type: Object,
    required: true,
    default: () => {},
  },
  isSearch: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style lang="css" scoped>
.movie {
  display: grid;
  grid-template-columns: 200px 1fr;
  column-gap: 30px;
  margin-bottom: 20px;
  border: 2px solid #efefef;
  padding: 10px;
  border-radius: 10px;
}
.movie-accept {
  margin-right: 10px;
}
.movie-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
}
.movie-name {
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 20px;
}
.movie-overview {
  display: block;
  margin-bottom: 20px;
}
.movie-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}
.movie-buttons-watched {
  color: #fff;
  background: #1eb4c3;
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
}
.movie-buttons-watched__icon {
  width: 15px;
  margin-left: 10px;
}
.movie-buttons-delete {
  color: #fff;
  background: #ff2a2a;
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
}
.btn:hover {
  opacity: 0.7;
}

.btn_green_add {
  background: #37df5c;
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  /* background: #efefef; */
}
.btn_green_add:hover {
  opacity: 0.7;
}
</style>
