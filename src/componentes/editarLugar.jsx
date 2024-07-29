import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const URL = 'https://nivelacion-a9ga.onrender.com/api/lugares';

const EditarLugar = () => {
    const [nombre, setNombre] = useState('');
    const [capacidad, setCapacidad] = useState('');
    const [horario, setHorario] = useState('');
    const [fecha, setFecha] = useState('');
    const { id } = useParams(); // Obtener el id del parámetro de la URL
    const navigate = useNavigate();

    useEffect(() => {
        // Cargar datos del lugar al montar el componente
        const fetchLugar = async () => {
            try {
                const res = await axios.get(`${URL}/${id}`);
                const lugar = res.data;
                setNombre(lugar.nombre);
                setCapacidad(lugar.capacidad);
                setHorario(lugar.horario);
                setFecha(lugar.fecha);
            } catch (error) {
                console.error("Error fetching lugar: ", error);
            }
        };

        fetchLugar();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`${URL}/${id}`, {
                nombre,
                capacidad,
                horario,
                fecha
            });
            navigate('/lugares'); // Redirige a la lista de lugares después de editar
        } catch (error) {
            console.error("Error updating lugar: ", error);
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h2>Editar Lugar</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor='nombre' className='form-label'>Nombre</label>
                            <input
                                type='text'
                                className='form-control'
                                id='nombre'
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='capacidad' className='form-label'>Capacidad</label>
                            <input
                                type='number'
                                className='form-control'
                                id='capacidad'
                                value={capacidad}
                                onChange={(e) => setCapacidad(e.target.value)}
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='horario' className='form-label'>Horario</label>
                            <input
                                type='text'
                                className='form-control'
                                id='horario'
                                value={horario}
                                onChange={(e) => setHorario(e.target.value)}
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='fecha' className='form-label'>Fecha de Apertura</label>
                            <input
                                type='date'
                                className='form-control'
                                id='fecha'
                                value={fecha}
                                onChange={(e) => setFecha(e.target.value)}
                                required
                            />
                        </div>
                        <button type='submit' className='btn btn-primary'>Actualizar Lugar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditarLugar;
