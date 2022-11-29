import { useParams } from "react-router-dom"
import ApartmentList from '../../data/apartment.json'

import Rating from '../../components/Rating'
import Tag from '../../components/Tag';
import InfoBloc from '../../components/InfoBloc'
import Slider from '../../components/Slider'
import React from "react";

import '../../styles/logement.scss';


const Logement = () => {
    const {id} = useParams()
    const product = ApartmentList.find((product) => product.id === id)

    return (
        <main className='logement'>
            <Slider slides={product.pictures} />
            <div className="logement__name">
                <div className="logement__name__titleZone">
                    <h1>{product.title}</h1>
                    <p>{product.location}</p>
                    
                    <div className="logement__name__titleZone__tags">
                    {product.tags.map((tag, index) => 
                            <Tag key={index} getTag={tag}/>
                        )}
                    </div>
                </div>
                <div className="logement__name__host">
                    <div className="logement__name__host__person_name">
                        <p>{product.host.name}</p>
                        <img src={product.host.picture} alt="" />
                    </div>
                    <div className="logement__name__host__rating">
                        <Rating rating={product.rating}/>
                    </div>
                </div>
            </div>

            <div className='logement__infoZone'>
                <InfoBloc className="logement__infoZone__info" title="Description" content={product.description} />
                <InfoBloc className="logement__infoZone__info"  title="Equipements" content={product.equipments}/>
            </div>
        </main>
    )
}

export default Logement