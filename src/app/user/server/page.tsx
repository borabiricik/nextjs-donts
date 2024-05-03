import type { User, UserResponse } from "@/types/user"
import axios from "axios"
import React from "react"

// Not: Burada bazi problemler var:
// 1- Network tabina bak. Nereye nasil istek attigimiz her sey ortada.
// 2- Herhangi bir cacheleme yapmadik. Her istekte api'ye sifirdan bir istek atiyoruz.
// 3- Kullanicilarin listelendigi HTML'i kullanicinin bilgisayarinda cizdiriyoruz.

const ServerUsersPage = async () => {
  const {
    data: { users },
  } = await axios.get<UserResponse>("https://dummyjson.com/users")

  return (
    <div className="p-10">
      <h1 className="text-4xl mb-8">All Users Page</h1>
      <div className="space-y-4">
        {users.map((user) => {
          return (
            <div
              key={user.id}
              className="border border-gray-600 flex flex-col space-y-2 p-4 rounded-lg"
            >
              <p>{user.username}</p>
              <p>{user.email}</p>
              <p>
                {user.firstName} {user.lastName}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ServerUsersPage
