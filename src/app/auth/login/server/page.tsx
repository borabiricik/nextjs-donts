"use client"
import { toast } from "react-toastify"
import { LoginAction } from "./actions/login.action"
import type { FormEvent } from "react"

const LoginServerPage = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
    }
    const loginResponse = await LoginAction(data)
    if (!loginResponse.error) toast.success("Login successful")
    else toast.error("Login failed")
  }

  return (
    <form className="text-black" onSubmit={handleSubmit}>
      <h1>User Details</h1>
      <div>
        <label className="text-white" htmlFor="username">
          Username
        </label>
        <input name="username" id="username" type="text" />
      </div>
      <div>
        <label className="text-white" htmlFor="password">
          Password
        </label>
        <input name="password" id="password" type="password" />
      </div>
      <button className="text-white" type="submit">
        Save
      </button>
    </form>
  )
}

export default LoginServerPage
