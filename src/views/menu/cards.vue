<script setup>
import { RouterLink } from "vue-router";

import PlayingCard from "@/components/PlayingCard.vue";
import { useCardDraw } from "@/composables/useCardDraw.js";
import { cardDecks } from "@/data/cardDecks.js";

const { selectedCards, selectedCount, isComplete, drawCard, resetDraw } =
  useCardDraw(cardDecks);
</script>

<template>
  <main class="draw-screen">
    <header class="draw-screen__header">
      <RouterLink class="back-link" to="/" aria-label="Volver al inicio">
        <span aria-hidden="true">←</span>
        <span>Inicio</span>
      </RouterLink>
      <p class="eyebrow">TU MOMENTO</p>
      <span class="draw-screen__spacer" aria-hidden="true"></span>
    </header>

    <section class="draw-screen__content">
      <h1 class="draw-screen__title">Elige sin prisa</h1>
      <p class="draw-screen__hint" aria-live="polite">
        <template v-if="isComplete">
          Esta es tu tirada. Quédate con lo que te resuene.
        </template>
        <template v-else-if="selectedCount">
          Ahora elige una carta del otro mazo.
        </template>
        <template v-else>
          Elige una carta de cada mazo.
        </template>
      </p>

      <div class="draw-screen__decks">
        <section
          v-for="(deck, index) in cardDecks"
          :key="deck.id"
          class="deck"
          :aria-labelledby="`deck-${deck.id}`"
        >
          <div class="deck__heading">
            <span class="deck__number">0{{ index + 1 }}</span>
            <h2 :id="`deck-${deck.id}`" class="deck__name">{{ deck.name }}</h2>
            <p class="deck__prompt">{{ deck.prompt }}</p>
          </div>

          <PlayingCard
            :deck-name="deck.name"
            :card="selectedCards[deck.id]"
            :disabled="Boolean(selectedCards[deck.id])"
            @select="drawCard(deck)"
          />

          <p class="deck__caption">
            {{ selectedCards[deck.id] ? "Tu carta" : "Toca para elegir" }}
          </p>
        </section>
      </div>

      <button
        v-if="isComplete"
        class="button button--primary draw-screen__again"
        type="button"
        @click="resetDraw"
      >
        <span>Otra tirada</span>
        <span aria-hidden="true">↻</span>
      </button>
    </section>

    <p class="draw-screen__footnote">NO HAY RESPUESTAS CORRECTAS</p>
  </main>
</template>

<style scoped>
.draw-screen {
  display: flex;
  min-height: 100vh;
  min-height: 100dvh;
  flex-direction: column;
  padding: max(1.2rem, env(safe-area-inset-top)) 1.25rem
    max(1.2rem, env(safe-area-inset-bottom));
  background:
    radial-gradient(ellipse at 50% 44%, rgb(73 83 79 / 30%), transparent 58%),
    var(--color-night);
}

.draw-screen__header {
  display: grid;
  min-height: 2.4rem;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
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

.draw-screen__header .eyebrow {
  margin: 0;
}

.draw-screen__content {
  width: min(100%, 30rem);
  margin: auto;
  padding: 2rem 0;
  text-align: center;
}

.draw-screen__title {
  margin: 0;
  color: var(--color-paper);
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 11vw, 3.8rem);
  font-weight: 400;
  letter-spacing: -0.045em;
  line-height: 1.1;
}

.draw-screen__hint {
  min-height: 2.8em;
  margin: 0.7rem 0 2rem;
  color: var(--color-muted);
  font-size: 0.9rem;
  line-height: 1.5;
}

.draw-screen__decks {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1.2rem, 6vw, 2.1rem);
  align-items: start;
}

.deck {
  min-width: 0;
}

.deck__heading {
  min-height: 5.4rem;
  margin-bottom: 0.75rem;
}

.deck__number {
  display: block;
  margin-bottom: 0.3rem;
  color: var(--color-gold);
  font-size: 0.62rem;
  letter-spacing: 0.18em;
}

.deck__name {
  margin: 0;
  color: var(--color-paper);
  font-family: var(--font-display);
  font-size: clamp(1.3rem, 6vw, 1.8rem);
  font-weight: 400;
}

.deck__prompt,
.deck__caption {
  margin: 0.25rem 0 0;
  color: var(--color-muted);
  font-size: clamp(0.62rem, 2.8vw, 0.76rem);
  line-height: 1.4;
}

.deck__caption {
  margin-top: 1.2rem;
  letter-spacing: 0.04em;
}

.draw-screen__again {
  width: 100%;
  margin-top: 2rem;
}

.draw-screen__footnote {
  margin: auto 0 0;
  padding-top: 1rem;
  color: var(--color-muted);
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  text-align: center;
}

@media (max-height: 700px) {
  .draw-screen__content {
    padding: 1rem 0;
  }

  .draw-screen__hint {
    margin: 0.5rem 0 1.2rem;
  }

  .deck__heading {
    min-height: 4.7rem;
    margin-bottom: 0.45rem;
  }
}
</style>
