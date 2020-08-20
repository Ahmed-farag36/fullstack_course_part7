import React, { useState, useEffect } from "react";
import axios from "axios";

const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange
  };
};

const useCountry = (name) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://restcountries.eu/rest/v2/name/${name}?fullText=true
    `
      )
      .then((country) => {
        setCountry({
          name: country.data[0].name,
          capital: country.data[0].capital,
          population: country.data[0].population,
          flag: country.data[0].flag,
          found: true
        });
      })
      .catch(() => setCountry({ found: false }));
  }, [name]);

  return country;
};

const Country = ({ country }) => {
  if (!country) {
    return null;
  }

  if (!country.found) {
    return <div>not found...</div>;
  }

  return (
    <div>
      <h3>{country.name} </h3>
      <div>
        capital <strong>{country.capital}</strong>
      </div>
      <div>
        population <strong>{country.population}</strong>
      </div>
      <img src={country.flag} height="100" alt={`flag of ${country.name}`} />
    </div>
  );
};

const App = () => {
  const nameInput = useField("text");
  const [name, setName] = useState("");
  const country = useCountry(name);

  const fetch = (e) => {
    e.preventDefault();
    setName(nameInput.value);
  };

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      <Country country={country} />
    </div>
  );
};

export default App;
