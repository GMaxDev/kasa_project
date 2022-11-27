import { useParams } from "react-router-dom"
import ApartmentList from '../../data/apartment.json'

import Rating from '../../components/Rating'
import Tag from '../../components/Tag';
import InfoBloc from '../../components/InfoBloc'
import React from "react";

import '../../styles/logement.scss';


const Logement = () => {
    const { paramsId } = useParams()
    const product = ApartmentList.find((product) => product.id === paramsId)

    console.log(paramsId)

    return (
        <main className='logement'>
            <div className="logement__name">
                <div className="logement__name__titleZone">
                    <h1>Cozy loft on the Canal Saint-Martin</h1>
                    <p>Paris, Île-de-France</p>
                </div>
                <div className="logement__name__host">
                    <div className="logement__name__host__person_name">
                        <p>Alexandre</p>
                        <p>Dumas</p>
                    </div>
                    <img src="" alt="" className="" />
                </div>
            </div>
            <div className="logement__tag_rating">
                <div className="logement__tag_rating__list">
                    <Tag getTag="Maison"/>
                    <Tag getTag="Garage"/>
                </div>
                <Rating rating="3"/>
            </div>
            <div className='logement__infoZone'>
                <InfoBloc className="logement__infoZone__info" title="Description" content="" />
                <InfoBloc className="logement__infoZone__info"  title="Equipements" content=""/>
            </div>
        </main>
    )
}

export default Logement