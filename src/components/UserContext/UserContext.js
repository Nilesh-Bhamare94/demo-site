import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([
    { id: 1, name: "Nilesh", position: "Front End Dev", salary: 45645645 },
    { id: 2, name: "Mahesh", position: "Data Scientist", salary: 456651312 },
    { id: 3, name: "Dinesh", position: "Full Stack Dev", salary: 89465499 },
  ]);

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};
