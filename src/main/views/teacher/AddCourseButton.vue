<template>
  <div>
    <!--FIXME: 应该用submit吗-->
    <button type="submit">
      <i class="material-icons" @click="open">add</i>
    </button>
    <div id="bg" v-bind:style="{ display: block }">
      <div id="content" v-bind:style="{ display: block }">
        <form>
          <label>
            添加课程：
            <input type="text" v-model="course.name" />
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
import { postCourse } from "@/main/api/Main";
export default {
  data: () => ({
    block: "none",
    course: { name: null }
  }),
  methods: {
    open() {
      this.block = "block";
    },
    close() {
      this.block = "none";
    },
    add() {
      postCourse({ course: this.course });
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
