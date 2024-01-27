import React from 'react';
import Licencias from '../componentes/licencias';
import Estudios from '../componentes/estudios';
import Aptitudes from '../componentes/aptitudes';



export default class InicioPagina extends React.Component {

    render(){
        return(
            <div>
                <div className="pruebaFuente2">
                    <div>
                        inicio <i class="bi bi-house-heart-fill"></i>
                    </div>
                </div>
                <div className='container row'>
                    <Licencias academia='Lumetrio' curso='Frontend' aptitudes='aptitud aptitud aptitud' diploma="/img/lumetrio.jpg" linkLicencia='https://lumetrio.com/certificado/389723d49d757448fa04d' />
                    <Licencias academia='Lumetrio' curso='Bases de Datos y SQL' aptitudes='aptitud aptitud aptitud' diploma="/img/Bases_de_Datos.jpg" linkLicencia='https://lumetrio.com/certificado/38973379e088963597708'/>
                    <Licencias academia='Lumetrio' curso='python' aptitudes='aptitud aptitud aptitud' diploma="/img/Python.jpg " linkLicencia='https://lumetrio.com/certificado/38975dcecfa26c9edf855' />
                </div>
            </div>
        )
    }
}