<script setup>
</script>

<template>
    <router-link to="/homepage" class="homeButton">Home</router-link>
</template>

<style scoped>
    .homeButton {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        height: 50px;
        font-size: 1.2rem;
        padding: 10px;
        border-radius: 5px;
        background-color: #BF84AE;
        color: rgb(11, 8, 8);
        cursor: pointer;
        transition: background-color 0.3s;
        margin-bottom: 20px;
    }

    .homeButton:hover {
        background-color: #6b3780;
    }

</style>