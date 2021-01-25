import React, { useState } from 'react'

const DashboardHeader = ({setLogin}:{setLogin:React.Dispatch<React.SetStateAction<string>>}) => {
  const [nick, setNick] = useState<string>("");

  const clickHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setLogin(nick);
    setNick("");
  };

  console.count("rendering-header")


    return (
        <header className="dashboard__header">
          <form onSubmit={clickHandler} className="dashboard__header-form">
            <label htmlFor="nick">User Nick:</label>
            <input
              onChange={(e) => setNick(e.target.value)}
              value={nick}
              type="text"
              name="nick"
            />
            <button className="dashboard__header-btn" type="submit">
              Find a User
            </button>
          </form>
        </header>
    )
}

export default React.memo(DashboardHeader)
