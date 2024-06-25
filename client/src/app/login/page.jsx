"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";

function page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    let response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: ("Content-type", "application/json"),
      body: JSON.stringify({ email, pass }),
    });
    if (response.ok) {
      const user = await response.json();
      localStorage("token", user.token);
      console.log(user.token);
      router.replace("/todo");
    }
  };

  return (
    <div>
      <form>
        <input
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          value={email}
          placeholder="email"
        />
        <input
          onChange={(event) => setPass(event.target.value)}
          type="password"
          value={pass}
          placeholder="password"
        />
        <button onSubmit={handleSubmit} type="submit">
          Login
        </button>
        <h6>
          Have an account{" "}
          <Link href="/register" className="text-blue-400">
            register here!
          </Link>
        </h6>
      </form>
    </div>
  );
}

export default page;
