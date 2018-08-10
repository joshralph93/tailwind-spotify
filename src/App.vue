<template>
  <div id="app" class="bg-grey-darkest min-h-screen h-screen overflow-hidden font-sans flex flex-col">
    <div class="flex flex-1">
      <!-- @todo - pretty scroll bar? -->
      <div class="bg-black py-2 flex flex-col overflow-hidden" :style="{ width: sidebarWidth }">
        <div class="flex-1 overflow-auto -mr-4">
          <ul class="list-reset">
            <li class="py-1 my-3">
              <a href="#" class="block px-4 py-1 border-l-4 hover:text-white border-green no-underline text-white text-sm">Browse</a>
            </li>
            <li class="py-1 my-3">
              <a href="#" class="block px-4 no-underline text-grey-lightest hover:text-white text-sm border-l-4 border-transparent">Radio</a>
            </li>
          </ul>
          <ul class="list-reset mt-8">
            <li class="px-4 py-1 my-3 border-l-4 border-transparent text-grey-lighter text-xs uppercase tracking-wide">
              Your Library
            </li>
            <li class="py-1 my-3">
              <a href="#" class="block px-4 no-underline text-grey-lightest hover:text-white text-sm border-l-4 border-transparent">Your Daily Mix</a>
            </li>
            <li class="py-1 my-3">
              <a href="#" class="block px-4 no-underline text-grey-lightest hover:text-white text-sm border-l-4 border-transparent">Recently Played</a>
            </li>
            <li class="py-1 my-3">
              <a href="#" class="block px-4 no-underline text-grey-lightest hover:text-white text-sm border-l-4 border-transparent">Songs</a>
            </li>
            <li class="py-1 my-3">
              <a href="#" class="block px-4 no-underline text-grey-lightest hover:text-white text-sm border-l-4 border-transparent">Albums</a>
            </li>
            <li class="py-1 my-3">
              <a href="#" class="block px-4 no-underline text-grey-lightest hover:text-white text-sm border-l-4 border-transparent">Artists</a>
            </li>
          </ul>
          <ul class="list-reset mt-8">
            <li class="px-4 py-1 my-3 border-l-4 border-transparent text-grey-lighter text-xs uppercase tracking-wide">
              Playlists
            </li>
            <li class="py-1 my-3" v-for="playlist in playlists">
              <a href="#" class="block px-4 no-underline text-grey-lightest hover:text-white text-sm border-l-4 border-transparent">{{ playlist }}</a>
            </li>
          </ul>
        </div>
        <div class="border-t border-grey-darker px-4 py-5 text-grey hover:text-grey-lightest flex items-center">
          <svg class="w-5 h-5 fill-current inline-block" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="add-outline" fill="currentColor">
                <path d="M11,9 L11,5 L9,5 L9,9 L5,9 L5,11 L9,11 L9,15 L11,15 L11,11 L15,11 L15,9 L11,9 Z M10,20 C15.5228475,20 20,15.5228475 20,10 C20,4.4771525 15.5228475,0 10,0 C4.4771525,0 0,4.4771525 0,10 C0,15.5228475 4.4771525,20 10,20 Z M10,18 C14.418278,18 18,14.418278 18,10 C18,5.581722 14.418278,2 10,2 C5.581722,2 2,5.581722 2,10 C2,14.418278 5.581722,18 10,18 Z" id="Combined-Shape"></path>
              </g>
            </g>
          </svg>
          <span class="ml-2 text-sm">New Playlist</span>
        </div>
        <div>
          <img class="block" src="https://www.designformusic.com/wp-content/uploads/2015/10/insurgency-digital-album-cover-design.jpg" />
        </div>
      </div>
      <router-view/>
    </div>
    <div class="py-4 px-4 bg-grey-darker flex items-center">
      <div class="w-1/4">
        <p class="text-white mb-2 font-light text-sm">
          Come As You Are - Live
          <svg class="w-3 h-3 fill-current text-grey hover:text-grey-lightest inline-block ml-4" style="transform: rotate(45deg); /* @todo - better icon */" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <polygon points="10 8.58578644 2.92893219 1.51471863 1.51471863 2.92893219 8.58578644 10 1.51471863 17.0710678 2.92893219 18.4852814 10 11.4142136 17.0710678 18.4852814 18.4852814 17.0710678 11.4142136 10 18.4852814 2.92893219 17.0710678 1.51471863 10 8.58578644"></polygon>
          </svg>
        </p>
        <p class="text-grey-light text-xs font-light">Crowder</p>
      </div>
      <div class="w-1/2 h-full flex flex-col items-center">
        <div class="w-1/3 flex justify-around items-center text-grey">
          <!--<svg class="w-4 h-4 fill-current block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">-->
            <!--<path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"></path>-->
          <!--</svg>-->
          <!-- @todo - find some better icons :) -->
          <svg class="w-5 h-5 fill-current hover:text-grey-lightest block" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.58578644,12.8284271 L4.41028736,15.0039262 C3.83091964,15.5832939 2.81955537,16 2.00104344,16 L0,16 L0,14 L2.00104344,14 C2.29046199,14 2.79273472,13.7930517 2.9960738,13.5897126 L5.17157288,11.4142136 L6.58578644,12.8284271 L6.58578644,12.8284271 Z M16,6 L13.9998075,6 C13.7100858,6 13.2055579,6.20865568 13.0039262,6.41028736 L10.8284271,8.58578644 L10.8284271,8.58578644 L9.41421356,7.17157288 L11.5897126,4.9960738 C12.1666986,4.41908781 13.1800499,4 13.9998075,4 L16,4 L16,1 L20,5 L16,9 L16,6 Z M16,16 L13.9998075,16 C13.1800499,16 12.1666986,15.5809122 11.5897126,15.0039262 L2.9960738,6.41028736 C2.79273472,6.20694828 2.29046199,6 2.00104344,6 L0,6 L0,4 L2.00104344,4 C2.81955537,4 3.83091964,4.41670608 4.41028736,4.9960738 L13.0039262,13.5897126 C13.2055579,13.7913443 13.7100858,14 13.9998075,14 L16,14 L16,11 L20,15 L16,19 L16,16 Z"></path>
          </svg>
          <svg class="w-5 h-5 fill-current hover:text-grey-lightest block" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M4,5 L7,5 L7,15 L4,15 L4,5 Z M16,5 L7,10 L16,15 L16,5 Z"></path>
          </svg>
          <span class="block border border-solid border-grey-lightest hover:text-grey-lightest rounded-full p-2">
            <svg class="w-5 h-5 fill-current block" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <polygon id="Rectangle-161" points="4 4 16 10 4 16"></polygon>
            </svg>
          </span>
          <svg class="w-5 h-5 fill-current hover:text-grey-lightest block" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M13,5 L16,5 L16,15 L13,15 L13,5 Z M4,5 L13,10 L4,15 L4,5 Z"></path>
          </svg>
          <svg class="w-5 h-5 fill-current hover:text-grey-lightest block" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.99201702,4 C3.8918564,4 3,4.88670635 3,5.99810135 L3,12 L0,12 L4,16 L8,12 L5,12 L5,6 L12,6 L14,4 L4.99201702,4 Z M15,8 L12,8 L16,4 L20,8 L17,8 L17,14.0018986 C17,15.1054196 16.0998238,16 15.007983,16 L6,16 L8,14 L15,14 L15,8 Z"></path>
          </svg>
        </div>
        <div class="flex w-full items-center mt-2">
          <span class="text-grey-light text-xs font-light">3:26</span>
          <div class="flex-1 h-1 w-full bg-grey-dark rounded mx-4">
            <div class="bg-grey-light h-full rounded" style="width: 25%;"></div>
          </div>
          <span class="text-grey-light text-xs font-light">4:40</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
    data() {
      return {
        sidebarWidth: '200px'
      }
    },
    computed: {
      playlists() {
          return Array(12).fill().map((_, number) => `Playlist ${number+1}`)
      }
    }
}
</script>

<style src="./assets/styles/main.css"></style>
