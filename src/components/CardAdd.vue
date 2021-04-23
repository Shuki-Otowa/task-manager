<template>
  <form :class="classList" @submit.prevent="addCardToList">
    <input
      v-model="todo"
      required
      type="text"
      class="text-input"
      placeholder="タスクを追加"
      @focusin="startEditing"
      @focusout="finishEditing"
    />
  </form>
</template>

<script>
export default {
  props: {
    listIndex: {
      type: Number,
      required: true,
    },
  },
  data: function () {
    return {
      todo: "",
      isEditing: false,
    };
  },
  computed: {
    classList() {
      const classList = ["addCard"];
      if (this.isEditing) {
        classList.push("active");
      }
      return classList;
    },
  },
  methods: {
    startEditing() {
      this.isEditing = true;
    },
    finishEditing() {
      this.isEditing = false;
    },
    addCardToList() {
      this.$store.dispatch("addCardToList", {
        todo: this.todo,
        listIndex: this.listIndex,
      });
      this.todo = "";
    },

  },
};
</script>

<style>
.text-input {
  padding: 30px 15px;
  margin-bottom: 10px;
  width: 290px;
  background-color: #ccc;
  border-radius: 8px;
  cursor: text;
  border: none;
  -webkit-transition: 0.3s ease-in-out;
  -moz-transition: 0.3s ease-in-out;
  -o-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  letter-spacing: 5px;
}
.text-input:hover {
  background-color: #fff;
}

.text-input:focus {
  outline: none;
  cursor: initial;
}

.active .text-input {
  background-color: #fff;
}
</style>