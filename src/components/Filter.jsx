import { useState } from "react";


export default function Filter({ setSearchParams }) {
  const [requestAmount, setRequestAmount] = useState("50");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");

  return (
    <div className="filterComponent">
      <label htmlFor="requestAmount">
        <div>Users Amount:</div>
        <select
          name="requestAmount"
          id="requestAmount"
          defaultValue='50'
          onChange={({ target }) => setRequestAmount(target.value)}
        >
          <option value="50">
            50
          </option>
          <option value="100">100</option>
          <option value="150">150</option>
          <option value="200">200</option>
          <option value="250">250</option>
          <option value="300">300</option>
        </select>
      </label>
      <label htmlFor="gender">
        <div>Gender:</div>
        <select
          name="gender"
          id="gender"
          defaultValue=''
          onChange={({ target }) => setGender(target.value)}
        >
          <option value="">
            all
          </option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </label>
      <label htmlFor="nationality">
        <div>Nationality:</div>
        <select
          name="nationality"
          id="nationality"
          defaultValue=''
          onChange={({ target }) => setNationality(target.value)}
        >
          <option value="">
            all
          </option>
          <option value="us">USA</option>
          <option value="fr">France</option>
          <option value="es">Spain</option>
          <option value="ca">Canada</option>
          <option value="fr">France</option>
        </select>
      </label>
      <button onClick={() => setSearchParams({ requestAmount, gender, nationality })}> Apply filter</button>
    </div>
  );
}
