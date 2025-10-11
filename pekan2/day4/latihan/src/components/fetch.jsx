import React, {useState, useEffect} from "react";

function Fetch() {
    const [data, setData] = useState(null);
    const [loading, setLoading ] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch ('https://jsonplaceholder.typicode.com/posts/1');
                if (!response.ok) {
                    throw new error (`ERROR: ${response.status}`);

                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    if (loading) return <p>LOADING!!!</p>
    if (error) return <p>Terjadi kesalahan: {error.massage} </p>;

    return (
       <div
  style={{
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
  }}
>
  <div
    style={{
      backgroundColor: "#fff",
      border: "1px solid #e5e7eb",
      borderRadius: "12px",
      padding: "20px",
      width: "500px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      fontFamily: "Arial, sans-serif",
      color: "#1f2937",
      textAlign: "center",
    }}
  >
    <h2 style={{ marginBottom: "10px", fontSize: "20px", fontWeight: "700" }}>
      Data yang dari fetch
    </h2>
    <h3 style={{ marginBottom: "8px", fontSize: "18px", color: "#2563eb" }}>
      {data.title}
    </h3>
    <p style={{ lineHeight: "1.6", fontSize: "16px" }}>{data.body}</p>
  </div>
</div>

    );
}
export default Fetch;   