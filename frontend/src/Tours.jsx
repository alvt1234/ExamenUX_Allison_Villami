/*Cree un componente <Tours/> que hace una petición al endpoint “/tours” y muestra la lista de tours disponibles para hacer una reservación. Use la función .map(). */
import React, { useEffect, useState } from 'react';
import {Container,Col} from 'react-bootstrap';
import { getTours } from './api/toursapi';
import { useDispatch, useSelector } from 'react-redux';
import TourCard from './TourCard';
import { settours } from './store/tourslice';
export default function Tours() {
    const dispatch = useDispatch();
    const toursState = useSelector((state) => state.tours);
    useEffect(() => {
        const fetchTours = async () => {
            try {
                const data = await getTours();
                settours(data);
                dispatch({ type: 'settours', payload: data });
            } catch (error) {
                console.error('Error fetching tours:', error);
            }
        };
        fetchTours();
    }, [dispatch]);

    return (
        <Container>
           <h2> TOURS</h2>  
           {toursState.map((tour) => (
            <>
              <Col md={13} key={tour.id}/>
              <TourCard tour={tour} />
            </>
           ))}
        </Container>
        
    );
}