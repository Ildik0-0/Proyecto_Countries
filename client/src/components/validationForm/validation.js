 export const validation = (userData) => {
    const errors = {};
  
   
    if (!userData.name) {
      errors.name = 'It cannot be empty, please enter an activity name';
    } else if (!/^[a-zA-Z\s]+$/.test(userData.name)) {
      errors.name = 'It can only contain letters, numbers or symbol are not allowed';
    } else if (!/^[a-zA-Z\s]{3,30}$/.test(userData.name)) {
      errors.name = 'It can only contain letters and must be between 3 and 30 characters';
    }
    
    if (!userData.season) {
      errors.season = 'It cannot be empty, please enter a season you wish to save';
    }
  
   
    if (!userData.duration) {
      errors.duration = 'It cannot be empty, please enter the duration of the activity';
    } else if (!/^\d+$/.test(userData.duration)) {
      errors.duration = 'It can only be numbers, please enter a number';
    } else if (parseInt(userData.duration) === 0) {
      errors.duration = 'The duration cannot be 0';
    }else if (parseInt(userData.duration) > 180) {
      errors.duration = 'The duration cannot exceed 180 hours';
    }
  
   
    if (!userData.difficulty) {
      errors.difficulty = 'It cannot be empty, please enter the difficulty of the activity';
    }
  
   
    if (!userData.countries || userData.countries.length === 0) {
      errors.countries = 'It cannot be empty, please enter the country or the countries you wish to have your activity';
    }


    return errors;
  };
 