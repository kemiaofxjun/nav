<template>
  <section 
    :id="`category-${category.id}`"
    class="category-section"
    :style="{ '--animation-delay': `${animationDelay}ms` }"
  >
    <div class="category-header">
      <h2 class="category-title">{{ category.name }}</h2>
      <div class="category-divider"></div>
    </div>
    
    <div class="cards-grid">
      <NavigationCard 
        v-for="(item, itemIndex) in category.items"
        :key="item.id"
        :item="item"
        :style="{ '--item-delay': `${itemIndex * 50}ms` }"
        @click="handleCardClick"
      />
    </div>
  </section>
</template>

<script setup>
import NavigationCard from './NavigationCard.vue'

defineProps({
  category: {
    type: Object,
    required: true
  },
  animationDelay: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['card-click'])

const handleCardClick = (item) => {
  emit('card-click', item)
}
</script>

<style scoped>
.category-section {
  margin-bottom: 1rem;
}

.category-section:first-child {
  margin-top: 1rem;
}

.category-header {
  margin-bottom: 1rem;
  padding-top: 2rem;
}

.category-header:first-child {
  padding-top: 0;
}

.category-title {
  font-size: 1.5rem;
  font-weight: 600;
  border-top: 1px dashed hsl(var(--border));
  line-height: 1.2;
  letter-spacing: -0.025em;
  color: hsl(var(--foreground));
  margin: 0;
  padding-top: 1.5rem;
  position: relative;
}

.category-header:first-child .category-title {
  border-top: none;
  padding-top: 0;
}

.category-divider {
  width: 48px;
  height: 2px;
  background: linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary) / 0.3));
  border-radius: 1px;
  margin-top: 0.75rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 0.5rem;
  margin-top: 0.5rem;
}

@media (max-width: 768px) {
  .category-section {
    margin-bottom: 3rem;
  }
  
  .category-header {
    margin-bottom: 1.5rem;
    padding-top: 1.5rem;
  }
  
  .category-title {
    font-size: 1.25rem;
    padding-top: 1rem;
  }
  
  .cards-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .category-section {
    margin-bottom: 2.5rem;
  }
  
  .cards-grid {
    gap: 0.75rem;
  }
}
</style>