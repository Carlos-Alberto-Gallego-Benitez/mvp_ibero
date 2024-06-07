import React, {  Fragment } from "react";
import lofoFulldev from "../../../images/logos/FullDev_Mesadetrabajo.png";
import iconoNen from "../../../icons/neon.png"
import imgSprint from "../../../images/general/Sprint.png"
import backlog from "../../../images/general/backlog.png"
import huNeonGomez from "../../../images/general/HUNeonGomez.png"
import nuketowsoft from "../../../icons/nuketowsoft.png"
import review from "../../../images/general/review.png"
import segGit from "../../../images/general/seggit.png"
import commits from "../../../images/general/commits.png"
import tablero from "../../../images/general/tablero.png"
import { Chart } from "react-google-charts";





const Home = (): React.ReactElement => {


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

                {/* <article className="container-repl">
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
                </article> */}

                {/* <article className="container-repl">
                    <div className="row align-items-center contentiframe">
                        <iframe id='iframertask' className="iframeancho" width="100%" height="100%" src="https://kamban-tablero.netlify.app/"></iframe>
                    </div>
                </article> */}

                <article className="container-repl">       
                   
                    <div className="row width100 text-aling-center ">
                         <h3>Sobre Scrum en Neón Gómez</h3>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Casos de Uso
                                </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body justify-text">
                                    <strong>Mediante casos de uso es representada la gestión del sistema Neón Gómez para visualizar el flujo de la aplicación, con actores que son los encargados de ejecutar cada tarea dentro del sistema de Neón Gómez, esto permite facilitar la navegación dentro del sistema para cualquier usuario que interactúe con dicho sistema.</strong>
                                    <div className="col-md-12 mt-3 flexbox flexcenter ">
                                        <iframe src="https://drive.google.com/file/d/1xEA6JhOPkThkGW_8JppOaOSgFM3LfiQJ/preview" width="640" height="480" allow="autoplay"></iframe>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Sprint
                                </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body justify-text ">
                                    <strong>En cada sprint analizamos y ejecutamos las ideas planteadas en cada tarea e historia de usuario esto permitió llevar a cabo la ejecución adecuada de todos los sprints planteados en el proyecto y concluir de manera exitosa el desarrollo del proyecto entregando al cliente la satisfacción de una necesidad. <a className="atributeA" target="_blank" href="https://carlosalgabez08.atlassian.net/jira/software/c/projects/NGS/boards/5/reports/sprint-retrospective?sprint=6&atlOrigin=eyJpIjoiYmNjNjdiNDg1ZjEyNDkzMmIxNTRlN2NjMmIwNjY0ZjgiLCJwIjoiaiJ9"> Ver Sprints</a></strong>
                                    <div className=" mt-3 flexbox flexcenter ">
                                        <div className="col-md-7">
                                            <img src={imgSprint} alt="" />        
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Historias de Usuario
                                </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body justify-text">
                                    <strong>Tener nuestras ideas claras es fundamental pero a la hora de llevar a cabo la ejecución del desarrollo es sumamente importante ordenar de manera prioritaria esas ideas y sus respectivas tareas, es por eso que con las historias de usuarios mediante Scrum logramos ejecutar de manera ordenada las ideas de desarrollo para el proyecto Neón Gómez. <a className="atributeA" target="_blank" href="https://carlosalgabez08.atlassian.net/jira/software/c/projects/NGS/issues/NGS-25?jql=project%20%3D%20%22NGS%22%20AND%20type%20%3D%20Story%20ORDER%20BY%20created%20DESC"> Ver Historias</a></strong>
                                    <div className=" mt-3 flexbox flexcenter ">
                                        <div className="col-md-7">
                                            <img src={huNeonGomez} alt="" />        
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Daily
                                </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body justify-text">
                                    <strong>En este espacio buscamos acercarnos más al equipo de trabajo en su día a día y escuchar a cada miembro para impulsar el orden y el cumplimiento de nuestra metodología Scrum, es por eso que en nuestros dailys principalmente gestionamos nuestro desarrollo, dando a conocer en qué actividad estábamos el día anterior, que inconvenientes se tuvieron, si se solucionaron o no y en que se va estar trabajando en el día actual.<a className="atributeA" target="_blank" href="https://docs.google.com/spreadsheets/d/10iP76vgDYmHCcYzYFfKIqHR4061sV-UI/edit#gid=1231238400"> Seguimiento Dailys</a></strong>
                                    <div className="col-md-12 mt-3 flexbox flexcenter ">
                                        <iframe src="https://drive.google.com/file/d/1Lh8j5CegS-kN1tVC2vH96dTsHOXH6Efo/preview" width="640" height="430" allow="autoplay"></iframe>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Matriz de requisitos
                                </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body justify-text">
                                    <strong>Mediante la organización adecuada de los requisitos tanto funcionales como no funcionales  se levantó una lluvia de información que sirvió para centrarnos en nuestra solución final, es justo esta la matriz de requisitos que mostramos a continuación la que permitió ordenar esas ideas y dudas que surgieron en el proceso de análisis.</strong>
                                    <div className="col-md-12 mt-3 flexbox flexcenter ">
                                        <iframe src="https://drive.google.com/file/d/1qzbpsbRhtQJ6he2_RqoKljro81lJ_yzq/preview" width="100%" height="480" allow="autoplay"></iframe>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    Tablero
                                </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>La principal clave de la prioridad esta basada en el ordenamiento adecuado de las tareas, es por ello que con el tablero Kanban mejoramos en un 90% la agilidad del desarrollo y el cumplimiento de cada responsabilidad, siendo este un punto clave para finalizar con éxito nuestro objetivos. <a className="atributeA" target="_blank" href="https://carlosalgabez08.atlassian.net/jira/software/projects/KAN/boards/1?atlOrigin=eyJpIjoiYzBiODNiNzE1OWJhNDdiNzg5N2IwZjUxMWU2MDY0OGQiLCJwIjoiaiJ9"> Ver Tablero</a></strong>
                                    <div className=" mt-3 flexbox flexcenter ">
                                        <div className="col-md-7">
                                            <img src={tablero} alt="" />      
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingeIght1">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseIght1" aria-expanded="false" aria-controls="collapseIght1">
                                    Retrospectiva
                                </button>
                                </h2>
                                <div id="collapseIght1" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body justify-text">
                                        <strong>En este espacio buscamos reconocer nuestras ventajas y desventajas en nuestra ejecución de cada sprint y del desarrollo del proyecto, para concluir lo que debemos mejorar a medida que avancemos en el proyecto, permitiendo tener una visión clara no solo de donde vamos a llegar sino de donde estamos. <a className="atributeA" target="_blank" href="https://jamboard.google.com/d/1lqBHEEgmGnKAqzAnUWw-5DWSs9KMGsJrcbKAoLZtID4/viewer?mtt=q1j0u98cxpst&f=0">Ver Restrospectiva</a></strong>
                                    <div className="col-md-12 mt-3 flexbox flexcenter">
                                        <iframe src="https://drive.google.com/file/d/1FyAMZ0-96mFaj2PEHVqWVdhwOg1qBUfN/preview" width="640" height="430" allow="autoplay"></iframe>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingeIght1">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNight" aria-expanded="false" aria-controls="collapseNight">
                                    Backlog
                                </button>
                                </h2>
                                <div id="collapseNight" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body justify-text">
                                    <strong>En el backlog ajustamos la creación de las historias de usuarios y todos aquellos requerimientos, tareas, refinamientos y demás gestiones que permitan a nuestro equipo llevar de manera ordenada el desarrollo del proyecto Neón Gómez. <a className="atributeA" target="_blank" href="https://carlosalgabez08.atlassian.net/jira/software/c/projects/NGS/boards/5/backlog?atlOrigin=eyJpIjoiOWM2NWRiMjQ5MWEzNGRiOWJkMzQyMzFjZWE2ZTJmNGYiLCJwIjoiaiJ9">Ver Backlog</a></strong>
                                    <div className=" mt-3 flexbox flexcenter ">
                                        <div className="col-md-7">
                                            <img src={backlog} alt="" />      
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingeIght2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNight2" aria-expanded="false" aria-controls="collapseNight2">
                                    Planning
                                </button>
                                </h2>
                                <div id="collapseNight2" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body justify-text">
                                    <strong>La ceremonia donde se realizan la planificación y priorización de las historias de usuario y tareas para el sprint, se asignan los responsable y se determinan la capacidad en puntos de esfuerzo. </strong>
                                    <div className=" mt-3 flexbox flexcenter ">
                                        <div className="col-md-12">
                                            <iframe src="https://drive.google.com/file/d/17r9j8MY1rc-yazGQcYVVmjfL4xqJSmAy/preview"  width="100%" height="480" allow="autoplay"></iframe>   
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingeIght3">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNight3" aria-expanded="false" aria-controls="collapseNight3">
                                    Review
                                </button>
                                </h2>
                                <div id="collapseNight3" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body justify-text">
                                    <strong>Dentro de nuestro paso por ser más eficiente es importante resaltar todos los aspectos que estamos teniendo como resultado en el ejecución del proyecto, es por ello que mediante la review buscamos encontrar puntos clave con ventajas y desventajas del desarrollo, para mejorar el rendimientos y calidad de cada producto. <a className="atributeA" target="_blank" href="https://carlosalgabez08.atlassian.net/l/cp/L3YTtUi0">Ver Review</a></strong>
                                    <div className=" mt-3 flexbox flexcenter ">
                                        <div className="col-md-7">
                                            <img src={review} alt="" />      
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                {/* <article className="container-repl">
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
                </article> */}
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
                                <label htmlFor="inputEmail4">Apellidos</label>
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