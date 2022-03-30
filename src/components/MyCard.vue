<template>
  <v-card elevation="2" shaped tile> {{ text }} </v-card>
</template>

<script>
export default {
  name: "MyCard",

  props: {
    text: {
      default: "hoge",
    },
  },
  data: () => ({}),
};
</script>
