import React from "react";
import { useParams } from "react-router-dom";
import Notfound from "../../common/404";
import Home from "../home/Home";
import { IuseParams } from "../../../interface/useparams.interface";

function Index({ }: any): React.ReactElement {

    const { auth } = useParams<keyof IuseParams>()  as IuseParams;

    if (auth !== 'MTIzNDU2Nzg5MGF1dGhwdWNsaWNrZXlhY2Nlc2FkbWlu') {
        return <Notfound text={'Acceso denegado'} title={'Error de acceso'} />
    } else {
        return (
            <Home/>
        )
    }
}

export default Index;