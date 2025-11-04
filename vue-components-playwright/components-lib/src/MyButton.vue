<template>
  <button class="my-btn" @click="$emit('click')">
    <slot>Haz clic</slot>
  </button>
</template>

<style scoped>
.my-btn {
  padding: 12px 22px;
  background: linear-gradient(135deg, #42b983, #2c8f6a);
  border-radius: 8px;
  border: none;
  font-weight: 600;
  color: white;
  font-size: 15px;
  cursor: pointer;
  transition: 0.2s;
}
.my-btn:hover {
  background: linear-gradient(135deg, #34a86e, #227a57);
  transform: translateY(-2px);
}
.my-btn:active {
  transform: translateY(0);
}
</style>
