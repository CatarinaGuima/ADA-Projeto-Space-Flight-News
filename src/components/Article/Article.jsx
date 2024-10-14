import React from "react";
import "./style.css";

export function Article({title, provider, description, thumbnail}) {
    return (
      <article id="article">
        <img className="image" src={thumbnail} alt={title} />
        <div className="article-infos">
          <h2>{title}</h2>
          <h3>{provider}</h3>
          <p>{description}</p>
        </div>
      </article>
    );
  }

