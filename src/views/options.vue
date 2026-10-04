<script setup>
const colorPalette = [
  { name: "current line", class: "--template-drakula-palette-current-line" },
  { name: "selection", class: "--template-drakula-palette-selection" },
  { name: "foreground", class: "--template-drakula-palette-foreground" },
  { name: "comment", class: "--template-drakula-palette-comment" },
  { name: "cyan", class: "--template-drakula-palette-cyan" },
  { name: "purple", class: "--template-drakula-palette-purple" },
  { name: "yellow", class: "--template-drakula-palette-yellow" },
];
</script>

<template>
  <div>options view</div>
  <ul>
    <div v-for="(color, index) in colorPalette" :key="index">
      <li :style="{ backgroundColor: `var(${color.class})` }">
        {{ color.name }}
      </li>
    </div>
  </ul>
</template>
