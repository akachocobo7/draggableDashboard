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
