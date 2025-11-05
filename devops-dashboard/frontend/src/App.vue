<template>
  <div class="dashboard">
    <h1>DevOps Dashboard</h1>

    <section>
      <h2>Service Status</h2>
      <div class="cards">
        <div class="card ok">API ✅</div>
        <div class="card ok">DB ✅</div>
        <div class="card warn">Cache ⚠️</div>
      </div>
    </section>

    <section>
      <h2>Incidentes</h2>
      <button @click="createIncident">➕ Crear incidente</button>
      <ul>
        <li v-for="inc in incidents" :key="inc.id">{{ inc.title }} — {{ inc.status }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      incidents: [
        { id: 1, title: 'Errores en API', status: 'Open' },
        { id: 2, title: 'Lentitud en BBDD', status: 'In Progress' },
      ],
    }
  },
  methods: {
    createIncident() {
      alert('Crear incidente (más adelante lo conectamos al backend)')
    },
  },
}
</script>

<style scoped>
.dashboard {
  padding: 20px;
  font-family: sans-serif;
}

.cards {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.card {
  padding: 12px 18px;
  border-radius: 8px;
  font-weight: bold;
  color: white;
}

.card.ok {
  background: #2ecc71;
}
.card.warn {
  background: #f1c40f;
}
.card.err {
  background: #e74c3c;
}

button {
  background: #42b983;
  border: none;
  padding: 10px 15px;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background: #36966b;
}
</style>
