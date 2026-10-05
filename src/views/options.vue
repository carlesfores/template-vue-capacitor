<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="options-screen">
    <header class="options-screen__header">
      <RouterLink class="back-link" to="/" aria-label="Volver al inicio">
        <span aria-hidden="true">←</span>
        <span>Inicio</span>
      </RouterLink>
      <p class="eyebrow">ENTRE CARTAS</p>
      <span aria-hidden="true"></span>
    </header>

    <section class="options-screen__content">
      <p class="eyebrow">UNA TIRADA, DOS MOMENTOS</p>
      <h1 class="options-screen__title">Tu pausa,<br />a tu manera.</h1>
      <p class="options-screen__intro">
        No hay una forma correcta de leer las cartas. Toma lo que te sirva y
        deja ir lo demás.
      </p>

      <div class="options-screen__guide">
        <article class="guide-item">
          <span class="guide-item__number">01</span>
          <div>
            <h2>Intención</h2>
            <p>Una idea para mirar con más atención lo que estás viviendo.</p>
          </div>
        </article>
        <article class="guide-item">
          <span class="guide-item__number">02</span>
          <div>
            <h2>Acción</h2>
            <p>Un paso pequeño y posible para llevarte contigo.</p>
          </div>
        </article>
      </div>

      <RouterLink class="button button--primary" to="/cards">
        <span>Empezar una tirada</span>
        <span aria-hidden="true">↗</span>
      </RouterLink>
    </section>
  </main>
</template>

<style scoped>
.options-screen {
  display: flex;
  min-height: 100vh;
  min-height: 100dvh;
  flex-direction: column;
  padding: max(1.2rem, env(safe-area-inset-top)) 1.5rem
    max(1.5rem, env(safe-area-inset-bottom));
  background:
    radial-gradient(ellipse at 50% 40%, rgb(73 83 79 / 30%), transparent 60%),
    var(--color-night);
}

.options-screen__header {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
}

.options-screen__header .eyebrow {
  margin: 0;
}

.back-link {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: 0.45rem;
  color: var(--color-muted);
  font-size: 0.82rem;
}

.back-link:hover {
  color: var(--color-paper);
}

.options-screen__content {
  width: min(100%, 25rem);
  margin: auto;
  padding: 3rem 0;
}

.options-screen__title {
  margin: 1.2rem 0;
  color: var(--color-paper);
  font-family: var(--font-display);
  font-size: clamp(3.3rem, 14vw, 4.7rem);
  font-weight: 400;
  letter-spacing: -0.055em;
  line-height: 0.98;
}

.options-screen__intro {
  max-width: 30rem;
  margin: 0;
  color: var(--color-muted);
  font-size: 0.95rem;
  line-height: 1.7;
}

.options-screen__guide {
  margin: 2.2rem 0;
  border-top: 1px solid rgb(231 223 205 / 14%);
}

.guide-item {
  display: grid;
  grid-template-columns: 2.5rem 1fr;
  gap: 0.75rem;
  padding: 1.15rem 0;
  border-bottom: 1px solid rgb(231 223 205 / 14%);
}

.guide-item__number {
  padding-top: 0.2rem;
  color: var(--color-gold);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
}

.guide-item h2 {
  margin: 0;
  color: var(--color-paper);
  font-family: var(--font-display);
  font-size: 1.45rem;
  font-weight: 400;
}

.guide-item p {
  margin: 0.35rem 0 0;
  color: var(--color-muted);
  font-size: 0.84rem;
  line-height: 1.55;
}
</style>
