import { computed, ref } from "vue";

/**
 * Manages one selection from each card deck.
 * @param {Array} decks The decks available for the draw
 * @returns {Object} Selected cards and draw/reset actions
 */
export function useCardDraw(decks) {
  const selectedCards = ref({});

  const selectedCount = computed(() => Object.keys(selectedCards.value).length);
  const isComplete = computed(() => selectedCount.value === decks.length);

  const drawCard = (deck) => {
    if (selectedCards.value[deck.id]) return;

    const index = Math.floor(Math.random() * deck.cards.length);
    selectedCards.value[deck.id] = deck.cards[index];
  };

  const resetDraw = () => {
    selectedCards.value = {};
  };

  return { selectedCards, selectedCount, isComplete, drawCard, resetDraw };
}
