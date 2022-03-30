<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="4" v-for="component in components" :key="component.name">
        <component :is="component.name" :text="component.text"></component>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <draggable :list="components" class="row wrap justify-space-around">
        <v-col cols="6" v-for="component in components" :key="component.name">
          <component :is="component.name" :text="component.text"></component>
        </v-col>
      </draggable>
    </v-row>
  </v-container>
</template>

<script>
import MyCard from "./MyCard.vue";
import MyList from "./MyList.vue";
import draggable from "vuedraggable";

export default {
  name: "HelloWorld",

  components: {
    MyCard,
    MyList,
    draggable,
  },

  data: () => ({
    components: [
      { name: "MyCard", text: "a", disable: false },
      { name: "MyCard", text: "b" },
      { name: "MyList" },
    ],
  }),
};
</script>
