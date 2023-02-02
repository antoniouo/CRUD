import { Card } from "antd";
import React from "react";
import UserList from "./UserList";
import AddUser from "./AddUser";

export default function Dashboard() {
  return (
    <Card title="User list" extra={<AddUser />}>
      <UserList />
    </Card>
  );
}
