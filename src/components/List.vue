<template>
    <div class="flex min-h-full flex-1">
        <div class="w-sidebar bg-white shadow-sidebar border-r border-grey-lighter">
            <div class="sticky pin-t">
                <div class="p-6 py-8 bg-grey-lightest border-b border-grey-lighter">
                    <span class="font-bold uppercase text-sm text-grey-dark tracking-wide">Filters</span>
                </div>
                <div class="p-6 border-b border-grey-lighter"></div>
                <div class="p-6 border-b border-grey-lighter"></div>
                <div class="p-6 border-b border-grey-lighter"></div>
            </div>
        </div>
        <div class="flex-1 px-16 py-10">
            <div class="mb-6">
                <span class="text-sm text-grey">Intro here</span>
                <h3 class="text-grey-darkest tracking-wide mt-4">16 pools found near NR7</h3>
            </div>

            <div class="bg-white rounded-lg overflow-hidden flex shadow-light mb-8" style="height:250px" v-for="x in (1, 5)" :key="x">
                <div class="w-1/4 h-full bg-cover bg-center" style="background-image: url('http://www.plumsteadpool.co.uk/assets/images/img-20140421-3-2000x1500.jpg')"></div>
                <div class="flex-1 flex flex-col justify-between p-4">
                    <div class="flex">
                        <div class="flex-1">
                            <h3 class="tracking-wide font-bold mb-2 text-2xl">Plumstead Pool</h3>
                            <p class="text-grey text-xs font-extrabold uppercase">15m Family Pool</p>
                        </div>
                        <div class="flex flex-col items-end">
                            <div class="mb-2">
                                <span class="text-xl uppercase text-indigo font-extrabold">From &pound;12.50</span>
                            </div>
                            <div class="flex items-center text-sm text-green-light">
                                <svg class="h-4 w-4 fill-current inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                                </svg>
                                <span class="ml-1">1.3 miles from NR7</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="flex-1">
                            15m
                        </div>
                        <button class="bg-green-light text-white px-6 py-4 rounded">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>