<script setup>
defineProps({
  deckName: {
    type: String,
    required: true,
  },
  card: {
    type: Object,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["select"]);
</script>

<template>
  <button
    class="playing-card"
    :class="{ 'playing-card--revealed': card }"
    type="button"
    :disabled="disabled"
    :aria-label="card ? `${card.title}: ${card.message}` : `Elegir una carta de ${deckName}`"
    :aria-pressed="Boolean(card)"
    @click="$emit('select')"
  >
    <span class="playing-card__inner">
      <span class="playing-card__face playing-card__back" aria-hidden="true">
        <span class="playing-card__back-mark">✳</span>
      </span>
      <span v-if="card" class="playing-card__face playing-card__front">
        <span class="playing-card__symbol" aria-hidden="true">{{ card.symbol }}</span>
        <span class="playing-card__title">{{ card.title }}</span>
        <span class="playing-card__message">{{ card.message }}</span>
      </span>
    </span>
  </button>
</template>

<style scoped>
.playing-card {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: visible;
  border: 0;
  border-radius: 1rem;
  background: transparent;
  cursor: pointer;
  perspective: 1000px;
  -webkit-tap-highlight-color: transparent;
}

.playing-card::before,
.playing-card::after {
  position: absolute;
  inset: 0;
  border: 1px solid rgb(222 198 150 / 45%);
  border-radius: 1rem;
  background: var(--color-card-back);
  content: "";
}

.playing-card::before {
  transform: translate(7px, -5px) rotate(3deg);
}

.playing-card::after {
  transform: translate(3px, -2px) rotate(1.5deg);
}

.playing-card__inner {
  position: relative;
  z-index: 1;
  display: block;
  aspect-ratio: 0.69;
  border-radius: 1rem;
  transform-style: preserve-3d;
  transition: transform 650ms cubic-bezier(0.2, 0.7, 0.2, 1);
}

.playing-card--revealed .playing-card__inner {
  transform: rotateY(180deg);
}

.playing-card__face {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(0.7rem, 3vw, 1.2rem);
  overflow: hidden;
  border: 1px solid var(--color-gold);
  border-radius: 1rem;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.playing-card__back {
  color: var(--color-gold);
  background:
    radial-gradient(circle at center, transparent 0 28%, rgb(222 198 150 / 12%) 28.5% 29%, transparent 29.5%),
    repeating-linear-gradient(45deg, transparent 0 9px, rgb(222 198 150 / 9%) 10px, transparent 11px 19px),
    var(--color-card-back);
}

.playing-card__back::before {
  position: absolute;
  inset: 0.45rem;
  border: 1px solid rgb(222 198 150 / 45%);
  border-radius: 0.65rem;
  content: "";
}

.playing-card__back-mark {
  display: grid;
  width: 2.8rem;
  aspect-ratio: 1;
  place-items: center;
  border: 1px solid rgb(222 198 150 / 70%);
  border-radius: 50%;
  background: var(--color-card-back);
  font-size: 1.25rem;
}

.playing-card__front {
  gap: 0.7rem;
  border-color: rgb(30 40 37 / 30%);
  color: var(--color-night);
  background:
    radial-gradient(ellipse at 50% 0%, rgb(255 255 255 / 60%), transparent 65%),
    var(--color-paper);
  transform: rotateY(180deg);
  text-align: center;
}

.playing-card__front::before {
  position: absolute;
  inset: 0.45rem;
  border: 1px solid rgb(49 66 59 / 22%);
  border-radius: 0.65rem;
  content: "";
  pointer-events: none;
}

.playing-card__symbol {
  color: var(--color-accent);
  font-family: var(--font-display);
  font-size: clamp(2.1rem, 10vw, 3rem);
  line-height: 1;
}

.playing-card__title {
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 5.8vw, 1.8rem);
  line-height: 1.1;
}

.playing-card__message {
  max-width: 15ch;
  color: var(--color-card-copy);
  font-size: clamp(0.68rem, 2.9vw, 0.82rem);
  line-height: 1.45;
}

.playing-card:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 10px;
}

.playing-card:disabled {
  cursor: default;
}

.playing-card:disabled:not(.playing-card--revealed) {
  opacity: 0.55;
}

@media (prefers-reduced-motion: reduce) {
  .playing-card__inner {
    transition-duration: 1ms;
  }
}
</style>
