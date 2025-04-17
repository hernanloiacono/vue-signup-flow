<template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center ">
      <div class="bg-white w-full max-w-sm p-6 flex flex-col justify-between rounded-2xl shadow-lg">
        <div>
          <div class="flex items-center mb-4">
           <font-awesome-icon :icon="['fas', 'chevron-left']" class="text-xl text-gray-600" />
           <h1 class="text-2xl text-gray-600 font-semibold text-center mb-3  w-full">Sign up</h1>
          </div>
          <p class="text-sm text-gray-500 mb-4 text-left">Enter your phone number.</p>
          <div class="space-y-4">
            <div class="flex space-x-2">

          <!-- VueTelInput como selector desactivado -->
          <vue-tel-input
            v-model="phone"
            :preferred-countries="['il', 'us', 'ar', 'es']"
            :mode="'international'"
            :input-options="{ showDialCode: true }"
            :wrapper-options="{ style: { width: '100%' } }"
            class="w-[40%] border border-gray-300 px-3 py-2 rounded-lg"
          />
          <!-- Input para el número -->
          <input
            type="text"
            placeholder="Phone number"
            class="w-[60%] border border-gray-300 px-3 py-2 rounded-lg text-black bg-white"
          />
        </div>
            <p class="text-sm text-gray-500 mb-4 text-left">We will send you a verification code to this number.</p>
  
            <button class="w-full bg-gray-800 text-white py-2 rounded-lg font-bold">Sign up</button>
  
            <div class="my-6 flex items-center justify-center">
              <div class="flex-1 border-t border-gray-300"></div>
              <span class="mx-4 text-sm text-gray-500">OR</span>
              <div class="flex-1 border-t border-gray-300"></div>
            </div>
  
            <div class="space-y-2">
              <!-- Apple -->
              <button class="w-full bg-gray-400 py-2 rounded-lg flex items-center justify-center font-bold px-4 relative">
                <font-awesome-icon :icon="['fab', 'apple']" class="text-white w-5 h-5 absolute left-4" />
                <span class="text-black text-center w-full">Sign up with Apple</span>
                <span class="w-5 h-5 invisible absolute right-4">.</span>
              </button>
              <!-- Google -->
              <button class="w-full bg-gray-400 py-2 rounded-lg flex items-center justify-center font-bold px-4 relative">
                <font-awesome-icon :icon="['fab', 'google']" class="text-white w-5 h-5 absolute left-4" />
                <span class="text-black text-center">Sign up with Google</span>
              </button>
              <!-- Facebook -->
              <button class="w-full bg-gray-400 py-2 rounded-lg flex items-center justify-center font-bold px-4 relative">
                <font-awesome-icon :icon="['fab', 'facebook']" class="text-white w-5 h-5 absolute left-4" />
                <span class="text-black text-center">Sign up with Facebook</span>
              </button>
              <!-- Email -->
              <button class="w-full bg-gray-400 py-2 rounded-lg flex items-center justify-center font-bold px-4 relative">
                <font-awesome-icon icon="envelope" class="text-white w-5 h-5 absolute left-4" />
                <span class="text-black text-center">Sign up with Email</span>
              </button>
            </div>
          </div>
        </div>
  
        <div class="text-center text-sm text-gray-500 mt-6 space-y-2">
          <p>
            By continuing, you agree to the Dalilah
            <a href="#" class="text-blue-500">Terms & Conditions</a> and
            <a href="#" class="text-blue-500"> Privacy policy</a>.
          </p>
          <p>
            Already a user? <a href="#" class="text-blue-500">Login</a>
          </p>
          <p>
            Not ready to sign up? <a href="#" class="text-blue-500">Guest mode</a>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { VueTelInput } from 'vue-tel-input';
  import 'vue-tel-input/vue-tel-input.css';
  
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faApple, faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
  import { faEnvelope, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  
  library.add(faApple, faGoogle, faFacebook, faEnvelope, faChevronLeft);
  
  export default {
    components: {
      VueTelInput,
      FontAwesomeIcon,
    },
    setup() {
      const phone = ref(null);
      return { phone };
    },
  };
  </script>
  
  <style>
  @import '@fortawesome/fontawesome-svg-core/styles.css';

    .vue-tel-input input {
    background-color: white !important;
    color: black !important;
    }
  </style>
  