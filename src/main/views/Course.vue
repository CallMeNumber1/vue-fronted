<template>
  <div>
    <h1>{{ course.name }}</h1>
    <div>
      <button>
        显示所有作业
        <router-link :to="`/courses/${cid}/homeworks`">
          <i class="material-icons">build</i>
        </router-link>
      </button>
      <button>
        无用按钮：
        <i class="material-icons">group_add</i>
      </button>
    </div>
    <div id="content">
      <router-view :key="$router.path"></router-view>
    </div>
  </div>
</template>

<script>
import bus from "@/util/Bus";
import { getCourse } from "@/main/api/Main";
export default {
  // TODO:???意思是把cid传到子组件吗？
  props: ["cid"],
  data: () => ({
    course: { name: null, insertTime: null }
  }),
  created() {
    getCourse({ cid: this.cid });
    bus.$on(bus.course, data => {
      this.course = data;
    });
  }
};
</script>

<style scoped>
#content {
  border: 1px solid red;
}
</style>
