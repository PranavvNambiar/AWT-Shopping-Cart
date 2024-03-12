import React, {useState, setState} from 'react';

function RegistrationForm() {
    //*For setting the initial state, the name in the set part of the code will be Capitalized
    //*Like - firstName, setFirstName.
    const [firstName, setFirstName] = useState(''); 
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
        if(id === "gender"){
            setGender(value);
        }

    }

    const handleSubmit  = async (event) => {
        event.preventDefault();
        console.log(firstName,lastName,email,password,confirmPassword);

        const formData = {
          firstName : firstName,
          lastName : lastName,
          email : email,
          password : password,
          // confirmPassword : confirmPassword,
          gender : gender,
        };
        try {
          const response = await fetch('http://localhost:4000/submit-form',{
            // !THIS PORT NUMBER AND THE EXPRESS PORT NUMBER NEED TO BE THE SAME
            method: 'POST', //!IN express, this method needs to be same(mysql2, express)
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
    }

    function validateForm() {
        if (firstName.length === 0) {
            alert('Invalid Form, First Name can not be empty')
            return
          }
        if (lastName.length === 0) {
            alert('Invalid Form, First Name can not be empty')
            return
          }
        if (email.length === 0) {
            alert('Invalid Form, Email Address can not be empty')
            return
          }
        if (password.length < 8) {
            alert('Invalid Form, Password must contain greater than or equal to 8 characters.')
            return
          }
        if(confirmPassword !== password){
            alert('Passwords do not match!!')
            return
        }
        for (let i = 0; i < password.length; i++) {
            const specialChars = [
              '!',
              '@',
              '#',
              '$',
              '%',
              '^',
              '&',
              '*',
              '(',
              ')',
              '_',
              '-',
              '+',
              '=',
              '[',
              '{',
              ']',
              '}',
              ':',
              ';',
              '<',
              '>',
            ]
      
          // variable to count upper case characters in the password.
          var countUpperCase = 0
          // variable to count lowercase characters in the password.
          var countLowerCase = 0
          // variable to count digit characters in the password.
          var countDigit = 0
          // variable to count special characters in the password.
          var countSpecialCharacters = 0
          if (specialChars.includes(password[i])) {
            // this means that the character is special, so increment countSpecialCharacters
            countSpecialCharacters++
          } else if (!isNaN(password[i] * 1)) {
            // this means that the character is a digit, so increment countDigit
            countDigit++
          } else {
            if (password[i] === password[i].toUpperCase()) {
              // this means that the character is an upper case character, so increment countUpperCase
              countUpperCase++
            }
            if (password[i] === password[i].toLowerCase()) {
              // this means that the character is lowercase, so increment countUpperCase
              countLowerCase++
            }
          }
        }
        if (countLowerCase === 0) {
            // invalid form, 0 lowercase characters
            alert('Invalid Form, 0 lower case characters in password')
            return
          }
      
          if (countUpperCase === 0) {
            // invalid form, 0 upper case characters
            alert('Invalid Form, 0 upper case characters in password')
            return
          }
      
          if (countDigit === 0) {
            // invalid form, 0 digit characters
            alert('Invalid Form, 0 digit characters in password')
            return
          }
      
          if (countSpecialCharacters === 0) {
            // invalid form, 0 special characters characters
            alert('Invalid Form, 0 special characters in password')
            return
          }
          alert('Form is valid')
        }
      
    return(<div id="form">
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={handleInputChange}
        placeholder="First Name"/><br></br>

        <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
        /><br></br>

        <input
            type="email"
            id="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Email"/><br></br>

        <input
            type="password"
            id="password"
            value={password}
            onChange={handleInputChange}
            placeholder="Password"/><br></br>

        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleInputChange}
          placeholder="Confirm Password"/>
      <br></br>

    <div>
    <input type="radio" 
        id="gender" 
        name="gender" 
        value="Male" 
        checked={gender === 'Male'} 
        onChange={handleInputChange} /> Male

      <input type="radio" 
      id="gender" 
      name="gender" 
      value="Female" 
      checked={gender === 'Female'} 
      onChange={handleInputChange} /> Female

      <input type="radio" 
      id="gender" 
      name="gender" 
      value="Others" 
      checked={gender === 'Others'} 
      onChange={handleInputChange} /> Others
    </div>

    <button type="submit" 
    // onClick={() => {validateForm()}}
    >Register</button>
</form>  
</div>
    )       
}

export default RegistrationForm;
