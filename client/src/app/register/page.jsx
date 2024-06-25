"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";

function page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (event) => {
    console.log("tes");
    event.preventDefault();
    let response = await fetch(`http://localhost:3000/register`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, pass }),
    });
    if (response.ok) {
      router.replace("/login");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          value={email}
          name="email"
          placeholder="email"
        />
        <input
          onChange={(event) => setPass(event.target.value)}
          type="password"
          value={pass}
          name="pass"
          placeholder="password"
        />
        <button type="submit">Register</button>
        <h6>
          Have an account <Link href="/login">login here!</Link>
        </h6>
      </form>
    </div>
  );
}

export default page;
