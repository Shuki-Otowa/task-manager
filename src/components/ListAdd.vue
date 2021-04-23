<template>
  <form :class="classList" @submit.prevent="addList">
    <div class="input-a">
      <input
        v-model="title"
        required
        type="text"
        class="list-text-input"
        placeholder="+リストを追加"
        @focusin="startEditing"
        @focusout="finishEditing"
        @click="addNewList"
      />
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      title: "",
      listTitle: "",
      isEditing: false,
    };
  },
  computed: {
    classList() {
      const classList = ["addList"];
      if (this.isEditing) {
        classList.push("active");
      }
      return classList;
    },
  },
  methods: {
    addNewList() {
      axios
        .post(
          "https://firestore.googleapis.com/v1/projects/task-manager-70bcb/databases/(default)/documents/title",
          {
            fields: {
              listTitle: {
                stringValue: this.listTitle,
              },
            },
          }
        )
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
      this.title = "";
    },
    addList: function () {
      this.$store.dispatch("addList", { title: this.title });
      this.title = "";
    },
    startEditing() {
      this.isEditing = true;
    },
    finishEditing() {
      this.isEditing = false;
    },
  },
};
</script>

<style>
.list-text-input {
  padding: 25px 15px;
  width: 320px;
  background-color: #ccc;
  border-radius: 8px;
  cursor: text;
  border: none;
  margin: 0 20px 50px 10px;
  -webkit-transition: 0.3s ease-in-out;
  -moz-transition: 0.3s ease-in-out;
  -o-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  letter-spacing: 5px;
}

.list-text-input:hover {
  background-color: #fff;
}

.list-text-input:focus {
  outline: none;
  cursor: initial;
}

.active .list-text-input {
  background-color: #fff;
}
</style>