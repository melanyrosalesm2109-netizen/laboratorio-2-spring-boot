import { useEffect, useState } from 'react';

function StudentForm({ onSave, selectedStudent, onCancelEdit }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: ''
  });

  useEffect(() => {
    if (selectedStudent) {
      setFormData({
        firstName: selectedStudent.firstName,
        lastName: selectedStudent.lastName,
        email: selectedStudent.email,
        age: selectedStudent.age
      });
    } else {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        age: ''
      });
    }
  }, [selectedStudent]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const student = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      age: Number(formData.age)
    };

    onSave(student);

    if (!selectedStudent) {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        age: ''
      });
    }
  };

  return (
    <section className="card">
      <h2>{selectedStudent ? 'Editar estudiante' : 'Registrar estudiante'}</h2>

      <form onSubmit={handleSubmit} className="student-form">
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Ejemplo: Melany"
            required
          />
        </div>

        <div className="form-group">
          <label>Apellido</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Ejemplo: Rosales"
            required
          />
        </div>

        <div className="form-group">
          <label>Correo</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="correo@email.com"
            required
          />
        </div>

        <div className="form-group">
          <label>Edad</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="20"
            min="1"
            required
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn-primary">
            {selectedStudent ? 'Actualizar' : 'Guardar'}
          </button>

          {selectedStudent && (
            <button type="button" className="btn-secondary" onClick={onCancelEdit}>
              Cancelar
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default StudentForm;