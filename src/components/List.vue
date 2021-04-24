<template>
  <div class="list">
    <div class="listheader">
      <p class="list-counter">{{ totalCardInList }}</p>
      <p class="list-title">{{ title }}</p>
    </div>
    <div class="deletelist" @click="removeList">
      <v-icon large class="delete-icon">mdi-close-box</v-icon>
    </div>
    <draggable group="cards" :list="cards" @end="$emit('change')">
      <card
        v-for="(item, index) in cards"
        :todo="item.todo"
        :key="item.id"
        :cardIndex="index"
        :listIndex="listIndex"
      ></card>
    </draggable>
    <card-add :listIndex="listIndex"></card-add>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import CardAdd from "./CardAdd";
import Card from "./Card";

export default {
  components: {
    draggable,
    CardAdd,
    Card,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    cards: {
      type: Array,
      required: true,
    },
    listIndex: {
      type: Number,
      required: true,
    },
  },
  computed: {
    totalCardInList() {
      return this.cards.length;
    },
  },
  methods: {
    removeList: function () {
      if (confirm("このリストを削除しますか？")) {
        this.$store.dispatch("removeList", { listIndex: this.listIndex });
      }
    },
  },
};
</script>
<style>
.list {
  margin: 0 10px;
  margin-bottom: 200px;
  position: relative;
  min-width: 320px;
  width: 320px;
  background-color: #f0f0f0;
  border-radius: 18px;
  padding: 15px;
  -webkit-transition: 0.3s ease-in-out;
  -moz-transition: 0.3s ease-in-out;
  -o-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}

.list:hover {
  transform: translateY(-5px);
}

.listheader {
  text-align: center;
  width: 100%;
  word-wrap: break-word;
}

.list-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.list-counter {
  padding-left: 5px;
  background-color: orange;
  width: 27px;
  height: 27px;
  border-radius: 4px;
  color: #f0f0f0;
  font-size: 18px;
  font-weight: bold;
  cursor: default;
}

.deletelist {
  position: absolute;
  top: 11px;
  right: 11px;
}

.delete-icon:hover {
  cursor: pointer;
  transform: rotate(180deg);
  color: red;
}
</style>