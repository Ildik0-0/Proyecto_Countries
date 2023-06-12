 export const validation = (userData) => {
    const errors = {};
  
    // Validar campo "Actividad"
    if (!userData.name) {
      errors.name = 'El campo "Actividad" es requerido';
    }
  
    // Validar campo "Temporada"
    if (!userData.season) {
      errors.season = 'El campo "Temporada" es requerido';
    }
  
    // Validar campo "Duracion"
    if (!userData.duration) {
      errors.duration = 'El campo "Duracion" es requerido';
    } else if (isNaN(userData.duration)) {
      errors.duration = 'El campo "Duracion" debe ser un número';
    }
  
    // Validar campo "Dificultad"
    if (!userData.difficulty) {
      errors.difficulty = 'El campo "Dificultad" es requerido';
    }
  
    // Validar campo "Pais"
    if (!userData.countries) {
      errors.countries = 'El campo "Pais" es requerido';
    }
  
    return errors;
  };
  