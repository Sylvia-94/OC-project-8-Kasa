import { useState, useEffect } from "react";

export function useFetch(url) {
  // état de départ de data, du chargement et de l'erreur
  const [data, setData] = useState({});

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return setLoading(true);

    // fonction asynchrone qui fetch la data et qui catch les erreurs
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    // Ici on appelle la fonction fetchData et on utilise url comme tableau de dépendances
    fetchData();
  }, [url]);

  //   Enfin on return le chargement, la data, et l'error
  return { loading, data, error };
}
