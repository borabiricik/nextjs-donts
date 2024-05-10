"use server"

export const LoginAction = async (data: {
  username: string
  password: string
}) => {
  return await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    if (res.ok) return res.json()
    return {
      error: true,
    }
  })
}
