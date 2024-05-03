import type { User, UserResponse } from "@/types/user"
import axios from "axios"
import React from "react"

// Not:
// 1- Bu sayfa sunucuda calisacak.
// 2- Network tabina bakarsak sadece bir istek var o da sayfanin HTML'ini donduruyor.
// 3- Boylece hem istek detaylarini gizlemis oluyoruz hem de burada agir bir islem oldugunu dusunursek sunucuda yapmak daha mantikli.

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
