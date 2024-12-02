import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const UserProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch Data from API
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/posts`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ data, loading }}>
      {children}
    </UserContext.Provider>
  );
};
