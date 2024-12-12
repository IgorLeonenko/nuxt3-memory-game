<template>
  <div class="memory-game">
    <div v-for="(card, index) in cards" :key="index" class="card" @click="flipCard(index)">
      <div v-if="card.flipped || card.matched" class="card-front">{{ card.value }}</div>
      <div v-else class="card-back">?</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const cards = ref(shuffle([
  { value: 'A', flipped: false, matched: false },
  { value: 'A', flipped: false, matched: false },
  { value: 'B', flipped: false, matched: false },
  { value: 'B', flipped: false, matched: false },
  { value: 'C', flipped: false, matched: false },
  { value: 'C', flipped: false, matched: false },
  { value: 'D', flipped: false, matched: false },
  { value: 'D', flipped: false, matched: false },
  { value: 'E', flipped: false, matched: false },
  { value: 'E', flipped: false, matched: false },
  { value: 'F', flipped: false, matched: false },
  { value: 'F', flipped: false, matched: false },
  { value: 'G', flipped: false, matched: false },
  { value: 'G', flipped: false, matched: false },
  { value: 'H', flipped: false, matched: false },
  { value: 'H', flipped: false, matched: false },
]));

const allMatched = computed(() => cards.value.every(card => card.matched));

const flipCard = (index) => {
  if (!cards.value[index].flipped && !cards.value[index].matched) {
    cards.value[index].flipped = true;
    checkForMatch();
  }
};

const checkForMatch = () => {
  const flippedCards = cards.value.filter(card => card.flipped && !card.matched);
  if (flippedCards.length === 2) {
    if (flippedCards[0].value === flippedCards[1].value) {
      flippedCards.forEach(card => card.matched = true);
    }
    setTimeout(() => {
      flippedCards.forEach(card => card.flipped = false);
    }, 1000);
  }
};

watch(allMatched, (newVal) => {
  if (newVal) {
    router.push('/win');
  }
});
</script>

<style scoped>
.memory-game {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.card {
  width: 50px;
  height: 50px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.card-front {
  background-color: #fff;
}
.card-back {
  background-color: #ccc;
}
</style>
