document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('regForm');
  const groups = form.querySelectorAll('.form-group');

  form.addEventListener('submit', e => {
    e.preventDefault();
    // Limpia errores previos
    groups.forEach(g => {
      g.classList.remove('error');
      g.querySelector('.error-message').textContent = '';
    });

    let valid = true;

    // Nombre
    const name = form.fullName;
    if (!name.value.trim()) {
      setError('group-name', 'El nombre es obligatorio.');
      valid = false;
    }

    // Email institucional
    const email = form.email;
    const emailPattern = /^[^\s@]+@uamv\.edu\.ni$/i;
    if (!email.value.trim()) {
      setError('group-email', 'El correo es obligatorio.');
      valid = false;
    } else if (!emailPattern.test(email.value)) {
      setError('group-email', 'Debe usar un correo @uamv.edu.ni');
      valid = false;
    }

    // Carrera
    const career = form.career;
    if (!career.value.trim()) {
      setError('group-career', 'La carrera es obligatoria.');
      valid = false;
    }

    // Conferencias
    const checks = form.querySelectorAll('input[name="confs"]:checked');
    if (checks.length === 0) {
      setError('group-conferences', 'Seleccione al menos una conferencia.');
      valid = false;
    }

    if (valid) {
      alert('¡Registro enviado correctamente!');
      form.reset();
    }
  });

  function setError(groupId, message) {
    const group = document.getElementById(groupId);
    group.classList.add('error');
    group.querySelector('.error-message').textContent = message;
  }
});
