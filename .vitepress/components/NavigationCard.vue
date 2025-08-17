<template>
  <div 
    class="card nav-card"
    @click="handleClick"
    @keydown.enter="handleClick"
    tabindex="0"
    role="button"
    :aria-label="`打开 ${item.name}: ${item.description}`"
  >
    <div class="card-content">
      <div class="card-header-inline">
        <div class="card-icon">
          <img v-if="item.icon.light" :src="item.icon.light" :alt="item.name" class="icon-image-light" />
          <img v-if="item.icon.dark" :src="item.icon.dark" :alt="item.name" class="icon-image-dark" />
          <div v-else class="icon-placeholder" :style="{ backgroundColor: item.color }">
            <span class="icon-text">{{ item.name.charAt(0) }}</span>
          </div>
        </div>
        <div class="card-info">
          <h3 class="card-title">{{ item.name }}</h3>
          <p class="card-description">{{ item.description }}</p>
        </div>
        <div class="card-arrow">
          <Icon icon="mingcute:external-link-line" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click', props.item)
}
</script>

<style scoped>
.nav-card {
  cursor: pointer;
  transition: all 0.15s ease-in-out;
}

.nav-card:hover {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  transform: translateY(-1px);
}

.nav-card:focus {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
}

.card-header-inline {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.25rem;
}

.card-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.card-icon {
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
}

.icon-image-light {
  width: 100%;
  height: 100%;
  border-radius: var(--radius);
  object-fit: cover;
  object-position: center;
  border: 1px solid hsl(var(--border));
  box-shadow: 0 0 0 1px hsl(var(--border));
  background-color: hsl(var(--background));
}

.icon-image-dark {
  width: 100%;
  height: 100%;
  border-radius: var(--radius);
  object-fit: cover;
  object-position: center;
  border: 1px solid hsl(var(--border));
  box-shadow: 0 0 0 1px hsl(var(--border));
  background-color: hsl(var(--background));
}

[data-theme="light"] .icon-image-dark {
  display: none;
}

[data-theme="dark"] .icon-image-light {
  display: none;
}

.icon-placeholder {
  width: 100%;
  height: 100%;
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
  color: white;
}

.card-title {
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25;
  color: hsl(var(--card-foreground));
  margin: 0;
}

.card-description {
  font-size: 0.75rem;
  color: hsl(var(--muted-foreground));
  line-height: 1.4;
  margin: 0.25rem 0 0 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-arrow {
  width: 16px;
  height: 16px;
  color: hsl(var(--muted-foreground));
  transition: all var(--duration-200) var(--ease-in-out);
  opacity: 0.7;
}

.nav-card:hover .card-arrow {
  opacity: 1;
  color: hsl(var(--primary));
  transform: translateX(2px) scale(1.1);
}

[data-theme="dark"] .card-arrow {
  color: hsl(var(--accent-foreground));
}

[data-theme="dark"] .nav-card:hover .card-arrow {
  color: hsl(var(--primary));
}

@media (max-width: 480px) {
  .card-header-inline {
    padding: 0.125rem;
    gap: 0.75rem;
  }
  
  .card-icon {
    width: 2rem;
    height: 2rem;
  }
  
  .card-title {
    font-size: 0.8125rem;
  }
  
  .card-description {
    font-size: 0.6875rem;
  }
}

[data-theme="dark"] .nav-card:hover {
  background: hsl(var(--accent));
}
</style>