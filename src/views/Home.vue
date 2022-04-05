<template>
  <div class="home">
    <div class="main-container">
      <div class="title-con">
        <h1>CANVAS</h1>
      </div>
      <ul>
        <li v-for="(item, index) in pages" :key="index">
          <router-link :to="`/page/${item.path}`">{{ index + 1 }}. {{ item.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Line from '@/lib/Line';
import pages from '@/router/page';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    return {
      pages,
    };
  }
})
</script>