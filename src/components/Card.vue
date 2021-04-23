<template>
  <div class="card">
    <button class="close-button" @click="removeCardFromList">
      <v-icon class="delete-icon">mdi-close-circle</v-icon>
    </button>
    <div class="todo">
      {{ todo }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: String,
      required: true,
    },
    listIndex: {
      type: Number,
      required: true,
    },
    cardIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    removeCardFromList() {
      if (confirm("このカードを削除しますか？")) {
        this.$store.dispatch("removeCardFromList", {
          cardIndex: this.cardIndex,
          listIndex: this.listIndex,
        });
      }
    },
  },
};
</script>

<style>
.card {
  margin-bottom: 15px;
  position: relative;
  padding: 30px 15px;
  background-color: #fff;
  border-radius: 8px;
}

.close-button {
  position: absolute;
  top: 7px;
  right: 5px;
  cursor: pointer;
  outline: none;
}

.delete-icon:hover {
  cursor: pointer;
  color: red;
}

.todo {
  margin: 0 auto;
  width: 100%;
  word-wrap: break-word;
}
</style> 