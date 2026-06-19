function StudentList({ students, onEdit, onDelete }) {
  return (
    <section className="card">
      <h2>Lista de estudiantes</h2>

      {students.length === 0 ? (
        <p className="empty-message">No hay estudiantes registrados.</p>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Correo</th>
                <th>Edad</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.email}</td>
                  <td>{student.age}</td>
                  <td className="actions">
                    <button className="btn-edit" onClick={() => onEdit(student)}>
                      Editar
                    </button>

                    <button className="btn-delete" onClick={() => onDelete(student.id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default StudentList;