import React, { useState } from "react";

const GitHubUserSearch = () => {
  const [username, setUsername] = useState(""); // Input value
  const [userData, setUserData] = useState(null); // Fetched user data
  const [error, setError] = useState(null); // Error message

  const fetchGitHubUser = async () => {
    setError(null); // Clear any previous error
    setUserData(null); // Clear any previous user data

    if (!username.trim()) {
      setError("Please enter a username.");
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();

      if (data.message === "Not Found") {
        setError("User not found. Please try again.");
        return;
      }

      setUserData(data);
    } catch (err) {
      setError("An error occurred. Please try again later.");
      console.error(err);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
      <h2>GitHub User Search</h2>
      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          style={{
            padding: "10px",
            width: "80%",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <button
          onClick={fetchGitHubUser}
          style={{
            padding: "10px 15px",
            marginLeft: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {userData && (
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
            <img
              src={userData.avatar_url}
              alt={userData.login}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                marginRight: "15px",
              }}
            />
            <div style={{ textAlign: "left" }}>
              <h3>{userData.name || "N/A"}</h3>
              <p>@{userData.login}</p>
              <p>{userData.bio || "No bio available."}</p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <h4>Repositories</h4>
              <p>{userData.public_repos}</p>
            </div>
            <div>
              <h4>Followers</h4>
              <p>{userData.followers}</p>
            </div>
            <div>
              <h4>Following</h4>
              <p>{userData.following}</p>
            </div>
          </div>
          <div style={{ marginTop: "15px", textAlign: "left" }}>
            <p>
              <strong>Location:</strong> {userData.location || "N/A"}
            </p>
            <p>
              <strong>Twitter:</strong>{" "}
              {userData.twitter_username ? (
                <a
                  href={`https://twitter.com/${userData.twitter_username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @{userData.twitter_username}
                </a>
              ) : (
                "N/A"
              )}
            </p>
            <p>
              <strong>Blog:</strong>{" "}
              {userData.blog ? (
                <a href={userData.blog} target="_blank" rel="noopener noreferrer">
                  {userData.blog}
                </a>
              ) : (
                "N/A"
              )}
            </p>
            <p>
              <strong>Company:</strong> {userData.company || "N/A"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubUserSearch;
