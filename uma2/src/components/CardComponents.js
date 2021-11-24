import React from "react";
import "../styles/carta.scss";

function CardComponents({ persona }) {
  return (
    // <div className = "CardContent">
    //   <div>
    //     <image className ="imgPersonaje" src = {persona.image} />
    //     <div className = "texto"> nombre : {persona.name}</div>
    //     <br/>
    //     <div className = "texto"> Genero : {persona.gender}</div>
    //     <br/>
    //     <div className = "texto"> Vivo o muerto ? : {persona.status}</div>
    //   </div>

    // </div>
    <div class="CardComponents">
      <div>
        <img className="imagePersona" alt="persona" src={persona.image} />
      </div>
      <div class="meta">
        <ul class="details">
          <li class="author">
            <a href="/">Nombre : {persona.name}</a>
          </li>
          <li class="date">
            <a href="/">Genero : {persona.gender}</a>
          </li>
          <li class="tags">
            <ul>
              <li>
                <a href="/">Vivo o muerto? : {persona.status}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="description">
        <h1>Desafio UMA</h1>
        <h2>Mi primera api</h2>
        <p> Bienvenido al mundo loco de rick and morty</p>
        <p class="read-more">
          <a href="/">Siguiente</a>
        </p>
      </div>
    </div>
  );
}

export default CardComponents;
