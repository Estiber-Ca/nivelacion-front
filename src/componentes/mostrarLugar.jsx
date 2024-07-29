import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const URL = 'https://nivelacion-a9ga.onrender.com/api/lugares';

const MostrarLugar = () => {
    
    const [lugares, setLugares] = useState([]);

    useEffect(() => {
        getLugares();
    }, []);

    const getLugares = async () => {
        const res = await axios.get(URL);
        setLugares(res.data);
    }

    const eliminarLugar = async (id) => {
        await axios.delete(`${URL}/${id}`);
        getLugares();
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/lugares/agregar' className='btn btn-primary mt-2 mb-2'>Agregar Lugar</Link>
                    <table className='table'>
                        <thead className='tablehebg'>
                            <tr>
                                <th>Nombre</th>
                                <th>Capacidad</th>
                                <th>Horario</th>
                                <th>Fecha apertura</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lugares.map((tar, index) => (
                                <tr key={index}>
                                    <td>{tar.nombre}</td>
                                    <td>{tar.capacidad}</td>
                                    <td>{tar.horario}</td>
                                    <td>{tar.fecha}</td>
                                    <td>
                                        <Link to={'/lugares/editar/${tar._id}'} className='btn btn-success mt-2 mb-2'>Editar</Link>
                                        <button onClick={() => eliminarLugar(tar._id)} className='btn btn-danger mt-2 mb-2'>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default MostrarLugar;
