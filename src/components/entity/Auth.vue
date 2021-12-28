<template>
  <div class="contentAuth">
    <label>
      Логин
      <input type="text" />
    </label>
    <label>
      Пароль
      <input type="text" />
    </label>
  </div>
</template>

<script>
export default {
  name: "Auth",
};
</script>

<style scoped lang="scss">
label {
  text-align: left;
}
input {
  margin: 15px 0;
  padding: 10px;
  box-sizing: border-box;
}
</style>
