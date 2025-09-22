import axiosInstance from './axiosInstance';

export function getTours() {
    return axiosInstance.get('/tours');
}

export function getTourById(tourId) {
    return axiosInstance.get('/tours',{tourId});
}
export function puttourserved(personName,tour_schedule_id,reserved_at) {
    return axiosInstance.put('/tours/reserve', {personName,tour_schedule_id,reserved_at});
}
