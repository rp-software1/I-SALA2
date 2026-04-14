import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        //  Simulación de login
        if (email === "mesero@restaurante.com" && password === "123456") {

            // Guardar token
            localStorage.setItem('token', 'abc123');

            // Redirigir al menú
            navigate('/menu');

        } else {
            alert('Credenciales incorrectas');
        }
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center'>

            <div className='bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm'>

                <div className='text-center mb-6'>
                    <h1 className='text-2xl font-bold text-gray-800'>
                        🍽️ RPSoft
                    </h1>
                    <p className='text-gray-400 text-sm mt-1'>
                        Sistema de comandas
                    </p>
                </div>

                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

                    <div>
                        <label className='text-sm font-medium text-gray-600'>
                            Email
                        </label>
                        <input
                            type='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder='mesero@restaurante.com'
                            className='w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg'
                        />
                    </div>

                    <div>
                        <label className='text-sm font-medium text-gray-600'>
                            Contraseña
                        </label>
                        <input
                            type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder='123456'
                            className='w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg'
                        />
                    </div>

                    <button
                        type='submit'
                        className='w-full bg-blue-600 text-white py-2 rounded-lg'
                    >
                        Ingresar al sistema
                    </button>

                </form>
            </div>

        </div>
    );
}