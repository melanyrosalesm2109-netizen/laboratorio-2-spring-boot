import { useEffect, useState } from 'react';
import { studentService } from './services/studentService';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');

  const loadStudents = async () => {
    try {
      setError('');
      const data = await studentService.getAll();
      setStudents(data);
    } catch (error) {
      console.error('Error cargando estudiantes:', error);
      setError('No se pudo conectar con el backend.');
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  return (
      <div className="app">
        <h1>Student Frontend</h1>
        <p>Conexión con Spring Boot REST API</p>

        <button onClick={loadStudents}>Cargar estudiantes</button>

        {error && <p className="error">{error}</p>}

        <h2>Respuesta del backend:</h2>
        <pre>{JSON.stringify(students, null, 2)}</pre>
      </div>
  );
}

export default App;