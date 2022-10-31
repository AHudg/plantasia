import React, { useState } from "react";

export default function Login() {
  // TODO form handlers can go here
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="email"
          name="email"
          type="email"
          id="email"
          // value, and onChange can be added here
        ></input>
        <input
          className="input"
          placeholder="password"
          name="password"
          type="password"
          id="password"
          // value, and onChange can be added here
        ></input>
        <button type="submit">Submit</button>
      </form>
      <p>
        If you don't have an account with us, we'd love to help you connect with
        clients!
      </p>
      <p>
        {" "}
        Click{" "}
        <a className="" href="/signup">
          here
        </a>{" "}
        to sign up now!
      </p>
    </main>
  );
}
