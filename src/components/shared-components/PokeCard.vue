<template>
    <div class="pokemon-card">
        <button class="close-button" @click="$emit('close')">
            <img src="/img/close-icon.svg" alt="">
        </button>

        <img :src="imageSrc" :alt="name" class="pokemon-image" />
        <section class="info-card">
            <div class="pokemon-details">
                <p><strong>Name:</strong> <span>{{ name }}</span></p>
                <p><strong>Weight:</strong> <span>{{ weight }}</span></p>
                <p><strong>Height:</strong> <span>{{ height }}</span></p>
                <p><strong>Types:</strong> <span>{{ types.join(", ") }}</span></p>
            </div>
            <div class="footer-card">
                <button class="share-button" @click="sharePokemon">
                    Share to my friends
                </button>

                <FavoriteButton></FavoriteButton>
            </div>
        </section>
    </div>
    <div class="overlay"></div>
</template>

<script setup>
import { defineProps } from "vue";
import FavoriteButton from '@/components/shared-components/FavoriteButton.vue';

const props = defineProps({
    imageSrc: String,
    name: String,
    weight: Number,
    height: Number,
    types: Array
});


const sharePokemon = async () => {
    const text = `Name: ${props.name}, Weight: ${props.weight}, Height: ${props.height}, Types: ${props.types.join(", ")}`;

    try {
        await navigator.clipboard.writeText(text);
        alert("Copied to clipboard!");
    } catch (err) {
        console.error("Error copying to clipboard", err);
    }
};
</script>

<style scoped>
.pokemon-card {
    width: 315px;
    height: 506px;
    background: #FFFFFF;
    border-radius: 5px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
}

.pokemon-image{
    width: 100%;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    height: 220px;
    object-fit: contain;
    background-image: url('/public/img/poke-background.svg');
    background-position-x: center;
}

.info-card {
    width: 100%;
    height: 286px;
    padding: 20px 30px;
}

.pokemon-details {
    display: flex;
    flex-direction: column;
    gap:10px;
}

.pokemon-details p{
    color:#5E5E5E;
    font-family: 'Lato';
    font-size:1.125rem;
    border-bottom: 1px solid #E8E8E8;
    padding: 0px;
    padding-bottom:10px;
}

.pokemon-details p span{
    text-transform: capitalize;
}

.close-button {
    position: absolute;
    top: 15px;
    right: 15px;
    background: transparent;
    border:none;
    cursor: pointer;
    z-index: 2;
    width: 26px;
    height: 26px;
}

.footer-card {
    display: flex;
    flex-direction: row;
    gap: 16px;
    width: 255px;
    margin: auto;
    margin-top:20px;
}

.share-button {
    background: #f22539;
    color: white;
    border: none;
    border-radius: 60px;
    width: 195px;
    height: 44px;
    font-weight: bold;
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.125rem;
    font-family: "Lato";
}

.overlay {
    background: rgba(66, 65, 65, 0.8);
    width: 100vw;
    height: 100vh;
    position: absolute;

}

@media (min-width: 768px) {
    .pokemon-card {
    width: 570px;
    }

    .pokemon-image {
        object-fit: contain;
    }

    .footer-card{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }
}

</style>