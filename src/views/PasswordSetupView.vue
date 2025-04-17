<template>
    <div class="min-h-screen bg-white p-4 flex flex-col">
      <!-- Go Back Icon and Title -->
      <div class="flex items-center mb-6">
        <font-awesome-icon :icon="['fas', 'chevron-left']" class="text-xl text-gray-600 mr-2" />
        <h1 class="text-2xl text-gray-600 font-semibold text-center w-full">Add your password</h1>
      </div>
  
      <!-- Password Label and Input -->
      <label for="password" class="block text-sm text-gray-600 mb-2 text-left font-bold">Password</label>
      <div class="relative w-full">
        <input
          v-model="password"
          :type="passwordVisible ? 'text' : 'password'"
          id="password"
          placeholder="Password"
          class="w-full border border-gray-300 p-2 rounded mb-2 bg-white text-black"
        />
        <font-awesome-icon
          :icon="passwordVisible ? ['fas', 'eye'] : ['fas', 'eye-slash']"
          @click="togglePasswordVisibility"
          class="absolute right-3 top-3 text-gray-600 cursor-pointer"
        />
      </div>
  
      <p class="text-sm text-gray-500 mb-6">
        Must be 6 or more characters and contain at least 1 number and 1 special character
      </p>
  
      <!-- Continue Button -->
      <button class="w-full bg-gray-600 text-white py-2 rounded-lg font-bold">Continue</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faChevronLeft, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
  
  library.add(faChevronLeft, faEye, faEyeSlash);
  
  const password = ref('');
  const passwordVisible = ref(false);
  
  const togglePasswordVisibility = () => {
    passwordVisible.value = !passwordVisible.value;
  };
  </script>
  