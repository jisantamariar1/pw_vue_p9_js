<template>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Marca</th>
                <th>Chasis</th>
                <th>Fecha de Fabricación</th>
                <th>Accion</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="vehiculo in vehiculos" :key="vehiculo.chasis">
                <td>{{ vehiculo.id }}</td>
                <td>{{ vehiculo.marca }}</td>
                <td>{{ vehiculo.chasis }}</td>
                <td>{{ vehiculo.fechafabricacion }}</td>
                <td><button>Eliminar</button></td>
            </tr>
        </tbody>
    </table>
  
</template>

<script>
export default {
    data() {
        return {
            vehiculos: [
                {
                    id: 1,
                    marca: 'Toyota',
                    modelo: 'Corolla',
                    chasis: '1234567890',
                    fechafabricacion: '2020-01-01',
                    fechamatriculacion: '2020-01-01'
                },
                {
                    id: 2,
                    marca: 'Honda',
                    modelo: 'Civic',
                    chasis: '0987654321',
                    fechafabricacion: '2019-01-01',
                    fechamatriculacion: '2019-01-01'
                }
            ]
        }
    },

}
</script>

<style>
td, th {
    border: 1px solid black;
    padding: 8px;
}

</style>