<template>
  <span>
    {{ getDate }}
  </span>
</template>

<script>
export default {
  computed: {
    getDate() {
    const d = new Date().toString().split(' ').slice(1,4).join(' ')
      return  d
    },
  },
};
</script>
