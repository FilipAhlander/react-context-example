import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";

function About() {
  const { user, setUser } = useContext(UserContext)
  const [value, setValue] = useState('');
  const submit = (e) => {
    e.preventDefault();
    setUser(value);
  }
  return (
    <>
      <h1>
        {user}
      </h1>
      <form onSubmit={submit}>
        <input type="text" onChange={(e) => setValue(e.target.value)}></input>
        <button type="submit">Ändra</button>
      </form>
    </>
  )
}

export default About;