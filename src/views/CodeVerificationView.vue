<template>
    <div class="min-h-screen bg-white p-4 flex flex-col justify-between max-w-sm">
      <div>
        <div class="flex items-center mb-6">
            <font-awesome-icon :icon="['fas', 'chevron-left']" class="text-xl text-gray-600 mr-2" />
            <h1 class="text-2xl text-gray-600 font-semibold text-center w-full">Verify your mobile number</h1>
        </div>
        <p class="text-center text-gray-600 mb-4">Please enter the code we sent to +9725555555</p>
        <div class="flex justify-between gap-2 mb-6">
            <input
                type="text"
                maxlength="1"
                class="w-16 h-12 text-center border border-gray-400 rounded-md bg-white text-black text-xl focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <input
                type="text"
                maxlength="1"
                class="w-16 h-12 text-center border border-gray-400 rounded-md bg-white text-black text-xl focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <input
                type="text"
                maxlength="1"
                class="w-16 h-12 text-center border border-gray-400 rounded-md bg-white text-black text-xl focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <input
                type="text"
                maxlength="1"
                class="w-16 h-12 text-center border border-gray-400 rounded-md bg-white text-black text-xl focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            </div>
        <button class="w-full bg-gray-600 text-white py-2 rounded-lg mb-4 font-bold">Continue</button>
        <button class="w-full text-gray-600 border-gray-600 py-2 rounded-lg mb-4 font-bold">Resend verification code</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
  
  library.add(faChevronLeft);
  </script>