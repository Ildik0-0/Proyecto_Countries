 export const validation = (userData) => {
    const errors = {};
  
    // Validar campo "Actividad"
    if (!userData.name) {
      errors.name = 'It can not be empty, please enter a activity name';
    }else if (!/^[a-zA-Z]+$/.test(userData.name)) {
      errors.name = 'It can only be letters, numbers are not allowed';
    }
  
    // Validar campo "Temporada"
    if (!userData.season) {
      errors.season = 'It cannot be empty, please enter a season you wish to save';
    }
  
    // Validar campo "Duracion"
    // if (!userData.duration) {
    //   errors.duration = 'It can not be empty, please enter the duration of the activity';
    // } else if (isNaN(userData.duration)) {
    //   errors.duration = 'It can only be numbers, please';
    // }
    if (!userData.duration) {
      errors.duration = 'It cannot be empty, please enter the duration of the activity';
    } else if (!/^\d+$/.test(userData.duration)) {
      errors.duration = 'It can only be numbers, please enter a number';
    } else if (parseInt(userData.duration) === 0) {
      errors.duration = 'The duration cannot be 0';
    }else if (parseInt(userData.duration) > 180) {
      errors.duration = 'The duration cannot exceed 180';
    }
  
    // Validar campo "Dificultad"
    if (!userData.difficulty) {
      errors.difficulty = 'It cannot be empty, please enter the difficulty of the activity';
    }
  
    // Validar campo "Pais"
    if (!userData.countries) {
      errors.countries = 'It cannot be empty, please enter the countries of the activity';
    }
  
    return errors;
  };
  