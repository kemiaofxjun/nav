<template>
  <div class="search-section">
    <div class="search-container">
      <div class="search-engine-wrapper">
        <SearchEngineSelector @engine-change="handleEngineChange" />
      </div>
      <div class="search-input-group">
        <div class="relative">
          <div class="search-icon">
            <Icon icon="mingcute:search-line" />
          </div>
          <input 
            v-model="searchQuery"
            type="text" 
            :placeholder="placeholder"
            @keyup.enter="handleSearch"
            class="input search-input"
          />
        </div>
        <button 
          @click="handleSearch" 
          class="btn btn-default"
          :disabled="!searchQuery.trim()"
        >
          搜索
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import SearchEngineSelector from './SearchEngineSelector.vue'

const props = defineProps({
  placeholder: {
    type: String,
    default: '搜索...'
  }
})

const emit = defineEmits(['search', 'engine-change'])

const searchQuery = ref('')

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    emit('search', searchQuery.value.trim())
  }
}

const handleEngineChange = (engine) => {
  emit('engine-change', engine)
}
</script>

<style scoped>
.search-section {
  width: 100%;
}

.search-container {
  max-width: 40rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
}

.search-engine-wrapper {
  flex-shrink: 0;
}

.search-input-group {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex: 1;
}

.relative {
  position: relative;
  flex: 1;
}

.search-icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: hsl(var(--muted-foreground));
  z-index: 10;
}

.search-input {
  padding-left: 2.5rem;
}

@media (max-width: 768px) {
  .search-container {
    max-width: 100%;
    padding: 0 0.5rem;
    flex-direction: column;
    gap: 1rem;
  }
  
  .search-engine-wrapper {
    order: 1;
  }
  
  .search-input-group {
    order: 2;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
  
  .search-input-group .relative {
    width: 100%;
  }
  
  .search-input-group .btn {
    width: 100%;
  }
}
</style>