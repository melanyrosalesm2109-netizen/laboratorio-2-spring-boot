import { useEffect, useState } from 'react';
import { studentService } from './services/studentService';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const loadStudents = async () => {
    try {
      setError('');
      const data = await studentService.getAll();
      setStudents(data);
    } catch (error) {
      console.error('Error cargando estudiantes:', error);
      setError('No se pudo conectar con el backend. Revise que Spring Boot esté corriendo.');
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleSaveStudent = async (student) => {
    try {
      setError('');
      setMessage('');

      if (selectedStudent) {
        await studentService.update(selectedStudent.id, student);
        setMessage('Estudiante actualizado correctamente.');
        setSelectedStudent(null);
      } else {
        await studentService.create(student);
        setMessage('Estudiante registrado correctamente.');
      }

      await loadStudents();
    } catch (error) {
      console.error('Error guardando estudiante:', error);
      setError('No se pudo guardar el estudiante. Revise los datos ingresados.');
    }
  };

  const handleEditStudent = (student) => {
    setSelectedStudent(student);
    setMessage('');
    setError('');
  };

  const handleCancelEdit = () => {
    setSelectedStudent(null);
    setMessage('');
    setError('');
  };

  const handleDeleteStudent = async (id) => {
    const confirmDelete = window.confirm('¿Desea eliminar este estudiante?');

    if (!confirmDelete) {
      return;
    }

    try {
      setError('');
      setMessage('');

      await studentService.delete(id);
      setMessage('Estudiante eliminado correctamente.');

      if (selectedStudent && selectedStudent.id === id) {
        setSelectedStudent(null);
      }

      await loadStudents();
    } catch (error) {
      console.error('Error eliminando estudiante:', error);
      setError('No se pudo eliminar el estudiante.');
    }
  };

  return (
    <div className="app">
      <header className="topbar">
        <h1>Student Frontend</h1>
        <p>Aplicación React conectada con Spring Boot REST API</p>
      </header>

      <main className="main-content">
        {message && <p className="message success">{message}</p>}
        {error && <p className="message error">{error}</p>}

        <StudentForm
          onSave={handleSaveStudent}
          selectedStudent={selectedStudent}
          onCancelEdit={handleCancelEdit}
        />

        <StudentList
          students={students}
          onEdit={handleEditStudent}
          onDelete={handleDeleteStudent}
        />
      </main>
    </div>
  );
}

export default App;