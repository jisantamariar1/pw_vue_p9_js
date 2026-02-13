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
            <input type="text" id="fechaFabricacion" v-model="fechafabricacion">
            <label for="fechaMatricula">Fecha de Matricula:</label>
            <input type="text" id="fechaMatricula" v-model="fechamatriculacion">
        </div>
        <button @click="guardarVehiculo">Guardar</button>
    </div>


</template>

<script>
import { guardarVehiculoFachada } from '../clients/ApiVehiculoClient.js';
export default {
    data() {
        return {
            token: null,
            marca:'',
            modelo:'',
            chasis:'',
            fechafabricacion:'',
            fechamatriculacion:''
        }
    },
    methods:{
        async guardarVehiculo() {
            const vehiculo = {
                marca: this.marca,
                modelo: this.modelo,
                chasis: this.chasis,
                fechafabricacion: this.fechafabricacion,
                fechamatriculacion: this.fechamatriculacion,
            }
            await guardarVehiculoFachada(vehiculo);
            this.token = localStorage.getItem('token');
        }

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