<template>
  <div class="app-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <h1>Observabilidad</h1>

      <nav class="primary-nav">
        <button class="nav-btn active">Dashboard</button>
        <button class="nav-btn">Servicios</button>
        <button class="nav-btn">Incidentes</button>
      </nav>

      <div class="sub-nav">
        <span class="sub-link">Logs</span>
        <span class="sub-link">Alertas</span>
      </div>
    </aside>

    <!-- Content -->
    <div class="content">
      <!-- Top bar environments -->
      <header class="topbar">
        <div class="env-badge prod">PRODUCCIÓN 🔴</div>
        <div class="env-badge qa">QA 🟡</div>
        <div class="env-badge dev">DEV 🟢</div>
        <div class="user">👤 Johnatan</div>
      </header>

      <!-- Dashboard -->
      <main class="dashboard-container">
        <h1>Plataforma de Observabilidad</h1>
        <p class="subtitle">Monitoreo y gestión de servicios críticos</p>

        <section>
          <h2>Service Status</h2>
          <div class="cards">
            <div class="card ok"><span>API ✅</span></div>
            <div class="card ok"><span>DB ✅</span></div>
            <div class="card warn"><span>Cache ⚠️</span></div>
          </div>
        </section>

        <section>
          <h2>Incidentes</h2>
          <button class="btn" @click="createIncident">➕ Crear incidente</button>

          <ul class="incident-list">
            <li v-for="inc in incidents" :key="inc.id">
              <strong>{{ inc.title }}</strong> —
              <span class="status" :class="inc.status">
                {{ formatStatus(inc.status) }}
              </span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      incidents: [
        { id: 1, title: 'Errores en API', status: 'open' },
        { id: 2, title: 'Lentitud en BBDD', status: 'inprogress' },
        { id: 3, title: 'Jobs en cola', status: 'resolved' },
      ],
    }
  },
  methods: {
    createIncident() {
      alert('Crear incidente (pendiente conectar backend)')
    },
    formatStatus(st) {
      const map = {
        open: 'Open',
        inprogress: 'In Progress',
        resolved: 'Resolved',
      }
      return map[st]
    },
  },
}
</script>

<style scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
  background: #f0f2f5;
  font-family: 'Inter', Arial, sans-serif;
}

/* Sidebar */
.sidebar {
  width: 240px;
  background: #0f172a;
  color: white;
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.primary-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-btn {
  padding: 10px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: #cbd5e1;
  cursor: pointer;
  text-align: left;
  transition: 0.2s;
}

.nav-btn:hover,
.nav-btn.active {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}

.sub-nav {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
  color: #94a3b8;
}

.sub-link:hover {
  color: white;
}

/* Content */
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Topbar */
.topbar {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  padding: 14px;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
}

/* Dashboard */
.dashboard-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 180px);
  gap: 16px;
  margin-bottom: 28px;
}

.card {
  padding: 16px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  font-weight: 600;
  color: white;
}
.card.ok {
  background: #16a34a;
}
.card.warn {
  background: #eab308;
}

/* Buttons */
.btn {
  background: #2563eb;
  padding: 10px 18px;
  border-radius: 8px;
  border: none;
  color: white;
  cursor: pointer;
  margin-bottom: 20px;
}
.btn:hover {
  background: #1e40af;
}

/* Status chips */
.status.open {
  color: #dc2626;
}
.status.inprogress {
  color: #d97706;
}
.status.resolved {
  color: #16a34a;
}

/* Env tags */
.env-badge {
  font-size: 13px;
  padding: 6px 12px;
  border-radius: 6px;
  font-weight: bold;
}
.env-badge.prod {
  background: #fee2e2;
  color: #b91c1c;
}
.env-badge.qa {
  background: #fef9c3;
  color: #ca8a04;
}
.env-badge.dev {
  background: #dcfce7;
  color: #15803d;
}

.user {
  font-weight: 600;
}
/* Asegura que el topbar no quede separado del content */
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #f8fafc;
}

/* Espacio superior en el dashboard */
.dashboard-container {
  margin-top: 20px;
}

/* Sidebar mejor contraste */
.sidebar {
  background: #0b1220;
}

/* Topbar alineado a la izquierda con respiro */
.topbar {
  padding: 12px 20px;
  gap: 12px;
}

/* Botones de ambiente compactos */
.env-badge {
  font-size: 12px;
  padding: 5px 10px;
}

/* Usuario más elegante */
.user {
  font-weight: 600;
  color: #1e293b;
  background: #e0f2fe;
  padding: 6px 10px;
  border-radius: 6px;
}
</style>
