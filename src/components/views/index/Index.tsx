import React from "react";
import { useParams } from "react-router-dom";
import Notfound from "../../common/404";

function Index({ path }: any): React.ReactElement {

    const { auth } = useParams();
    if (auth !== 'MTIzNDU2Nzg5MGF1dGhwdWNsaWNrZXlhY2Nlc2FkbWlu') {
        return <Notfound text={'Acceso denegado'} title={'Error de acceso'} />
    } else {
        return (
            <h1>Hola desde index</h1>
        )
    }
}

export default Index;