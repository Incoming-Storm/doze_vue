<script setup>
import IconHome from './icons/IconHome.vue'
</script>

<template>
    <router-link to="/homepage" class="homeButton">
        <IconHome />
        <span>Home</span>
    </router-link>
</template>

<style scoped>
    .homeButton {
        padding: 5px 10px;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 1.2rem;
        background-color: #362648;
        cursor: pointer;
        text-decoration: none;
        margin-bottom: 20px;
        border-radius: 8px;
        color: #BF84AE;
        border: none;
        transition: background-color 0.3s ease;
    }

    .homeButton:hover {
        background-color: royalblue;
    }

    svg {
        width: 20px;
        height: 20px;
    }

</style>