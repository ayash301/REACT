import React, {useState} from "react";


export default function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const [ emailError, setEmailError] = useState('');
  const [ passwordError, setPasswordError] = useState('');
  const [phoneError, setPhoneError] = useState('');



  const emailRegex =
  /^(?=.{8,}$)(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?])\S+@\S+\.\S+$/;
const passwordRegex =
  /^(?=.{8,}$)(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?]).*$/;
const phoneRegex = /^\+62\d{8,15}$/;




const validateEmail = (value) => {
  if (!value) return "Email kudu diisi!!";
  if (!emailRegex.test(value)) 
  return "Email kudu valid, minimal 8 karakter, ada huruf besar, simbol dan tanpa spasi";
  return "";
}


const validatePassword = (value) => {
  if (!value) return " Password kudu diisi!!";
  if (!passwordRegex.test(value))
  return "Password kudu valid, minimal 8 karakter, ada huruf besar dan simbol";
  return "";
}

const validatePhone = (value) => {
  if (!value) return "Nomor HP kudu diisi!!";
  if (!phoneRegex.test(value))
  return "Nomor HP kudu valid, mulai dari +62 dan diikuti 8-15 digit angka";
  return "";
}

const handleEmailChange = (e) => {
  const value = e.target.value;
  setEmail(value);
  setEmailError(validateEmail(value));

}

const handlePasswordChange = (e) => {
  const value = e.target.value;
  setPassword(value)
  setPasswordError(validatePassword(value));
}

const handlePhoneChange = (e) => {
  const value = e.target.value;
  setPhone(value)
  setPhoneError(validatePhone(value));
}

const handleSubmit = (e) => {
  e.preventDefault();

  const emailErr = validateEmail(email);
  const passwordErr = validatePassword(password);
  const phoneErr = validatePhone(phone);

  setEmailError(emailErr)
  setPasswordError(passwordErr)
  setPhoneError(phoneErr)

  if (!emailErr && !passwordErr && !phoneErr) {
    alert("login berhasil")
  }
}

return (
<div className="flex justify-center items-center min-h-screen bg-gray-100 font-inter">
<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

<h2 className="text-2xl font-semibold text-center mb-6 text gray-800">Login

</h2>
<form onSubmit={handleSubmit} className="space-y-5">

<div> 
  <label className="block font-medium text-gray-700 mb-1">
    Email :
  </label>
  <input 
  type="text" 
  value={email}
  onChange={handleEmailChange}
  placeholder="Masukkan email"
  className={`w-full p-3 rounded-lg border transition-all duration-200 focus:outline-none ${
    emailError
    ? "border-red-500 focus:ring-red-200"
    : "border-gray-300 focus:ring-green-200"
  } focus:ring-2`}
  
  />
  {emailError && (
    <p className="text-sm text-red-500 mt-1"> {emailError}</p>
  )}
</div>

 <div>
  <label className="block font-medium text-gray-700 mb-1">
    Password :
   </label>
  <input
  type="password"
  value={password}
  onChange={handlePasswordChange}
  placeholder="Masukkan password"
  className={`w-full p-3 rounded-lg border transition-all duration-200 focus:outline-none ${
    passwordError
    ? "border-red-500 focus:ring-red-200"
    : "border-gray-300 focus:ring-green-200"
   } focus:ring-2`}
 />
{passwordError && (
<p className="text-sm text-red-500 mt-1">{passwordError}</p>
)}
</div>

    <div>
 <label className="block font-medium text-gray-700 mb-1">
  Nomor HP :
  </label>
  <input
  type="text"
  value={phone}
  onChange={handlePhoneChange}
  placeholder="+628123456789"
  className={`w-full p-3 rounded-lg border transition-all duration-200 focus:outline-none ${
    phoneError
     ? "border-red-500 focus:ring-red-200"
     : "border-gray-300 focus:ring-green-200"
} focus:ring-2`}
  />
  {phoneError && (
    <p className="text-sm text-red-500 mt-1">{phoneError}</p>
  )}
</div>

   <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
