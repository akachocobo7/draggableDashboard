<template>
  <v-card class="mx-auto" max-width="400" tile>
    <v-list
      ><v-list-item v-for="(item, i) in items" :key="i">
        <v-list-item-content>
          <v-list-item-title v-text="item.text"> </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script lang="ts">
export default {
  name: "MyList",

  data: () => ({ items: [{ text: "aaa" }, { text: "bbb" }, { text: "ccc" }] }),
};
</script>
