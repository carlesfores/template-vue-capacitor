<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="home-screen">
    <div class="home-screen__ornament" aria-hidden="true">
      <span class="home-screen__moon"></span>
      <span class="home-screen__orbit home-screen__orbit--one">
        <span class="home-screen__spark home-screen__spark--one">✳</span>
      </span>
      <span class="home-screen__orbit home-screen__orbit--two">
        <span class="home-screen__spark home-screen__spark--two">✦</span>
      </span>
    </div>

    <section class="home-screen__content">
      <p class="eyebrow">UN MOMENTO PARA TI</p>
      <h1 class="home-screen__title">Entre<br />cartas</h1>
      <p class="home-screen__intro">
        Una pausa, una intención<br />
        y un pequeño paso.
      </p>

      <nav class="home-screen__actions" aria-label="Menú principal">
        <RouterLink class="button button--primary" to="/cards">
          <span>Cartas</span>
          <span aria-hidden="true">↗</span>
        </RouterLink>
        <RouterLink class="button button--quiet" to="/options">
          Opciones
        </RouterLink>
      </nav>
    </section>

    <p class="home-screen__footnote">DESCUBRE LO QUE YA SABES</p>
  </main>
</template>

<style scoped>
.home-screen {
  position: relative;
  display: grid;
  min-height: 100vh;
  min-height: 100dvh;
  overflow: hidden;
  place-items: center;
  padding: max(2rem, env(safe-area-inset-top)) 1.5rem
    max(2rem, env(safe-area-inset-bottom));
  background:
    radial-gradient(ellipse at 50% 38%, rgb(73 83 79 / 38%), transparent 57%),
    var(--color-night);
}

.home-screen__content {
  z-index: 1;
  width: min(100%, 24rem);
  text-align: center;
}

.home-screen__title {
  margin: 1.1rem 0;
  color: var(--color-paper);
  font-family: var(--font-display);
  font-size: clamp(4.8rem, 22vw, 7.4rem);
  font-weight: 400;
  letter-spacing: -0.075em;
  line-height: 0.83;
}

.home-screen__intro {
  margin: 1.8rem 0 2.6rem;
  color: var(--color-muted);
  font-size: 1rem;
  line-height: 1.7;
}

.home-screen__actions {
  display: grid;
  gap: 0.8rem;
}

.home-screen__footnote {
  position: absolute;
  bottom: max(1.8rem, env(safe-area-inset-bottom));
  margin: 0;
  color: var(--color-muted);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
}

.home-screen__ornament {
  position: absolute;
  top: 11%;
  left: 50%;
  width: min(75vw, 19rem);
  aspect-ratio: 1;
  border: 1px solid rgb(222 198 150 / 12%);
  border-radius: 50%;
  transform: translateX(-50%);
}

.home-screen__ornament::before,
.home-screen__ornament::after {
  position: absolute;
  inset: 9%;
  border: 1px solid rgb(222 198 150 / 10%);
  border-radius: 50%;
  content: "";
}

.home-screen__ornament::after {
  inset: 21%;
}

.home-screen__moon {
  position: absolute;
  top: 13%;
  left: 50%;
  width: 2rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--color-gold);
  box-shadow: 0 0 2.4rem rgb(222 198 150 / 40%);
  transform: translateX(-50%);
}

.home-screen__spark {
  position: absolute;
  top: 0;
  left: 50%;
  color: var(--color-gold);
  transform: translate(-50%, -50%);
}

.home-screen__orbit {
  position: absolute;
  border-radius: 50%;
  animation: orbit 28s linear infinite;
}

.home-screen__orbit--one {
  inset: 9%;
}

.home-screen__orbit--two {
  inset: 21%;
  animation-duration: 20s;
  animation-direction: reverse;
}

.home-screen__spark--one {
  font-size: 1.2rem;
}

.home-screen__spark--two {
  font-size: 0.9rem;
}

@keyframes orbit {
  to {
    transform: rotate(1turn);
  }
}

@media (max-height: 680px) {
  .home-screen__ornament {
    top: 4%;
    width: min(52vw, 14rem);
  }

  .home-screen__title {
    font-size: clamp(4rem, 18vw, 5.6rem);
  }

  .home-screen__intro {
    margin: 1.2rem 0 1.6rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .home-screen__orbit {
    animation: none;
  }
}
</style>
