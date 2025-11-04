<script setup lang="ts"></script>

<template>
  <div>
    <h1>Probando librería Vue</h1>
    <MyButton @click="handleClick">Haz clic</MyButton>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      alert('Botón funcionando!')
    },
  },
}
</script>

<style scoped></style>
