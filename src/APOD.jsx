import React, { useState, useEffect } from 'react';

const APOD = ({ date }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=BU4UuHlQhj9Tul0YzvEkgquOJ78TnlJ62g3YtYSQ&date=${date}`
        );
        const data = await res.json();
        setImage(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [date]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  return (
    <div>
      {image && (
        <div>
          <h2>{image.title}</h2>
          <img src={image.url} alt={image.title} />
          <p>{image.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default APOD;
