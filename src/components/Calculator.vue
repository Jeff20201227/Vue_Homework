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
    <label>
      <input type="checkbox" v-model="checked" />
      Отобразить экранную клавиатуру
    </label>
    <div class="keyboard" v-show="checked">
      <button
        v-for="(number, idx) in keyboard"
        :key="idx"
        v-html="number"
        @click="setValue"
        class="btn"
      ></button>
      <div>
        <label>
          <input type="radio" name="operand" value="op1" v-model="checkedOp" />
          Первый операнд
        </label>
        <label>
          <input type="radio" name="operand" value="op2" v-model="checkedOp" />
          Второй операнд
        </label>
      </div>
    </div>
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
      keyboard: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "&larr;"],
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
    setValue(e) {
      switch (this.checkedOp) {
        case "op1":
          {
            if (e.target.textContent === "←") {
              const str = this.op1.toString();
              this.op1 = str.slice(0, str.length - 1);
            } else this.op1 = +(this.op1 + e.target.textContent);
          }
          break;
        case "op2":
          {
            if (e.target.textContent === "←") {
              const str = this.op2.toString();
              this.op2 = str.slice(0, str.length - 1);
            } else this.op2 = +(this.op2 + e.target.textContent);
          }
          break;
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
