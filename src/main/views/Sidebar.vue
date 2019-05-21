<template>
  <div>
    <ul>
      课程
      <li v-for="(c, index) in courses" :key="index">
        <router-link :to="`/courses/${c.id}`">{{ c.name }}</router-link>
      </li>
    </ul>
    <addcoursebutton v-if="isAdmin" />
  </div>
</template>

<script>
import bus from "@/util/Bus";
export default {
  components: { addcoursebutton: () => import("./teacher/AddCourseButton") },
  data: () => ({
    isAdmin: false,
    courses: [{ id: null, name: null }]
  }),
  created() {
    bus.$on(bus.courses, data => {
      this.courses = data;
    });
    bus.$on(bus.isAdmin, data => {
      this.isAdmin = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.courses);
  }
};
</script>

<style></style>
