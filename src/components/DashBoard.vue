<template>
  <v-container>
    <v-row class="text-center">
      <draggable
        :list="components"
        class="row wrap justify-space-around"
        :options="{ animation: 500 }"
      >
        <template v-for="component in components">
          <v-col
            :cols="component.col"
            :key="component.name"
            v-if="!component.disable"
            style="height: 300px"
          >
            <component :is="component.name" :text="component.text"></component>
          </v-col>
        </template>
      </draggable>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import MyCard from "./MyCard.vue";
import MyList from "./MyList.vue";
import draggable from "vuedraggable";
import MyTable from "./MyTable.vue";
import MyGraph from "./MyGraph.vue";
import MyImage from "./MyImage.vue";

export default {
  name: "HelloWorld",

  components: {
    MyCard,
    MyList,
    draggable,
    MyTable,
    MyGraph,
    MyImage,
  },

  data: () => ({
    components: [
      {
        name: "MyCard",
        text: "いい感じのテキスト",
        col: 4,
        disable: false,
      },
      { name: "MyImage", col: 4, disable: false },
      { name: "MyList", col: 4, disable: false },
      { name: "MyTable", col: 6, disable: false },
      { name: "MyGraph", col: 6, disable: false },
    ],
  }),
};
</script>
