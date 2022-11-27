import { useParams } from "react-router-dom"
import apartmentList from '../../data/apartment.json'

import Rating from '../../components/Rating'
import Tag from '../../components/Tag';
import InfoBloc from '../../components/InfoBloc'
import React from "react";

import '../../styles/logement.scss';


const Logement = () => {
    const { paramsId } = useParams()
    const product = apartmentList.find((product) => product.id === paramsId)

    console.log(paramsId)

    return (
        <main className='logement'>
            <div>
                <Rating rating="3"/>
                <Tag getTag="Maison"/>
            </div>
            <div className='logement__infoZone'>
                <InfoBloc className="logement__infoZone__info" title="Description" content="" />
                <InfoBloc title="Equipements" content=""/>
            </div>
            <h2>Logement</h2>
        </main>
    )
}

export default Logement