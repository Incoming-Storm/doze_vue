<script setup>
</script>

<template>
    <router-link to="/homepage" class="homeButton">Home</router-link>
</template>

<style scoped>
    .homeButton {
        display: inline;
        font-size: 1.2rem;
        color: rgb(11, 8, 8);
        cursor: pointer;
        text-decoration: none;
        margin-bottom: 20px;
    }

    .homeButton:hover {
        text-decoration: underline;
    }

</style>