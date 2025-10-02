function ProfileCard({ name, photo, bio, umur, quote }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        borderRadius: "10px",
        width: "220px",
        textAlign: "center",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
        margin: "10px",
      }}
    >
      <img
        src={photo || "https://via.placeholder.com/100"}
        alt={name}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          marginBottom: "10px",
        }}
      />
      <h2>{name}</h2>
      <p>{bio}</p>
      <p>Umur: {umur} tahun</p>

      <div>
        <h4>quote:</h4>
        {quote.map((quote, index) => (
          <span
            key={index}
            style={{
              backgroundColor: "#f0f0f0",
              margin: "5px",
              padding: "5px 10px",
              borderRadius: "8px",
              display: "inline-block",
            }}
          >
            {quote}
          </span>
        ))}
      </div>
    </div>
  );
}

function App() {
  const profiles = [
    { id: 1, name: "Ayyasy", photo: "https://i.pinimg.com/736x/01/96/64/019664e75a7bb17041bdf76bc645c858.jpg", bio: "Suka mengaji", umur: 20, quote: ["jangan lupa sholat!!"] },
    { id: 2, name: "Memed", photo: "https://i.pinimg.com/736x/9e/8a/8b/9e8a8bcfa6345ac78e7758a441c46a5e.jpg", bio: "Belajar ", umur: 20, quote: ["tetap hidup walau bangkrut"] },
    { id: 3, name: "Sutejo", photo: "https://i.pinimg.com/736x/ad/21/1c/ad211cbda4f0af3d78526972858a17c2.jpg", bio: "makan", umur: 30, quote: ["makan dulu kata mamah"] },
    { id: 4, name: "Syahroni", photo: "https://i.pinimg.com/736x/41/0a/46/410a464cc4b4eb4593faadb5c17d4621.jpg", bio: "Korupsi", umur: 20, quote: ["meledakk!!"] },
    { id: 5, name: "Yeyen", photo: "https://i.pinimg.com/736x/5f/dc/54/5fdc54c51e5fb969ae2e5dfbd2ac2f18.jpg", bio: "olahraga", umur: 20, quote: ["butuh pasangan"] },
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Daftar Profile</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap", 
        }}
      >
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            photo={profile.photo}
            bio={profile.bio}
            umur={profile.umur}
            quote={profile.quote}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
