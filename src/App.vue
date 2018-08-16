<template>
  <div id="app" class="bg-grey-darkest min-h-screen h-screen overflow-hidden font-sans flex flex-col">
    <div class="flex flex-1">
      <!-- Sidebar -->
      <!-- @todo - pretty scroll bar? -->
      <div class="bg-black pt-2 flex flex-col overflow-hidden" :style="{ width: sidebarWidth }">
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
      <!-- End Sidebar -->

      <!-- Mid section -->
      <div class="flex-1 relative overflow-y-auto ">
        <!-- Search Bar -->
        <div class="flex items-center sticky pin-t py-3 px-6 w-full bg-black">
          <div class="flex">
            <div class="flex items-center mr-4">
              <svg class="w-6 h-6 fill-current text-grey hover:text-grey-lightest inline-block mr-2" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g fill="currentColor">
                    <polygon points="7.05025253 9.29289322 6.34314575 10 12 15.6568542 13.4142136 14.2426407 9.17157288 10 13.4142136 5.75735931 12 4.34314575"></polygon>
                  </g>
                </g>
              </svg>
              <svg class="w-6 h-6 fill-current text-grey hover:text-grey-lightest inline-block" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g fill="currentColor">
                    <polygon points="12.9497475 10.7071068 13.6568542 10 8 4.34314575 6.58578644 5.75735931 10.8284271 10 6.58578644 14.2426407 8 15.6568542 12.9497475 10.7071068"></polygon>
                  </g>
                </g>
              </svg>
            </div>
            <div class="bg-white rounded-full px-2 flex items-center overflow-hidden">
              <svg class="w-3 h-3 fill-current text-black block mr-2" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="search" fill="#000000">
                    <path d="M11.1921711,12.6063847 C10.0235906,13.4815965 8.5723351,14 7,14 C3.13400675,14 0,10.8659932 0,7 C0,3.13400675 3.13400675,0 7,0 C10.8659932,0 14,3.13400675 14,7 C14,8.5723351 13.4815965,10.0235906 12.6063847,11.1921711 L14.0162265,12.6020129 C14.6819842,12.4223519 15.4217116,12.5932845 15.9484049,13.1199778 L18.7795171,15.95109 C19.5598243,16.7313971 19.5646685,17.9916807 18.7781746,18.7781746 C17.997126,19.5592232 16.736965,19.5653921 15.95109,18.7795171 L13.1199778,15.9484049 C12.5960188,15.4244459 12.4217025,14.6840739 12.6018353,14.0160489 L11.1921711,12.6063847 Z M7,12 C9.76142375,12 12,9.76142375 12,7 C12,4.23857625 9.76142375,2 7,2 C4.23857625,2 2,4.23857625 2,7 C2,9.76142375 4.23857625,12 7,12 Z" id="Combined-Shape"></path>
                  </g>
                </g>
              </svg>
              <input type="text" class="py-1 text-sm text-black" placeholder="Search"/>
            </div>
          </div>
          <div class="flex justify-end flex-1">
            <div class="flex items-center text-white relative">
              <svg class="w-4 h-4 fill-current block mr-3" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="mood-happy" fill="currentColor">
                    <path d="M10,20 C15.5228475,20 20,15.5228475 20,10 C20,4.4771525 15.5228475,0 10,0 C4.4771525,0 0,4.4771525 0,10 C0,15.5228475 4.4771525,20 10,20 Z M10,18 C14.418278,18 18,14.418278 18,10 C18,5.581722 14.418278,2 10,2 C5.581722,2 2,5.581722 2,10 C2,14.418278 5.581722,18 10,18 Z M6.5,9 C7.32842712,9 8,8.32842712 8,7.5 C8,6.67157288 7.32842712,6 6.5,6 C5.67157288,6 5,6.67157288 5,7.5 C5,8.32842712 5.67157288,9 6.5,9 Z M13.5,9 C14.3284271,9 15,8.32842712 15,7.5 C15,6.67157288 14.3284271,6 13.5,6 C12.6715729,6 12,6.67157288 12,7.5 C12,8.32842712 12.6715729,9 13.5,9 Z M15.6585886,12 C14.8349158,14.3303847 12.6124377,16 10,16 C7.38756235,16 5.16508423,14.3303847 4.34141142,12 L15.6585886,12 L15.6585886,12 Z" id="Combined-Shape"></path>
                  </g>
                </g>
              </svg>
              <span class="font-light text-sm">joshralph93</span>
              <div class="relative cursor-pointer" @click="showUserDropdown = !showUserDropdown">
                <span class="absolute pin-t pin-r rounded-full w-2 h-2 mt-1 bg-blue"></span>
                <svg class="w-6 h-6 fill-current block ml-5" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="cheveron-down" fill="currentColor">
                      <polygon id="Combined-Shape" points="9.29289322 12.9497475 10 13.6568542 15.6568542 8 14.2426407 6.58578644 10 10.8284271 5.75735931 6.58578644 4.34314575 8"></polygon>
                    </g>
                  </g>
                </svg>
              </div>

              <div class="absolute pin-r pin-t-full bg-grey-darker rounded-lg shadow-md overflow-hidden mt-3" :class="{hidden: !showUserDropdown}">
                <!-- @todo - figure arrow -->
                <!--<span class="border-l-5 border-r-5 border-b-5 border-solid border-b-grey-darker"></span>-->
                <ul class="list-reset">
                  <li><a href="" class="px-6 py-3 block text-grey-light whitespace-no-wrap no-underline text-sm">Private Session</a></li>
                  <li><a href="" class="px-6 py-3 block text-grey-light whitespace-no-wrap no-underline text-sm">Account</a></li>
                  <li><a href="" class="px-6 py-3 block text-grey-light whitespace-no-wrap no-underline text-sm">Settings</a></li>
                  <li><a href="" class="px-6 py-3 block text-grey-light whitespace-no-wrap no-underline text-sm bg-blue text-white">Update available. Restart now.</a></li>
                  <li><a href="" class="px-6 py-3 block text-grey-light whitespace-no-wrap no-underline text-sm">Logout</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- End Search Bar -->

        <!-- CONTENT @todo - extrect -->
        <div class="p-6">
          <ul class="list-reset flex -mx-4 mb-5 mt-32">
            <li class="group text-white uppercase text-xs tracking-wide mx-4 py-3 relative">
              Overview
              <span class="w-1/2 border-b-2 border-green-dark m-auto absolute pin-b pin-l pin-r opacity-100 group-hover:opacity-100"></span>
            </li>
            <li class="group hover:text-white text-grey-light uppercase text-xs tracking-wide mx-4 py-3 relative">
              Podcasts
              <span class="w-1/2 border-b-2 border-green-dark m-auto absolute pin-b pin-l pin-r opacity-0 group-hover:opacity-100"></span>
            </li>
            <li class="group hover:text-white text-grey-light uppercase text-xs tracking-wide mx-4 py-3 relative">
              Charts
              <span class="w-1/2 border-b-2 border-green-dark m-auto absolute pin-b pin-l pin-r opacity-0 group-hover:opacity-100"></span>
            </li>
            <li class="group hover:text-white text-grey-light uppercase text-xs tracking-wide mx-4 py-3 relative">
              Genres &amp; Moods
              <span class="w-1/2 border-b-2 border-green-dark m-auto absolute pin-b pin-l pin-r opacity-0 group-hover:opacity-100"></span>
            </li>
            <li class="group hover:text-white text-grey-light uppercase text-xs tracking-wide mx-4 py-3 relative">
              New Releases
              <span class="w-1/2 border-b-2 border-green-dark m-auto absolute pin-b pin-l pin-r opacity-0 group-hover:opacity-100"></span>
            </li>
            <li class="group hover:text-white text-grey-light uppercase text-xs tracking-wide mx-4 py-3 relative">
              Discover
              <span class="w-1/2 border-b-2 border-green-dark m-auto absolute pin-b pin-l pin-r opacity-0 group-hover:opacity-100"></span>
            </li>
            <li class="group hover:text-white text-grey-light uppercase text-xs tracking-wide mx-4 py-3 relative">
              Concerts
              <span class="w-1/2 border-b-2 border-green-dark m-auto absolute pin-b pin-l pin-r opacity-0 group-hover:opacity-100"></span>
            </li>
          </ul>

          <div class="mb-20">
            <div class="border-b border-grey-darker py-3 flex items-center mb-4">
              <div class="flex-1">
                <h4 class="text-white">Your perfect evening...</h4>
              </div>
              <div class="flex items-center">
                <svg class="w-6 h-6 fill-current text-grey hover:text-grey-lightest inline-block mr-2" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g fill="currentColor">
                      <polygon points="7.05025253 9.29289322 6.34314575 10 12 15.6568542 13.4142136 14.2426407 9.17157288 10 13.4142136 5.75735931 12 4.34314575"></polygon>
                    </g>
                  </g>
                </svg>
                <svg class="w-6 h-6 fill-current text-grey hover:text-grey-lightest inline-block" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g fill="currentColor">
                      <polygon points="12.9497475 10.7071068 13.6568542 10 8 4.34314575 6.58578644 5.75735931 10.8284271 10 6.58578644 14.2426407 8 15.6568542 12.9497475 10.7071068"></polygon>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div class="flex -mx-2">
              <div class="w-1/4 mx-2">
                <div class="w-full bg-grey-dark mb-2 bg-cover bg-center h-32 p-32" style=" background-image: url('https://i.scdn.co/image/4ddf4734de3d60fda560fbab66dfd9f8cc9f36a7')"></div>
                <p class="text-white text-sm mb-2">Chilled Sexy R&amp;B</p>
                <p class="text-grey text-xs mb-2">
                  Dim the lights and chill with this selection of classic slow jamz with a few modern jamz thrown in...
                </p>
                <p class="text-grey-light uppercase text-xs tracking-wide">150,293 Followers</p>
              </div>
              <div class="w-1/4 mx-2">
                <div class="w-full bg-grey-dark mb-2 bg-cover bg-center py-32 h-32" style="background-image: url('https://i.scdn.co/image/3b7e8199da16b8d83cd2323a3abd8b700248aea8')"></div>
                <p class="text-white text-sm mb-2">Songs to Sing in the Shower</p>
                <p class="text-grey text-xs mb-2">
                  Dim the lights and chill with this selection of classic slow jamz with a few modern jamz thrown in...
                </p>
                <p class="text-grey-light uppercase text-xs tracking-wide">150,293 Followers</p>
              </div>
              <div class="w-1/4 mx-2">
                <div class="w-full bg-grey-dark mb-2 bg-cover bg-center py-32 h-32" style="background-image: url('https://contentpl-a.akamaihd.net/images/playlists/image/medium/f45cc73d2261a37dd2da0a5f1d783f0b.jpg')"></div>
                <p class="text-white text-sm mb-2">Discover Weekly</p>
                <p class="text-grey text-xs mb-2">
                  Dim the lights and chill with this selection of classic slow jamz with a few modern jamz thrown in...
                </p>
                <p class="text-grey-light uppercase text-xs tracking-wide">150,293 Followers</p>
              </div>
              <div class="w-1/4 mx-2">
                <div class="w-full bg-grey-dark mb-2 bg-cover bg-center py-32 h-32" style="background-image: url('https://e.snmc.io/lk/f/l/b172fdaabff07f09de61b2ef7ce5a925/1228762.jpg')"></div>
                <p class="text-white text-sm mb-2">Live Covers</p>
                <p class="text-grey text-xs mb-2">
                  Dim the lights and chill with this selection of classic slow jamz with a few modern jamz thrown in...
                </p>
                <p class="text-grey-light uppercase text-xs tracking-wide">150,293 Followers</p>
              </div>
            </div>
          </div>
          <div class="mb-20">
            <div class="border-b border-grey-darker py-3 flex items-center mb-4">
              <div class="flex-1">
                <h4 class="text-white">Your perfect evening...</h4>
              </div>
              <div class="flex items-center">
                <svg class="w-6 h-6 fill-current text-grey hover:text-grey-lightest inline-block mr-2" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g fill="currentColor">
                      <polygon points="7.05025253 9.29289322 6.34314575 10 12 15.6568542 13.4142136 14.2426407 9.17157288 10 13.4142136 5.75735931 12 4.34314575"></polygon>
                    </g>
                  </g>
                </svg>
                <svg class="w-6 h-6 fill-current text-grey hover:text-grey-lightest inline-block" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g fill="currentColor">
                      <polygon points="12.9497475 10.7071068 13.6568542 10 8 4.34314575 6.58578644 5.75735931 10.8284271 10 6.58578644 14.2426407 8 15.6568542 12.9497475 10.7071068"></polygon>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div class="flex -mx-2">
              <div class="w-1/4 mx-2">
                <div class="w-full bg-grey-dark mb-2" style="height: 270px;"></div>
                <p class="text-white text-sm mb-2">Slow Jamz</p>
                <p class="text-grey text-xs mb-2">
                  Dim the lights and chill with this selection of classic slow jamz with a few modern jamz thrown in...
                </p>
                <p class="text-grey-light uppercase text-xs tracking-wide">150,293 Followers</p>
              </div>
              <div class="w-1/4 mx-2">
                <div class="w-full bg-grey-dark mb-2" style="height: 270px;"></div>
                <p class="text-white text-sm mb-2">Slow Jamz</p>
                <p class="text-grey text-xs mb-2">
                  Dim the lights and chill with this selection of classic slow jamz with a few modern jamz thrown in...
                </p>
                <p class="text-grey-light uppercase text-xs tracking-wide">150,293 Followers</p>
              </div>
              <div class="w-1/4 mx-2">
                <div class="w-full bg-grey-dark mb-2" style="height: 270px;"></div>
                <p class="text-white text-sm mb-2">Slow Jamz</p>
                <p class="text-grey text-xs mb-2">
                  Dim the lights and chill with this selection of classic slow jamz with a few modern jamz thrown in...
                </p>
                <p class="text-grey-light uppercase text-xs tracking-wide">150,293 Followers</p>
              </div>
              <div class="w-1/4 mx-2">
                <div class="w-full bg-grey-dark mb-2" style="height: 270px;"></div>
                <p class="text-white text-sm mb-2">Slow Jamz</p>
                <p class="text-grey text-xs mb-2">
                  Dim the lights and chill with this selection of classic slow jamz with a few modern jamz thrown in...
                </p>
                <p class="text-grey-light uppercase text-xs tracking-wide">150,293 Followers</p>
              </div>
            </div>
          </div>
        </div>
        <router-view/>
        <!-- END CONTENT -->
      </div>
      <!-- End Mid Section -->

      <!-- Right Sidebar -->
      <div style="width: 260px" class="bg-black">

      </div>
      <!-- End Right Sidebar -->

    </div>

    <!-- Player & Controls -->
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
/**
 * Anything implemented here currently is done so to facilitate styling. will likely all be moved.
 */
export default {
  name: 'App',
  data() {
    return {
      sidebarWidth: '200px',
        showUserDropdown: false
    }
  },
  computed: {
    playlists() {
        return Array(12).fill().map((_, number) => `Playlist ${number+1}`)
    }
  },
  created() {

  }
}
</script>

<style src="./assets/styles/main.css"></style>
