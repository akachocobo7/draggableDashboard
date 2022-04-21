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

<script src="./DashBoard.ts" lang="ts"></script>
