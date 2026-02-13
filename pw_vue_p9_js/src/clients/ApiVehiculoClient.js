import axios from "axios";
const guardarVehiculo = async (body) => {
    const token = localStorage.getItem("token");
    const data = await axios.post(`http://localhost:8081/consecionario/api/v1.0/vehiculos`, body, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    return data;
}
export const guardarVehiculoFachada = async (body) => {
    const data = await guardarVehiculo(body);
    return data;
}