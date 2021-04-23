<template>
  <div>
    <header class="header">Task Manager</header>
    <p class="info-line">現在のすべてのタスク {{ totalCardCount }}個</p>
    <main>
      <div class="list-index">
        <draggable :list="lists" class="list-index" @end="movingList">
          <list
            v-for="(item, index) in lists"
            :key="item.id"
            :title="item.title"
            :cards="item.cards"
            :listIndex="index"
            @change="movingCard"
          ></list>
          <list-add></list-add>
        </draggable>
      </div>
    </main>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import ListAdd from "./ListAdd";
import List from "./List";
import { mapState } from "vuex";

export default {
  components: {
    draggable,
    ListAdd,
    List,
  },
  computed: {
    ...mapState(["lists"]),
    totalCardCount() {
      return this.$store.getters.totalCardCount;
    },
  },
  methods: {
    movingCard: function () {
      this.$store.dispatch("updateList", { lists: this.lists });
    },
    movingList: function () {
      this.$store.dispatch("updateList", { lists: this.lists });
    },
  },
};
</script>

<style>
.header {
  font-weight: bold;
  font-size: 60px;
  text-align: left;
  padding-left: 20px;
  color: #f0f0f0;
  margin-top: 30px;
  position: sticky;
}

@media screen and (max-width: 480px) {
  .header {
    font-size: 36px;
    overflow: auto;
    margin-left: 20px;
  }
}

main {
  padding: 20px 10px;
  overflow-x: scroll;
}

.info-line {
  margin: 30px 20px;
  font-weight: bold;
  font-size: 26px;
  color: #f0f0f0;
}
@media screen and (max-width: 480px) {
  .info-line {
    padding-left: 20px;
    font-size: 18px;
  }
}

.list-index {
  display: flex;
}
</style>