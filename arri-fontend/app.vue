<template>
  <div :model="context">{{ refresh.message }}</div>
</template>

<script setup>
import i18n from "@/script/i18n.js"

const lzf = i18n("zh_CN")

let refresh = ref({
  message: lzf.noMessage
})
</script>