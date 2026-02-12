<template>
    <div class="container-view">

        <h1>Token</h1>
        <ConsultarToken/>
    </div>
    
</template>

<script>

import ConsultarToken from '../components/ConsultarToken.vue';
export default {
    components: {
        ConsultarToken
    },

}
</script>

<style scoped>
.container-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 20px;
}

</style>