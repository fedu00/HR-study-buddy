import React, { useState, useEffect } from "react";
import axios from "axios";

export const UsersContext = React.createContext({
  users: [],
  deleteUser: () => {},
  handleAddUser: () => {},
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/students")
      .then(({ data }) => setUsers(data.students))
      .catch((err) => console.log(err));
  }, []);

  const deleteUser = (name) => {
    const filtersUsers = users.filter((user) => user.name !== name);
    setUsers(filtersUsers);
  };

  const handleAddUser = (formValue) => {
    const newUser = {
      name: formValue.name,
      attendance: formValue.attendance,
      average: formValue.average,
    };
    setUsers([newUser, ...users]);
  };
  return (
    <UsersContext.Provider
      value={{
        users,
        deleteUser,
        handleAddUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
