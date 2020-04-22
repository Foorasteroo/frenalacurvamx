import React from "react"
import "./useMapSection.scss";
const arrow = require("../../images/icons/arrow.svg");
const bluePin = require("../../images/icons/Mapa_Pin-Azul.svg")
const purplePin = require("../../images/icons/Mapa_Pin-Morado.svg")
const redPin = require("../../images/icons/Mapa_Pin-Rojo.svg")
const greenPin = require("../../images/icons/Mapa_Pin-Verde.svg")
const UseMapSection = () =>(
<section className="container-MapSection fullBox-useMap diagonalBox-useMap">
    <div className="container" style={{color:"black",marginTop:"60px"}}>
        <div class="columns">
            <div    class="column is-one-quarter" style={{padding:"40px",margin:"10px", fontFamily:"'Roboto', sans-serif", backgroundColor:"white"}}>
                <h2 style={{fontWeight:"bold", fontSize:"24px"}}>Usa el mapa para:</h2>
                <div className="columns" style={{marginTop:"10px", }}>
                    <img className="img-map" src={arrow}/>
                    <p>Solicitar apoyo a personas de tu comunidad.</p>
                </div>
                <div className="columns" style={{marginTop:"10px"}}>
                    <img className="img-map" src={arrow}/>
                    <p>Conocer quiénes necesitan ayuda cerca de donde vives.</p>
                </div>
                <div className="columns" style={{marginTop:"10px"}}>
                    <img className="img-map" src={arrow}/>
                    <p>Visibilizar tu negocio u organización si ofreces servicio o atención durante esta contingencia</p>
                </div>
                <p>Este mapa fue creado con una plataforma de software libre por gente como tú y se encuentra en constante construcción.</p>
            </div>
            <div class="column is-three-quarters">
                <hr style={{marginLeft:"-21px", marginTop:"0px"}}></hr>
                <h1 className="principal-Title">¿Qué puedes encontrar en el mapa?</h1>
                <div className="Container">
                    <div className="columns" style={{marginLeft:"10px"}}>
                        <div className="column">
                        <img className="img-pin" src={bluePin}></img>
                        <div>
                            <h3 className="find-map-titles">Negocios y sevicios locales</h3>
                            <p className="find-map-p">Negocios que continúan ofreciendo productos y servicios y a los que puedes apoyar, como uno restaurante
                                o una tiendita de abarrotes
                            </p>
                        </div>
                        </div>
                        <div className="column">
                        <img className="img-pin" src={greenPin}></img>
                        <div>
                            <h3 className="find-map-titles">Organizaciones</h3>
                            <p className="find-map-p">Sociedad civil, colectivo o movimieto brindado y/o solicitando ayuda durante esta contingencia, como albergues,
                            comedores comunitarios u otros.
                            </p>
                        </div>
                        </div>
                        <div className="column">
                        <img className="img-pin" src={redPin}></img>
                        <div>
                            <h3 className="find-map-titles">Tengo una necesidad personal</h3>
                            <p className="find-map-p">Apoyo con alguna actividad diaria que no puedas llevar a cabo por la cuarentena, donativos monetarios, de equipo o ropa para apoyar a poblaciones vulnerables.
                            </p>
                        </div>
                        </div>
                        <div className="column">
                        <img className="img-pin" src={purplePin}></img>
                        <div>
                            <h3 className="find-map-titles">Quiero apoyar</h3>
                            <p className="find-map-p">Comparte en qué puedes contribuir y ayudar de manera GRATUITA, como pasar por la despensa de alguien en tus alrededores.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
)

export default UseMapSection;