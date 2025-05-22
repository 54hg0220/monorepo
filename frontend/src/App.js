import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://c9hwzt5wva.execute-api.ap-southeast-2.amazonaws.com`
      );
      const data = await response.json();
      const newWindow = window.open("", "_blank");
      if (newWindow) {
        newWindow.document.write(`
        <html>
          <head><title>Team Message</title></head>
          <body>
            <h1>${data.message}</h1>
          </body>
        </html>
      `);
        newWindow.document.close();
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="App">
      <h1>Teams' Apps</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your team"
          required
        />
        <button type="submit">Check out your team</button>{" "}
        {/* Fixed button type */}
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
