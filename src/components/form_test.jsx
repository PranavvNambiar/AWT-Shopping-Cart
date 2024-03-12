import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


function Registration() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [course, setCourse] = useState('');
  const [gender, setGender] = useState(''); // Added radio button state
  const [interests, setInterests] = useState({
    sports: false,
    music: false,
    movies: false,
    reading: false,
  }); 

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;

    if (type === 'radio') {
      setGender(value);
    } else if (type === 'checkbox') {
      setInterests((prevInterests) => ({
        ...prevInterests,
        [id]: checked,
      }));
    } else {
      if (id === 'firstName') {
        setFirstName(value);
      }
      if (id === 'lastName') {
        setLastName(value);
      }
      if (id === 'email') {
        setEmail(value);
      }
      if (id === 'password') {
        setPassword(value);
      }
      if (id === 'confirmPassword') {
        setConfirmPassword(value);
      }
      if (id === 'course') {
        setCourse(value);
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(firstName, lastName, email, password, confirmPassword, course, gender, interests);

    const formData = {
      firstName : firstName,
      lastName : lastName,
      email : email,
      password : password,
      gender : gender,
      interests : JSON.stringify(interests)
      
    };
    try {
      const response = await fetch('http://localhost:4000/submit-form',{
        
        method: 'POST', 
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData),
      });
      if(response.ok){
        console.log("Form submitted successfully");
      }
      else{
        console.log("FORM SUBMISSION FAILED");
      }
    }
    catch(e){
      console.log("Error submitting the form",e);
    }

    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      alert('All fields cannot be empty');
      return;
    }

    if (firstName === '') {
      alert('First Name Cannot be Empty');
      return;
    }
    if (lastName === '') {
      alert('Last Name Cannot be Empty');
      return;
    }
    if (email === '') {
      alert('Email Cannot be Empty');
      return;
    }
    if (password === '') {
      alert('Password Cannot be Empty');
      return;
    }
    if (confirmPassword === '') {
      alert('Confirm Password Cannot be Empty');
      return;
    }

   
    var atIndex = email.indexOf('@');
    var dotIndex = email.indexOf('.');
    if (atIndex > 0 && dotIndex > atIndex + 1 && email.length > dotIndex) {
      console.log('Correct email');
    } else {
      alert('Invalid Email');
      return;
    }

    
    var hasUpperCase = /[A-Z]/.test(password);
    var hasLowerCase = /[a-z]/.test(password);
    var hasNumber = /[0-9]/.test(password);
    var hasSpecialChar = /[!@#$%^&*()_+=-{}.,;'"`]/.test(password);
    var lengthIsValid = password.length >= 8;
    if (hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && lengthIsValid) {
      console.log('Correct password');
    } else {
      alert('Invalid Password.');
      return;
    }

    // if (confirmPassword === password) {
    //   console.log('Passwords match');
    // } else {
    //   alert('Password should be the same.');
    //   return;
    // }

    
    if (gender === '') {
      alert('Please select a gender');
      return;
    }


    const selectedInterests = Object.values(interests).some((interest) => interest);
    if (!selectedInterests) {
      alert('Please select at least one interest');
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" value={firstName} onChange={handleInputChange} />

      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" value={lastName} onChange={handleInputChange} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={handleInputChange} />

      <label htmlFor="password">Password:</label>
      <input type="text" id="password" value={password} onChange={handleInputChange} />

      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="text"
        id="confirmPassword"
        value={confirmPassword}
        onChange={handleInputChange}
      />

      <label htmlFor="course">Course:</label>
      <input type="text" id="course" value={course} onChange={handleInputChange} />

      <label>
        Gender:
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          checked={gender === 'male'}
          onChange={handleInputChange}
        />
        Male
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          checked={gender === 'female'}
          onChange={handleInputChange}
        />
        Female
      </label>

      <label>
        Interests:
        <input
          type="checkbox"
          id="sports"
          checked={interests.sports}
          onChange={handleInputChange}
          value='sports'
        />
        Sports
        <input
          type="checkbox"
          id="music"
          checked={interests.music}
          onChange={handleInputChange}
          value='music'
        />
        Music
        <input
          type="checkbox"
          id="movies"
          checked={interests.movies}
          onChange={handleInputChange}
          value='movies'
        />
        Movies
        <input
          type="checkbox"
          id="reading"
          checked={interests.reading}
          onChange={handleInputChange}
          value='reading'
        />
        Reading
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<Registration />);

reportWebVitals();
