<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">DashBoard</div>
    </v-app-bar>

    <v-main>
      <DashBoard />
    </v-main>
  </v-app>
</template>

<script>
import DashBoard from "./components/DashBoard";

export default {
  name: "App",

  components: {
    DashBoard,
  },

  data: () => ({
    //
  }),
};
</script>
