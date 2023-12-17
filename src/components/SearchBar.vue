<template>
  <div class="search-bar">
    <input v-model="searchQuery" @input="search" placeholder="Search contacts..." />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    search() {
      this.$emit("search", this.searchQuery);
    },
  },
};
</script>

<style scoped>
.search-bar input{
    width:100%;
    box-sizing: border-box;
    padding: 0.5rem;
    margin-top: 1rem;
    font-size: 1rem;
}
</style>