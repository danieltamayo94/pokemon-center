<template>
    <footer>
        <div class="footer-container">
            <ButtonComponent label="All" state="active" iconType="active"></ButtonComponent>
            <ButtonComponent label="Favorites" state="disabled" iconType="active2"></ButtonComponent>
        </div>
    </footer>
  </template>
    
    <script setup>
    import ButtonComponent from "./ButtonComponent.vue";
    
    </script>
    
<style scoped>
footer{
    padding: 30px 18px;
    box-shadow: 0px -5px 4px 0px #0000000D;
    background: #FFFFFF;
}

.footer-container{
    display: flex;
    flex-direction: row;
    margin: auto;
    width:315px;
    gap:15px;
}

@media (min-width: 768px) {
    .footer-container{
        width: 570px;
        margin-top: auto;
        gap:20px;
    }
}

</style>