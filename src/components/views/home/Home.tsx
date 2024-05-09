import React, { Fragment } from "react";
import neongomez1 from "../../../images/carrusel/neongomez1.png";
// import logoIBero from "../../../images/logos/1-Logo-IBEROAMERICANA.png"
import lofoFulldev from "../../../images/logos/FullDev_Mesadetrabajo.png";
import dashboarneon from "../../../images/carrusel/dashboarneon.png";
import loginneon from "../../../images/carrusel/loginneongomez.png";
import perfilneon from "../../../images/carrusel/perfilneongomes.png"

const Home = () : React.ReactElement => {
    
    return (
        // <img alt="" height={'30'}  src={logoIBero} />
        <Fragment>
            <header>
                <nav className="nav">
                    <div className="navbar">
                        <div className="logo"><img className="filterfulldev" height={'30'} src={lofoFulldev} alt=""/></div>
                    </div>

                </nav>
            </header>

            <section className="home">
                <div className="content">

                    <input type="radio" name="indicator" id="indicator1" hidden />
                    <input type="radio" name="indicator" id="indicator2" hidden />
                    <input type="radio" name="indicator" id="indicator3" hidden />
                    <input type="radio" name="indicator" id="indicator4" hidden />

                    <div className="slide">
                        <div className="carusel-item">
                            <img src={neongomez1} alt="image 1" />
                        </div>
                        <div className="carusel-item">
                            <img src={dashboarneon} alt="image 1" />
                        </div>
                        <div className="carusel-item">
                            <img src={loginneon} alt="image 1" />
                        </div>
                        <div className="carusel-item">
                            <img src={perfilneon} alt="image 1" />
                        </div>
                    </div>

                    <div className="elements">
                        <label className="elements-item" htmlFor="indicator1">
                            <img src={neongomez1} alt="image 1" />
                        </label>
                        <label className="elements-item" htmlFor="indicator2">
                            <img src={dashboarneon} alt="image 1" />
                        </label>
                        <label className="elements-item" htmlFor="indicator3">
                             <img src={loginneon} alt="image 1" />
                        </label>
                        <label className="elements-item" htmlFor="indicator4">
                             <img src={perfilneon} alt="image 1" />
                        </label>
                    </div>
                </div>

                <div className="banner-overlay"></div>
                <div className="information">
                    <h1>Welcome to this wonderful world</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae
                        fugit error dolor cum animi et at ducimus similique in.
                    </p>
                    <button>Get Started</button>
                </div>
            </section>

            <main>
                <article className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">

                            <p className="mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos sit ipsam
                                officia eaque, ut eveniet fugit laboriosam commodi reprehenderit quos sunt tempore, temporibus
                                dolore cupiditate veniam totam! Iure, sequi.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <img src="./imagenes/Image5.jpg" className="rounded mx-auto d-block" alt="Imgage 5" />
                        </div>
                        <div className="col-md-4">
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deserunt sint, ducimus
                                facere illo accusantium quos iste minus architecto asperiores voluptatem totam at impedit labore
                                incidunt explicabo? Excepturi, alias rem.
                            </p>
                        </div>
                    </div>
                </article>
                <article className="container">
                    <div className="row justify-content-center section-text">
                        <div className="col-md-6 align-self-center">
                            <p className="mb-8">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ipsam odit necessitatibus et aut porro laudantium nostrum dicta debitis fuga accusamus ducimus possimus alias, reiciendis incidunt ut cupiditate ab totam!
                                Magnam nihil non delectus ratione id perspiciatis tempora itaque corrupti placeat eaque, qui alias hic culpa earum aspernatur et nostrum sapiente exercitationem est eum autem saepe optio possimus. Sunt, consectetur.
                            </p>
                        </div>
                        <button className="btn-section">Get Started</button>
                    </div>
                </article>
                <article className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <div className="drawer">
                                <select>
                                    <option value="opcion1">Opción 1</option>
                                    <option value="opcion2">Opción 2</option>
                                    <option value="opcion3">Opción 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ut ad voluptates earum! Ducimus
                                quaerat laborum odit, ab incidunt deserunt earum id, laboriosam voluptas ut quas optio suscipit
                                corporis ratione.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <table>
                                <thead>
                                    <tr>
                                        <th>columna 1</th>
                                        <th>columna 2</th>
                                        <th>columna 3</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Dato 1</td>
                                        <td>Dato 2</td>
                                        <td>Dato 3</td>
                                    </tr>
                                    <tr>
                                        <td>Dato 4</td>
                                        <td>Dato 5</td>
                                        <td>Dato 6</td>
                                    </tr>
                                    <tr>
                                        <td>Dato 7</td>
                                        <td>Dato 8</td>
                                        <td>Dato 9</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </article>
                <article className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi dolorum, delectus
                                eos natus laudantium recusandae explicabo? Nam velit voluptatem, qui neque, alias ab
                                exercitationem quas beatae corporis porro, laboriosam hic.</p>
                            <p className="mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic dolore totam tempore.
                                Delectus voluptatem incidunt quaerat commodi animi culpa eaque nesciunt fuga, ab pariatur nulla
                                obcaecati architecto id, neque accusantium!</p>
                        </div>
                        <div className="col-md-6">
                            <video  className="img-fluid" autoPlay loop muted>
                                <source src={'./imagenes/Video.mp4'} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </article>
                <article className="container">
                    <form id="forExample" >
                        <div className="row title-form">
                            <label htmlFor="titleForm">Form</label>
                        </div>
                        <div className="row">
                            <div className="form-group col">
                                <label htmlFor="inputEmail4">Primer Nombre</label>
                                <input type="text" className="form-control" placeholder="Primer Nombre" />
                            </div>
                            <div className="form-group col">
                                <label htmlFor="inputEmail4">Segundo Nombre</label>
                                <input type="text" className="form-control" placeholder="Segundo Nombre" />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="form-group col">
                                <label htmlFor="inputEmail4">Email</label>
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group col">
                                <label htmlFor="inputEmail4">Password</label>
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                        </div>
                        <div className="row-izquierda">
                            <button className="btn btn-primary">Enviar</button>
                        </div>
                    </form>
                </article>
            </main>

            <footer className="py-4">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4 culum">
                            <h3>Items</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>

                        <div className="col-md-4 Networks culum">
                            <h3>Redes</h3>
                            <ul className="icons">
                                <li>
                                    <i className='bx bxl-whatsapp'></i>
                                    <span>Whatsapp</span>
                                </li>
                                <li>
                                    <i className='bx bxl-instagram'></i>
                                    <span>Instagram</span>
                                </li>
                                <li>
                                    <i className='bx bxl-twitter'></i>
                                    <span>Twitter</span>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4 culum">
                            <h3>Items</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </footer>

        </Fragment>
    )
}

export default Home;