<script setup lang="ts">
import Header from '~/components/core/header.vue'
</script>

<template>
  <UApp>
    <div class="grid grid-rows-[64px_1fr]">
      <Header />
      <slot></slot>
    </div>
  </UApp>

  <span class="absolute top-16 left-0 w-full border-dashed border-t border-muted h-[1px]"></span>
  <span class="absolute top-0 right-64 h-full border-dashed border-r border-muted w-[1px]"></span>
  <span class="absolute bottom-16 left-0 w-full border-dashed border-b border-muted h-[1px]"></span>
  <span class="absolute top-0 left-64 h-full border-dashed border-l border-muted w-[1px]"></span>
</template>
