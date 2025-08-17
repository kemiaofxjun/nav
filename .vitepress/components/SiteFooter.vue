<template>
  <footer class="footer">
    <div class="footer-content">
      <p class="footer-text">
        <Icon icon="mingcute:copyright-line" />
        {{ new Date().getFullYear() }} {{ siteInfo.title }}
      </p>
      <p class="footer-text">
        基于 <a class="highlight" href="https://vitepress.dev/" target="_blank">VitePress</a> 构建 · 
        灵感来源于 <a class="highlight" href="https://ui.shadcn.com/" target="_blank">shadcn/ui</a> ·
        <Icon icon="mingcute:github-line" />
        <a class="highlight" href="https://github.com/everfu/nav" target="_blank">GitHub</a>
      </p>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { getSiteInfo } from '../config/navigation'
const siteInfo = getSiteInfo()
</script>

<style scoped>
.footer {
  border-top: 1px dashed hsl(var(--border));
  margin-top: 4rem;
  padding: 2rem 0;
  text-align: center;
}

.footer-text {
  margin: 0;
  color: hsl(var(--muted-foreground));
  font-size: 0.8rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
}

.highlight {
  color: hsl(var(--primary));
  font-weight: 500;
}
</style>