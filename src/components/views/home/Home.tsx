import React, { ChangeEvent, Fragment } from "react";
import neongomez1 from "../../../images/carrusel/neongomez1.png";
// import logoIBero from "../../../images/logos/1-Logo-IBEROAMERICANA.png"
import lofoFulldev from "../../../images/logos/FullDev_Mesadetrabajo.png";
import dashboarneon from "../../../images/carrusel/dashboarneon.png";
import loginneon from "../../../images/carrusel/loginneongomez.png";
import perfilneon from "../../../images/carrusel/perfilneongomes.png"
import iconoNen from "../../../icons/neon.png"
import nuketowsoft from "../../../icons/nuketowsoft.png"
import videoneongomez from "../../../videos/videoneongomez.mp4"
import segGit from "../../../images/general/seggit.png"
import commits from "../../../images/general/commits.png"
import tablero from "../../../images/general/tablero.png"
import { Chart } from "react-google-charts";





const Home = (): React.ReactElement => {

    function seletect(e : ChangeEvent<HTMLSelectElement>) {
        if (e.target.value == '1') {
            window.open('https://carlosalgabez08.atlassian.net/jira/software/projects/KAN/boards/1?atlOrigin=eyJpIjoiMzYxMjY2MGFhNzIyNDkyMmE5ZTAzMGYxMDE2MmI3MDciLCJwIjoiaiJ9');  
        }
        if (e.target.value == '2') {
            window.open('https://carlosalgabez08.atlassian.net/jira/software/projects/KAN/boards/1/timeline?shared=&atlOrigin=eyJpIjoiNGM5ZjVlZjk1ODBkNDYyMzk0YTEyYzM3YjdkMjViOWYiLCJwIjoiaiJ9');  
        }
        if (e.target.value == '3') {
            window.open('https://carlosalgabez08.atlassian.net/wiki/external/ZGI3Nzc1MDgwZDYzNDE0YzhlYzAyNjg4MDBmYWJmNjg');  
        }
    }

     const data = [
        ["Gestión", "Scrum", "Kanban", "Agilismo", "Desarrollo", "Integración"],
        ["2020", 1526000, 2526000, 1526000,5008000, 6008000],
        ["2021", 3792000, 3792000,  3792000, 7500000, 5008000],
        ["2022", 5695000, 5895000,  5995000, 7808000, 8008000],
        ["2023", 7695000, 7795000,  7995000, 8808000, 9008000],
        ["2024", 9999999, 9999999,  9999999, 9999999, 9999999],
        ];

     const options = {
        title: "Scrum dentro de Neón Gómez impacto en Nuketow Soft",
        chartArea: { width: "50%" },
        hAxis: {
            title: "Escala de valorización",
            minValue: 0,
        },
        vAxis: {
            title: "Tiempo",
        },
    };

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

            </section>

            <main>
     
                
                <article className="container-repl mt-5">
                    <div className="row justify-content-center section-text">
                        <div className="col-md-6 align-self-center">
                            <p className="mb-8">
                                Neón Gómez  es una empresa de venta de anuncios publicitarios hechos en acrílico y neón, a lo largo de su trayectoria empresarial se ha enfrentado a grandes retos en el mercado y afortunadamente se ha expandido de manera extraordinaria es por eso que se ha sistematizado toda la gestión de venas compra y fabricación de anuncios mediante el sistema  Neón Gómez – Nuketow Soft para cubrir la necesidad de sistematizar toda la información de Neón Gómez en Nuketow Soft permitiendo así obtener detalles claros de recursos  e información en tiempo real de todo lo que sucede en Neón Gómez 
                            </p>
                            
                        </div>
                        <div>
                            <Chart
                            chartType="BarChart"
                            width="100%"
                            height="400px"
                            data={data}
                            options={options}
                            />
                        </div>
                        <div className="centen-imglogo">
                            <img className="icononeon" src={iconoNen} alt="" />
                            <img className="icononuketowsoft" src={nuketowsoft} alt="" />
                        </div>
                    </div>
                </article>

                <article className="container-repl">
                    <div className="row align-items-center">
                        <div className="col-md-4">

                            <p className="mb-4">
                                A lo largo del desarrollo se  pudo implementar el uso de metodologías agiles como <strong>Scrum</strong> mediante este proyecto, el cual  generado bajo la cobertura de 7 sprint de desarrollo con una duración de 11 días cada sprint aplicando seguimientos como dailys, retrospectivas,  estimaciones de tiempo y requerimientos por lo que fue necesario la ayuda de un equipo conformado por QA, Lider, Desarrolladores y Arquitectos, para poder completar con éxito esta labor, se implementó también el seguimiento al código mediante git y github
                            </p>
                        </div>
                        <div className="col-md-4">
                            <img src={segGit} className="rounded mx-auto d-block" alt="Imgage 5" />
                        </div>
                        <div className="col-md-4">
                            <p className="mb-4">
                                Optimizando tareas como CI/CD con Devops permitiendo facilitar la automatización de despliegues de la aplicación se realizaron controles y seguimientos en cada commit y desarrollo aplicado en cada sprint, para que cada paso cada vez fuera mas perfecto y  eficaz, con este control de versiones se logró mitigar fallos de compilación y despliegues se versionó cada etapa de la aplicación y se aseguró la integridad de la estabilidad de la aplicación mientras el cliente  Neón Gómez la usaba.
                            </p>
                        </div>
                    </div>
                </article>

                
                <article className="container-repl">
                    <div className="row align-items-center">
                        <div id=''>
                            <img src={commits} alt="" />
                        </div>
                        <div className="flexbox flexcenter">
                            <a className="flexbox" href="https://github.com/Carlos-Alberto-Gallego-Benitez/NeonGomez/commits" target="_blank" rel="noopener noreferrer">
                                <i className="icon-github"></i>
                            </a>
                        </div>
                    </div>
                </article>

                <article className="container-repl">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <label htmlFor="">Kanban Neón Gómez</label>
                            <div className="drawer">
                                <select onChange={(e) => { seletect(e) }}>
                                    <option value="selce" selected={true}>Seleccione....</option>
                                    <option value="1">Tablero Kanban</option>
                                    <option value="2">Cronograma</option>
                                    <option value={'3'}>Confluence</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={tablero} alt="" />
                        </div>
                    </div>
                </article>
                <article className="container-repl">
                    <div className="row align-items-center contentiframe">
                        <iframe id='iframertask' className="iframeancho" width="100%" height="100%" src="https://kamban-tablero.netlify.app/"></iframe>
                    </div>
                </article>
                <article className="container-repl">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <p className="mb-4">En el siguiente video se muestra el funcionamiento actual del desarrollo que se lleva, donde se ve la rapidez y rigidez del sistema Neón Gómez para procesar cada solitud  lo que indica una vez mas el correcto funcionamiento y cumplimiento del desarrollo</p>
                            
                        </div>
                        <div className="col-md-6">
                            <video  className="img-fluid" autoPlay loop muted>
                                <source src={videoneongomez} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </article>
                <article className="container-repl">
                    <form id="forExample" action="#" >
                        <div className="row title-form">
                            <label htmlFor="titleForm">Comunícanos </label>
                        </div>
                        <div className="row">
                            <div className="form-group col">
                                <label htmlFor="inputEmail4">Nombres</label>
                                <input type="text" className="form-control" placeholder="Nombres" />
                            </div>
                            <div className="form-group col">
                                <label htmlFor="inputEmail4">Epellidos</label>
                                <input type="text" className="form-control" placeholder="Apellidos" />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="form-group col">
                                <label htmlFor="inputEmail4">Email</label>
                                <input type="email" className="form-control" required placeholder="Email" />
                            </div>
                            <div className="form-group col">
                                <label htmlFor="inputEmail4">Observación</label>
                                <input type="text" required className="form-control" placeholder="Observación" />
                            </div>
                        </div>
                        <div className="row-izquierda">
                            <button className="btn btn-primary colorbtn">Enviar</button>
                        </div>
                    </form>
                </article>
            </main>

            <footer className="py-4">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4 culum">
                            <h3>Neón Gómez</h3>
                            <p>Reparación y Creación de anuncios en Acrílico y Neón.</p>
                            <img className="icononeon" src={iconoNen} alt="" />
                            
                        </div>

                        <div className="col-md-4 Networks culum">
                            <h3>Redes</h3>
                            <ul className="icons">
                                <li>
                                    <i className='bx bxl-whatsapp'></i>
                                    <a target="_blank" href="https://api.whatsapp.com/send?phone=573103948423" ><span>Whatsapp</span></a>
                                </li>
                                <li>
                                    <i className='bx bxl-instagram'></i>
                                    <a target="_blank" href="https://www.instagram.com/avisosneon_medellin/"><span>Instagram</span></a>
                                </li>
                                <li>
                                    <i className='bx bxl-twitter'></i>
                                    <span>Twitter</span>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4 culum">
                            <h3>Nuketow Soft</h3>
                            <p>Plataforma de gestión de ventas</p>
                            <img className="icononuketowsoft" src={nuketowsoft} alt="" />
                        </div>
                    </div>
                </div>
            </footer>

        </Fragment>
    )
}

export default Home;