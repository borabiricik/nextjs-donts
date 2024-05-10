"use client"
import React, { useState, type FormEvent } from "react"
import { toast } from "react-toastify"

const LoginPage = () => {
  const [formState, setformState] = useState<{
    username: string
    password: string
  }>({ username: "", password: "" })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      body: JSON.stringify(formState),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) toast.success("Login successful")
      else toast.error("Login failed")
      return res.json()
    })
  }

  return (
    <form className="text-black" onSubmit={handleSubmit}>
      <h1>User Details</h1>
      <div>
        <label className="text-white" htmlFor="username">
          Username
        </label>
        <input
          onChange={(e) => {
            setformState({ ...formState, username: e.target.value })
          }}
          id="username"
          type="username"
        />
      </div>
      <div>
        <label className="text-white" htmlFor="password">
          Password
        </label>
        <input
          value={formState.password}
          onChange={(e) => {
            setformState({ ...formState, password: e.target.value })
          }}
          id="password"
          type="password"
        />
      </div>
      <button className="text-white" type="submit">
        Save
      </button>
    </form>
  )
}

export default LoginPage
