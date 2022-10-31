import React, { useState } from "react";

export default function SingUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="username"
          name="username"
          type="username"
          id="username"
          // value, and onChange can be added here
        ></input>
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
    </div>
  );
}
