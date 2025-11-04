<template>
  <button class="my-btn" @click="$emit('click')">
    <slot>Mi Botón</slot>
  </button>
</template>

<style>
.my-btn {
  padding: 10px 18px;
  background: #42b983;
  color: white;
  border-radius: 6px;
  border: none;
  font-weight: 600;
  cursor: pointer;
}
</style>
