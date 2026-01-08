<script setup>
    import { ref } from 'vue';
    
    defineProps({
    msg: {
        type: String,
        required: true,
    },
    })
</script>

<template>
    <div class="homeButton">
        <router-link to="/homepage"><button>Home</button></router-link>
    </div>
</template>

<style scoped>
    .homeButton {
        width: 150px;
        height: 50px;
        font-size: 1.2rem;
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: #86aad9;
        color: rgb(11, 8, 8);
        cursor: pointer;
        transition: background-color 0.3s;
    }
    
    .homeButton:hover {
        background-color: #6b3780;
    }

</style>