<template>
  <div class="title-section">
    <h1 class="title">{{ title }}</h1>
    <p class="subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.title-section {
  text-align: center;
  margin-bottom: 2rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.025em;
  color: hsl(var(--foreground));
  margin: 0 0 0.75rem 0;
  background: linear-gradient(135deg, hsl(var(--primary)), hsl(280 84% 60%));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.125rem;
  color: hsl(var(--muted-foreground));
  margin: 0;
  font-weight: 400;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .title {
    font-size: 1.75rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.5rem;
  }
  
  .subtitle {
    font-size: 0.875rem;
  }
}
</style>