<template>
    <div class="container-form">

        <label for="usuario">Usuario:</label>
        <input type="text" id="usuario" v-model="usuario">
        <label for="contraseña">Password:</label>
        <input type="password" id="contraseña" v-model="contraseña">
        <label for="rol">Rol:</label>
        <input type="text" id="rol" v-model="rol">
        <label for="token">Token:</label>
        <input type="text" id="token" v-model="token">
        <div class="button">

            <button @click="obtenerToken">Generar</button>
        </div>
    </div>
</template>

<script>
import { obtenerTokenFachada } from '../clients/AuthClient.js';
export default {
    data() {
        return {
            token: null,
            usuario: '',
            contraseña: '',
            rol: '',
        }
    },
    methods: {
        async obtenerToken() {
            const token = await obtenerTokenFachada(this.usuario, this.contraseña);
            this.token = token.accessToken;
            this.rol = token.role;
            localStorage.setItem('token', this.token);
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
.button {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    width: 40%;

}
</style>