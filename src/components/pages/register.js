import { useState } from "react";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5001/users/register", {
        email,
        password,
        password2,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit = {handleSubmit}>
        <div>
            <label htmlFor='email'>Email:</label>
            
        </div>
    </form>
  )
}
