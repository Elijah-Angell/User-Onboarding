import React, { useState } from "react"
import Form from "./Form"
import './App.css';
import axios from "axios"
import { reach } from "yup";

const initialFormValues = {
  username: "",
  email: "",
  password: "",
  Agree: false,

}


const initialFormErrors = {
  username: "",
  email: "",
  password: "",
}
const initialForm = []
const initialDisabled = true



function App() {
  const [person, setPerson] = useState(initialForm)
  const [formValue, setFormValue] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  const getPerson = () => {
    axios.get(`https://reqres.in/api/users`)
      .then(res => {
        setPerson(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }



  const postNewPerson = newPost => {
    axios.post(`https://reqres.in/api/users`, newPost)
      .then(res => {
        setPerson([res.data, ...person])
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setFormValue(initialFormValues)
      })
  }

  const validate = (name, value) => {
    reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValue({ ...formValue, [name]: value })
  }

  const formSubmit = () => {
    const newPost = {
      username: formValue.username.trim(),
      email: formValue.email.trim(),
      password: formValue.password.trim(),
      agree: ["agrees"].filter(hob => formValue[agree])
    }
    postNewPerson(newPost)
  }

  useEffect(() => {
    getPerson()
  }, [])


  return (
    <div>Hello world</div>
  );
}

export default App;
