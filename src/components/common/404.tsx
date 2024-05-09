import "../../styles/404.css"


const Notfound = ({text,title} : any): React.ReactElement => {
    
    return (
        <div className="mainbox">
            { !title ? <><div className="err">4</div>
            <i className="far fa-question-circle fa-spin colorblu"></i>
                <div className="err2">4</div></> : 
                <div className="errtitle">{title}</div>
            }
            {!text ? <div className="msg"><p>¡Lo sentimos página no encontrada!</p></div> : <div className="msg"><p>{text}</p></div>}
            <div className="msg"><p>Carlos Alberto Gallego Benítez - MVP Iberoamericana</p></div>
        </div>
    )
}

export default Notfound;