<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col>
        <v-card elevation="2" shaped tile height="250px">
          <v-card-text style="font-size: 20px">
            {{ text }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
  name: "MyCard",

  props: {
    text: {
      default: "hoge",
    },
  },
};
</script>
