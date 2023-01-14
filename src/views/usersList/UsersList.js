import React, { useContext } from "react";
import UsersListItem from "../../components/molecues/usersListItem/UsersListItem";
import { StyledList } from "./UsersList.styles";
import { ViewWrapper } from "../../components/molecues/viewWrapper/ViewWrapper";
import { UsersContext } from "../../providers/UsersProvider";

const UsersList = () => {
  const { users } = useContext(UsersContext);
  return (
    <>
      <ViewWrapper>
        <StyledList>
          {users.map((userData) => (
            <UsersListItem userData={userData} key={userData.name} />
          ))}
        </StyledList>
      </ViewWrapper>
    </>
  );
};

export default UsersList;
