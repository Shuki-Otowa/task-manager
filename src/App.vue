<template>
  <div id="app">
    <Board />
  </div>
</template>

<script>
import Board from "./components/Board.vue";

export default {
  name: "App",
  components: {
    Board,
  },
};
</script>

<style>
html {
  background-color: #67bf5a;
  font-family: "TsukuARdGothic-Regular","ヒラギノ角ゴシック",
    "Hiragino Sans", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3",
    "Arial Rounded MT Bold", "Arial", "Arial Black", "Osaka", YuGothic,
    "Yu Gothic", "Meiryo UI", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  letter-spacing: 5px;
  color: #333;
}
</style>
