import React from "react";

const Article = ({ title, date, preview }) => {
  const formatDate = date || "January 1, 1970";

  
  const minutesToRead = Math.ceil(preview.split(" ").length / 200); 

  const coffeeCups = "☕️".repeat(Math.ceil(minutesToRead / 5));

  
  const bentoBoxes = "🍱".repeat(Math.ceil(minutesToRead / 10));

  const timeToReadEmoji = minutesToRead < 30 ? coffeeCups : bentoBoxes;

  return (
    <article>
      <h3>{title}</h3>
      <small>{formatDate}</small>
      <p>{preview}</p>
      <span>{timeToReadEmoji}</span>
    </article>
  );
};

export default Article;
