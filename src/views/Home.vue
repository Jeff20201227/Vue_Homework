<template>
  <Layout>
    <h1>Финансовый Помощник</h1>
    <AddPaymentForm @addNewPayment="addNewPayment" />
    <PaymentsDisplay :items="paymentList" />
  </Layout>
</template>

<script>
// @ is an alias to /src
import PaymentsDisplay from "@/components/entity/PaymentsDisplay";
import AddPaymentForm from "@/components/entity/AddPaymentForm";
import Layout from "@/components/Layout";

export default {
  name: "Home",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Layout,
  },
  data() {
    return {
      paymentList: [],
    };
  },
  methods: {
    fetchData() {
      return [];
    },
    addNewPayment(data) {
      this.paymentList = [...this.paymentList, data];
    },
  },
  created() {
    this.paymentList = this.fetchData();
  },
};
</script>
