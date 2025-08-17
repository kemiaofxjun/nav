<template>
  <button
    ref="toggleButton"
    @click="toggleTheme"
    class="theme-toggle"
    :aria-label="isDark ? '切换到浅色模式' : '切换到深色模式'"
  >
    <div class="toggle-icon">
      <Icon class="sun-icon" icon="mingcute:sun-line" v-if="!isDark" />
      <Icon class="moon-icon" icon="mingcute:moon-line" v-else />
    </div>
  </button>
  

</template>

<script setup>
import { Icon } from '@iconify/vue'
import { ref, onMounted } from 'vue'

const isDark = ref(false)
const toggleButton = ref(null)

const toggleTheme = () => {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  const theme = savedTheme || (prefersDark ? 'dark' : 'light')
  isDark.value = theme === 'dark'
  document.documentElement.setAttribute('data-theme', theme)
})
</script>

<style scoped>
.theme-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 1px solid hsl(var(--border));
  border-radius: var(--radius);
  background-color: hsl(var(--card));
  color: hsl(var(--card-foreground));
  cursor: pointer;
  transition: all var(--duration-200) var(--ease-in-out);
  box-shadow: var(--shadow-sm);
}

.theme-toggle:hover {
  background-color: hsl(var(--accent));
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.theme-toggle:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

.toggle-icon {
  width: 20px;
  height: 20px;
  transition: transform var(--duration-200) var(--ease-in-out);
}

.theme-toggle:hover .toggle-icon {
  transform: rotate(15deg);
}

.sun-icon,
.moon-icon {
  width: 100%;
  height: 100%;
}

.sun-icon {
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

[data-theme="dark"] .theme-toggle {
  background: hsl(var(--card) / 0.8);
  border: 1px solid hsl(var(--border) / 0.5);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-dark-sm);
}

[data-theme="dark"] .theme-toggle:hover {
  background: hsl(var(--accent) / 0.9);
  border-color: hsl(var(--primary) / 0.3);
  box-shadow: var(--shadow-dark-md);
  transform: translateY(-2px);
}

[data-theme="dark"] .theme-toggle:active {
  transform: translateY(0);
  box-shadow: var(--shadow-dark-sm);
}

[data-theme="dark"] .moon-icon {
  color: hsl(var(--primary));
  filter: drop-shadow(0 0 8px hsl(var(--primary) / 0.3));
}

[data-theme="dark"] .sun-icon {
  color: hsl(var(--muted-foreground));
}



@media (max-width: 640px) {
  .theme-toggle {
    top: 16px;
    right: 16px;
    width: 40px;
    height: 40px;
  }
  
  .toggle-icon {
    width: 18px;
    height: 18px;
  }
}
</style>