<template>
  <div class="search-engine-selector">
    <div class="current-engine" @click="toggleDropdown" :class="{ active: isOpen }">
      <div class="engine-info">
        <span class="engine-icon" :style="{ color: currentEngine.color }">
          <Icon :icon="currentEngine.icon" />
        </span>
        <span class="engine-name">{{ currentEngine.name }}</span>
      </div>
      <Icon class="dropdown-arrow" icon="mingcute:down-line" />
    </div>
    
    <Transition name="dropdown">
      <div v-if="isOpen" class="dropdown-menu">
        <div class="dropdown-overlay" @click="closeDropdown"></div>
        <div class="engine-list">
          <button
            v-for="engine in engines"
            :key="engine.id"
            class="engine-option"
            :class="{ active: engine.id === currentEngine.id }"
            @click="selectEngine(engine.id)"
          >
            <span class="engine-icon" :style="{ color: engine.color }">
              <Icon :icon="engine.icon" />
            </span>
            <span class="engine-name">{{ engine.name }}</span>
            <Icon v-if="engine.id === currentEngine.id" class="check-icon" icon="mingcute:check-line" />
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { getSearchEngines, getCurrentSearchEngine } from '../utils/config.js'
import { Icon } from "@iconify/vue"

const emit = defineEmits(['engine-change'])

const isOpen = ref(false)
const engines = ref([])
const currentEngine = ref({})

const dropdownPosition = computed(() => {
  return { top: '100%', left: '0' }
})
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  isOpen.value = false
}

const selectEngine = (engineId) => {
  localStorage.setItem('search-engine', engineId)
  updateCurrentEngine()
  closeDropdown()
  emit('engine-change', engineId)
}

const updateCurrentEngine = () => {
  currentEngine.value = getCurrentSearchEngine()
}

const handleClickOutside = (event) => {
  const selector = event.target.closest('.search-engine-selector')
  if (!selector) {
    closeDropdown()
  }
}
onMounted(() => {
  engines.value = getSearchEngines()
  updateCurrentEngine()
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.search-engine-selector {
  position: relative;
  z-index: 1001;
}

.current-engine {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
  background-color: hsl(var(--background));
  border: 1px solid hsl(var(--border));
  border-radius: calc(var(--radius) - 2px);
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  min-width: 8rem;
  font-size: 0.875rem;
}

.current-engine:hover {
  background-color: hsl(var(--accent));
  color: hsl(var(--accent-foreground));
}

.current-engine.active {
  border-color: hsl(var(--ring));
  box-shadow: 0 0 0 2px hsl(var(--ring) / 0.2);
}

.engine-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.engine-icon {
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
}

.engine-name {
  font-size: 14px;
  font-weight: 500;
  color: hsl(var(--foreground));
}

.dropdown-arrow {
  width: 16px;
  height: 16px;
  color: hsl(var(--muted-foreground));
  transition: transform var(--duration-200) var(--ease-out);
}

.current-engine.active .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  z-index: 1000;
}

.dropdown-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.engine-list {
  background-color: hsl(var(--popover));
  border: 1px solid hsl(var(--border));
  border-radius: calc(var(--radius) + 2px);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  padding: 0.25rem;
  max-height: 15rem;
  overflow-y: auto;
}

.engine-option {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: calc(var(--radius) - 2px);
  transition: all 0.15s ease-in-out;
  text-align: left;
  font-size: 0.875rem;
}

.engine-option:hover {
  background-color: hsl(var(--accent));
  color: hsl(var(--accent-foreground));
}

.engine-option.active {
  background-color: hsl(var(--accent));
  color: hsl(var(--accent-foreground));
}

.engine-option .engine-name {
  flex: 1;
}

.check-icon {
  width: 16px;
  height: 16px;
  color: hsl(var(--primary));
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all var(--duration-200) var(--ease-out);
}

.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-8px) scale(0.95);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.95);
}

[data-theme="dark"] .current-engine {
  background: hsl(var(--card) / 0.8);
  border: 1px solid hsl(var(--border) / 0.5);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-dark-sm);
}

[data-theme="dark"] .current-engine:hover {
  background: hsl(var(--accent) / 0.9);
  border-color: hsl(var(--primary) / 0.3);
  box-shadow: var(--shadow-dark-md);
}

[data-theme="dark"] .current-engine.active {
  border-color: hsl(var(--ring));
  box-shadow: 0 0 0 2px hsl(var(--ring) / 0.3), var(--shadow-dark-md);
}

[data-theme="dark"] .engine-list {
  background: hsl(var(--card) / 0.95);
  border: 1px solid hsl(var(--border) / 0.5);
  backdrop-filter: blur(20px);
  box-shadow: var(--shadow-dark-xl);
}

[data-theme="dark"] .engine-option:hover {
  background: hsl(var(--accent) / 0.8);
  box-shadow: var(--shadow-dark-sm);
}

[data-theme="dark"] .engine-option.active {
  background: hsl(var(--accent) / 0.9);
  box-shadow: var(--shadow-dark-sm);
}

[data-theme="dark"] .check-icon {
  color: hsl(var(--primary));
  filter: drop-shadow(0 0 4px hsl(var(--primary) / 0.3));
}

[data-theme="dark"] .dropdown-arrow {
  color: hsl(var(--muted-foreground));
}

[data-theme="dark"] .current-engine:hover .dropdown-arrow {
  color: hsl(var(--primary));
}

/* 响应式设计 */
@media (max-width: 480px) {
  .current-engine {
    min-width: 100px;
    padding: 6px 10px;
  }
  
  .engine-name {
    font-size: 13px;
  }
  
  .engine-icon {
    font-size: 14px;
    width: 18px;
    height: 18px;
  }
}
</style>