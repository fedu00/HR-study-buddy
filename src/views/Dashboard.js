import React, { useEffect, useState } from "react";
import axios from "axios";
import { ViewWrapper } from "../components/molecues/viewWrapper/ViewWrapper";
import { Link, useParams } from "react-router-dom";
import UsersList from "./usersList/UsersList";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("/groups")
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
  }, []);
  console.log("1", groups);

  useEffect(() => {
    axios
      .get(`/students/${id || groups[0]}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log(err));
  }, [id, groups]);

  return (
    <ViewWrapper>
      <nav>
        {groups.map((group) => (
          <Link key={group} to={`/group/${group}`}>
            {" "}
            {group}
          </Link>
        ))}
      </nav>
      <UsersList users={students} />
    </ViewWrapper>
  );
};

export default Dashboard;
