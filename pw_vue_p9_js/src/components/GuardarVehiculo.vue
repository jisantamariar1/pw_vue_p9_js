<template>
    <div class="container-form">
        <label for="token">Token:</label>
        <input type="text" id="token" v-model="token">
        <label for="marca">Marca:</label>
        <input type="text" id="marca" v-model="marca">
        <label for="modelo">Modelo:</label>
        <input type="text" id="modelo" v-model="modelo">
        <label for="chasis">Chasis:</label>
        <input type="text" id="chasis" v-model="chasis">
        <div class="fechasDe">

            <label for="fechaFabricacion">Fecha de Fabricación:</label>
            <input type="date" id="fechaFabricacion" v-model="fechaFabricacion">
            <label for="fechaMatricula">Fecha de Matricula:</label>
            <input type="date" id="fechaMatricula" v-model="fechaMatricula">
        </div>
        <button @click="guardarVehiculo">Guardar</button>
    </div>


</template>

<script>
export default {
    data() {
        return {
            token: null,
            marca: '',
            modelo: '',
            chasis: '',
            fechaFabricacion: '',
            fechaMatricula: ''
        }
    },
    methods:{
        
    }

}
</script>

<style scoped>
.container-form {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 20px;
    max-width: 400px;
    margin: 0 auto;
}
.fechasDe {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
}   
button {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    width: 40%;

}
</style>