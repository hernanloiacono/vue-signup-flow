<template>
    <div class="bg-white flex flex-col items-center justify-center p-4 min-h-screen">
      <!-- Título centrado y responsive -->
      <h1 class="text-3xl md:text-4xl font-semibold text-center mb-4">Welcome</h1>
      <p class="text-center text-gray-600 mb-6">Choose an action:</p>
  
      <!-- Contenedor de botones apilados -->
      <div class="w-full max-w-md flex flex-col space-y-4 px-4 flex-grow">
        <router-link to="/phoneinput" class="w-full text-gray-600 border border-gray-300 py-2 rounded-lg text-center font-bold hover:bg-gray-200 transition-all">Go to Phone Input</router-link>
        <router-link to="/verify" class="w-full text-gray-600 border border-gray-300 py-2 rounded-lg text-center font-bold hover:bg-gray-200 transition-all">Go to Code Verification</router-link>
        <router-link to="/password" class="w-full text-gray-600 border border-gray-300 py-2 rounded-lg text-center font-bold hover:bg-gray-200 transition-all">Go to Password Setup</router-link>
      </div>
    </div>
  </template>
  