import { PrismaClient } from "@prisma/client";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { Navbar } from "../components/ReusedComponents/Navbar/Navbar";
import { UsersList } from "../components/UsersList/UsersListStyled";
const users = ({ users }: any) => {
  const usersList = users;

  return (
    <>
      <Navbar />
      <UsersList>
        <div className="searchUser">
          <input type="text" placeholder="Wyszukaj użytkownika" />
          <input type="text" placeholder="Miasto" />
          <button> Szukaj</button>
        </div>
        <ul>
          {usersList.map((user: any, index: number) => (
            <li key={user.id}>
              <div className="user">
                <p>{index + 1}</p>
                <h3>{user.name}</h3>
              </div>
            </li>
          ))}
        </ul>
      </UsersList>
    </>
  );
};

export default users;

export const getServerSideProps = async (context: any) => {
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany();
  prisma.$disconnect();
  return {
    props: {
      users,
    },
  };
};
