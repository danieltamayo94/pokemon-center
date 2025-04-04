<template>
    <footer>
        <div class="footer-container">
            <ButtonComponent label="All" state="active" iconType="active" @click="$emit('toggle-favorites', false)"></ButtonComponent>
            <ButtonComponent 
                label="Favorites" 
                :state="hasFavorites ? 'active' : 'disabled'"
                iconType="active2"
                :style="{ backgroundColor: hasFavorites ? '#F22539' : '' }"
                @click="$emit('toggle-favorites', true)"
            ></ButtonComponent>
        </div>
    </footer>
</template>

<script setup>
import { computed } from "vue";
import { useFavoritesStore } from "@/stores/useFavoritesStore";
import ButtonComponent from "./ButtonComponent.vue";

const favoritesStore = useFavoritesStore();

// Computed que verifica si hay favoritos
const hasFavorites = computed(() => favoritesStore.favorites.length > 0);
</script>


<style scoped>
footer {
    padding: 30px 18px;
    box-shadow: 0px -5px 4px 0px #0000000D;
    background: #FFFFFF;
    position: fixed;
    z-index: 5;
    bottom: 0;
    left: 0;
    width: 100%;
}

.footer-container {
    display: flex;
    flex-direction: row;
    margin: auto;
    width: 315px;
    gap: 15px;
}

@media (min-width: 768px) {
    .footer-container {
        width: 570px;
        margin-top: auto;
        gap: 20px;
    }
}
</style>
