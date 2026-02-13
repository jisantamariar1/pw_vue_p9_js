<template>
    <div class="container-view">

        <h1>Vehiculo</h1>
        <GuardarVehiculo/>
        <TablaVehiculos/>
    </div>
  
</template>

<script>
import GuardarVehiculo from '../components/GuardarVehiculo.vue';
import TablaVehiculos from '../components/TablaVehiculos.vue';
export default {
    components: {
        GuardarVehiculo,
        TablaVehiculos
    }
}
</script>

<style>

</style>