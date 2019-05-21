<template>
  <div>
    <button type="submit">
      <i class="material-icons" @click="open">add</i>
    </button>
    <div id="bg" v-bind:style="{ display: block }">
      <div id="content" v-bind:style="{ display: block }">
        <form>
          <label>
            题目：
            <input type="text" v-model="homework.title" />
            <br />
          </label>
          <label>
            截止时间：
            <input type="text" v-model="homework.deadLineTime" />
            <br />
          </label>
          <label>
            内容：
            <textarea v-model="homework.content"></textarea>
          </label>
          <br />
          <button>
            <i class="material-icons" @click="add">check</i>
          </button>
        </form>
        <p style="text-align:right">
          <i class="material-icons" @click="close">close</i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { postHomework } from "@/main/api/Main";
export default {
  data: () => ({
    block: "none",
    homework: {
      title: null,
      content: null,
      deadLineTime: null,
      course: { id: null }
    }
  }),
  methods: {
    open() {
      this.block = "block";
    },
    close() {
      this.block = "none";
    },
    add() {
      this.homework.course.id = this.$route.params.cid;
      console.log(this.homework);
      postHomework({ homework: this.homework, cid: this.$route.params.cid });
      this.close();
    }
  }
};
</script>

<style scoped>
#bg {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgb(56, 56, 56);
  z-index: 2;
  top: 0;
  left: 0;
}
#content {
  padding: 5px;
  text-align: left;
  display: none;
  width: 500px;
  position: fixed;
  top: 20%;
  background: #fff;
  z-index: 3;
  left: 50%;
  transform: translateX(-50%);
}
</style>
