<template>
  <Layout>
    <h1 class="heading">Мои финансы</h1>
    <Button title="Добавить Платеж" @onClick="openModalPayment" width="300px" />
    <PaymentsDisplay />
  </Layout>
</template>

<script>
import PaymentsDisplay from "@/components/entity/PaymentsDisplay";
import Layout from "@/components/Layout";
import { mapActions } from "vuex";
import Button from "@/components/ui/Button.vue";

export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    Layout,
    Button,
  },
  methods: {
    ...mapActions({
      fetchPaymentList: "getPaymentListFromAPI",
    }),
    openModalPayment() {
      this.$modal.show({
        title: "Добавить форму платежа",
        content: "AddPaymentForm",
      });
    },
  },
  created() {
    this.fetchPaymentList(1);
    if (this.$route.path.split("/")[1] === "add") {
      this.$modal.show({
        title: "Добавить форму платежа",
        content: "AddPaymentForm",
      });
    }
  },
};
</script>

<style scoped lang="scss"></style>
