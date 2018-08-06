<template>
  <div id="app" class="bg-grey-lighter min-h-screen font-sans">
    <div class="container mx-auto">
      <header class="flex justify-end">
        <nav class="py-10">
          <ul class="list-reset flex">
            <li class="mr-4"><a href="" class="no-underline text-grey-dark uppercase block">Home</a></li>
            <li><a href="" class="no-underline text-grey-dark uppercase block">Home</a></li>
          </ul>
        </nav>
      </header>

      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style src="./assets/styles/main.css"></style>
