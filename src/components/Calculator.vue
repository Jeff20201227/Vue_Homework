<template>
  <div>
    <div class="display">
      <input
        type="number"
        v-model.number="op1"
        class="input"
        @focus="checkedOp = 'op1'"
      />
      <input
        type="number"
        v-model.number="op2"
        class="input"
        @focus="checkedOp = 'op2'"
      />
      <span>= {{ result }}</span>
    </div>
    <div class="operands">
      <button
        v-for="(operand, idx) in operands"
        :key="idx"
        @click="calculate(operand)"
        class="btn"
      >
        {{ operand }}
      </button>
    </div>
    <p class="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      op1: 0,
      op2: 0,
      checkedOp: "",
      result: 0,
      error: "",
      operands: ["+", "-", "/", "*", "x^y", "%"],
      checked: false,
    };
  },
  methods: {
    calculate(action) {
      this.error = "";
      switch (action) {
        case "+":
          return this.getSum();
        case "-":
          return this.getDiff();
        case "/":
          if (this.validate()) {
            return this.getDiv();
          }
          break;
        case "*":
          return this.getMulti();
        case "x^y":
          return this.getPow();
        case "%":
          if (this.validate()) {
            return this.getIntDiv();
          }
          break;
      }
    },
    getSum() {
      return (this.result = this.op1 + this.op2);
    },
    getDiff() {
      return (this.result = this.op1 - this.op2);
    },
    getDiv() {
      return (this.result = this.op1 / this.op2);
    },
    getMulti() {
      return (this.result = this.op1 * this.op2);
    },
    getPow() {
      return (this.result = Math.pow(this.op1, this.op2));
    },
    getIntDiv() {
      return (this.result = parseInt(this.op1 / this.op2));
    },
    validate() {
      if (this.op2 === 0) {
        this.error = "Нельзя делить на ноль";
        return false;
      } else return true;
    },
    focusOperand(e) {
      if (e.target.value === "op1") {
        this.$els.inputOp1.focus();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn {
  width: 50px;
  height: 40px;
  margin: 10px;
  padding: 5px;
}
.error {
  color: red;
}
.input {
  margin: 5px;
}
</style>
