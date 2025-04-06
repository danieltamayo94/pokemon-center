<template>
    <div class="welcome">
        <img src="/img/pikachu.svg" alt="" class="welcome-img">
        <h2>Welcome to Pokédex</h2>
        <p>The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
        <ButtonComponent  @click="goToHome" label="Get started"></ButtonComponent>
    </div>
  </template>
  
  <script setup>
    import ButtonComponent from './shared-components/ButtonComponent.vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    function goToHome() {
        router.push('/home'); 
    }

  </script>
  
  
  
  <style>
.welcome{
    margin: 70px auto;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.welcome h2{
    color:var(--color-dark-gray);
    font-weight: var(--font-weight-bold);
    font-size:var(--font-size-x-lg);
    font-family: var(--font-base);
    line-height: 100%;
    letter-spacing: 0%;
    margin-top: 60px;
}

.welcome p{
    font-size:var(--font-size-md);
    font-family: var(--font-base);
    line-height: 150%;
    letter-spacing: 0%;
    margin-top: 30px;
    color:var(--color-dark-light);
    width: 315px;
    text-align: center;
}

.welcome .button-componente{
    margin-top:50px;
}

@media (min-width:720px) {
    .welcome p{
        width: 570px;
    }
}
  </style>