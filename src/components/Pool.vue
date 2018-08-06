<template>
  <div>
    <div class="flex -mx-2">
      <div class="flex-1 px-2">
        <h1>Plumstead Pool</h1>
        <div class="flex-1 bg-grey overflow-hidden" style="height: 500px">
          <img src="http://www.plumsteadpool.co.uk/assets/images/img-20140421-3-2000x1500.jpg" class="block"/>
        </div>
        <div class="mt-3">
          <div class="flex -mx-2">
            <div class="w-1/4 px-2">
              <div class="bg-grey overflow-hidden">
                <img src="http://www.plumsteadpool.co.uk/assets/images/img-20140421-1-2000x1500.jpg" class="block"/>
              </div>
            </div>
            <div class="w-1/4 px-2">
              <div class="bg-grey overflow-hidden">
                <img src="http://www.plumsteadpool.co.uk/assets/images/img-20140421-2-2000x1500.jpg" class="block"/>
              </div>
            </div>
            <div class="w-1/4 px-2">
              <div class="bg-grey overflow-hidden">
                <img src="http://www.plumsteadpool.co.uk/assets/images/img-20140421-4-2000x1500.jpg" class="block"/>
              </div>
            </div>
            <div class="w-1/4 px-2">
              <div class="bg-grey overflow-hidden">
                <img src="http://www.plumsteadpool.co.uk/assets/images/img-20140531-2000x1500.jpg" class="block"/>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>Here at Plumstead Pool we try to give people the best of both worlds, the convenience and luxury of a warm, well maintained private swimming pool whilst maintaining reasonable rates. We offer both single one off sessions you can book online up until just before the session starts and regular bookings every week at a large discount.</p>
          <p>All our sessions are 1 hour, including changing time. Guests are expected to arrive promptly for their session and leave within the hour.</p>
        </div>
      </div>
      <div class="w-1/3 px-2">
        <div class="bg-white rounded shadow p-4 sticky pin-t mb-4">
          <p class="text-grey-dark">Some details here</p>
          <button class="rounded bg-blue text-white w-full p-3">Book Now</button>
        </div>
        <iframe class="w-full" style="height: 300px; border:0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73266.67771780665!2d1.332612131402002!3d52.69833471331934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x11471352d2abd6cd!2sPlumstead+Pool!5e0!3m2!1sen!2suk!4v1533589742302" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
