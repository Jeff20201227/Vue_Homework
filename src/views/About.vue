<template>
  <Layout>
    <h1>Учебная работа по Vue</h1>
    <Button title="Auth" @onClick="openModelAuth" width="300px" />
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import Button from "@/components/ui/Button.vue";

export default {
  name: "About",
  components: {
    Layout,
    Button,
  },
  methods: {
    openModelAuth() {
      this.$modal.show({
        title: "Авторизация... вроде работает.",
        content: "Auth",
      });
    },
  },
};
</script>

<style scoped lang="scss"></style>
