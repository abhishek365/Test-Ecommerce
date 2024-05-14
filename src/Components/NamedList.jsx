import React from "react";
import Person from "./Person";

const NamedList = () => {
  const persons = [
    { id: 1, name: "Abhishek", age: 22, skill: "React" },
    { id: 2, name: "John", age: 24, skill: "Vue" },
    { id: 3, name: "Diana", age: 28, skill: "Js" },
  ];
  return (
    <>
      {persons.map((person) => (
        <Person key={person.id} person={person} />
      ))}
      ;
    </>
  );
};

export default NamedList;
