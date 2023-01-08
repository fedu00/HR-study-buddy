import React, { useState } from "react";
import { users as userData } from "../../../data/users";
import UsersListItem from "../../molecues/usersListItem/UsersListItem";
import { Wrapper, StyledList } from "./UsersList.styles";

const UsersList = () => {
  const [users, setUsers] = useState(userData);

  const deleteUsers = (name) => {
    const filtersUsers = users.filter((user) => user.name !== name);
    setUsers(filtersUsers);
  };

  return (
    <Wrapper>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem
            userData={userData}
            key={userData.name}
            deleteUser={deleteUsers}
          />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
