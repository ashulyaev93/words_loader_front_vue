<script>
// @ is an alias to /src
import CommonWords from '@/components/CommonWords'
import Search from '@/components/Search'

export default {
  name: 'app',
  data() {
    return {
      searchWord: null
    }
  },
  components: {
    CommonWords,
    Search
  },
  methods: {
    searchRandomWord(word) {
      this.searchWord = word.word
    }
  }
}
</script>

<template>
  <header class="p-3 bg-dark text-white">
    <div class="text-end">
      <router-link to="/logout" class="btn btn-danger">Logout</router-link>
    </div>
  </header>

  <div class="wrapper">
    <div class="grid grid-center">
      <Search :randomData="searchWord" class="col col-12 col-md-4" />
      <CommonWords class="get-common-words col col-12 col-md-8" @randomWord="searchRandomWord" />
    </div>
  </div>
</template>

<style scoped lang="scss">
#app {
  .wrapper {
    margin: auto;
    margin: 16px;
  }
}
</style>