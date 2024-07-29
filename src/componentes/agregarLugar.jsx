import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const URL = 'https://nivelacion-a9ga.onrender.com/api/lugares';

const AgregarLugar = () => {
    const [nombre, setNombre] = useState('');
    const [capacidad, setCapacidad] = useState('');
    const [horario, setHorario] = useState('');
    const [fecha, setFecha] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await axios.post(URL, {
                nombre,
                capacidad,
                horario,
                fecha
            });
            navigate('/lugares');  // Redirige a la lista de lugares después de agregar
        } catch (error) {
            console.error("Error adding lugar: ", error);
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h2>Agregar Nuevo Lugar</h2>
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
                        <button type='submit' className='btn btn-primary'>Agregar Lugar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AgregarLugar;
