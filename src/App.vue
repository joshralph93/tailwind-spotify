<template>
  <div id="app" class="bg-grey-lightest min-h-screen font-sans flex flex-col">
    <header class="bg-white p-8 border-b-2 border-grey-light">
      <h1 class="text-purple-darkest">private <span class="text-blue-light">waters</span></h1>
    </header>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style src="./assets/styles/main.css"></style>
