<script lang="ts" setup>
import type { MotionProps } from 'framer-motion'
import type { Component } from 'vue'
import { animate } from 'motion'
import { onMounted, ref, shallowRef } from 'vue'

defineOptions({
  name: 'Motion',
})

withDefaults(defineProps<{
  as: string | Component
} & MotionProps>(), {
  as: 'div',
})

const motionRef = ref()
const animationPlaybackControls = shallowRef<ReturnType<typeof animate>>()
onMounted(() => {
  animationPlaybackControls.value = animate(motionRef.value)
})
</script>

<template>
  <component :is="as" ref="motionRef">
    <slot />
  </component>
</template>
