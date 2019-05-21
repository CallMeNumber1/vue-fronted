<template>
  <div>
    添加作业：
    <addHomework />
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>题目</th>
          <th>内容</th>
          <th>截止</th>
          <th>发布</th>
        </tr>
      </thead>
      <tr v-for="(h, index) in homeworks" :key="index">
        <td>{{ index }}</td>
        <td>{{ h.title }}</td>
        <td>{{ h.content }}</td>
        <td>{{ h.deadLineTime }}</td>
        <td>{{ h.insertTime }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { getHomeworks } from "@/main/api/Main";
import bus from "@/util/Bus";
export default {
  components: { addHomework: () => import("./teacher/AddHomeworkButton") },
  data: () => ({
    homeworks: [{ id: null, title: null, content: null, insertTime: null }]
  }),
  created() {
    getHomeworks({ cid: this.$route.params.cid });
    bus.$on(bus.homeworks, data => {
      this.homeworks = data;
    });
  }
};
</script>

<style></style>
