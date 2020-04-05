<template>
  <div class="home">
    <dashboard></dashboard>
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from '@/components/Dashboard';

export default {
  name: "Home",
  components: {
    Dashboard
  }
};
</script>
