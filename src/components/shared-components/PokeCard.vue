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

                <FavoriteButton :pokemon="{ name, imageSrc, weight, height, types }"></FavoriteButton>
            </div>
        </section>
        <CopiedNotification :visible="copied" />
    </div>

</template>

<script setup>
import { ref, defineProps } from "vue";
import FavoriteButton from '@/components/shared-components/FavoriteButton.vue';
import CopiedNotification from '@/components/shared-components/CopiedNotification.vue';



const copied = ref(false);


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
        copied.value = true;

        setTimeout(() => {
            copied.value = false;
        }, 2000);

    } catch (err) {
        console.error("Error copying to clipboard", err);
    }
};


</script>

<style scoped>
.pokemon-card {
    width: 315px;
    height: 506px;
    background: var(--color-white);
    border-radius: var(--radius-sm);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
}

.pokemon-image {
    width: 100%;
    border-top-right-radius: var(--radius-sm);
    border-top-left-radius: var(--radius-sm);
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
}

.pokemon-details p {
    color: var(--color-dark-light);
    font-family: var(--font-base);
    font-size: var(--font-size-md);
    border-bottom: 1px solid var(--color-divider);
    padding: 10px 0px;
}

.pokemon-details p span {
    text-transform: capitalize;
}

.close-button {
    position: absolute;
    top: 15px;
    right: 15px;
    background: transparent;
    border: none;
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
    margin-top: 20px;
}

.share-button {
    background: var(--color-primary);
    color: var(--color-white);
    border: none;
    border-radius: var(--radius-md);
    width: 195px;
    height: 44px;
    font-weight: var(--font-weight-bold);
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-md);
    font-family: var(--font-base);
}

@media (min-width: 768px) {
    .pokemon-card {
        width: 570px;
    }

    .pokemon-image {
        object-fit: contain;
    }

    .footer-card {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }
}
</style>