import Parking from "../models/Parking";

export default{
    render(parking: Parking) {
        return {
            id: parking.id,
            nameParking: parking.nameParking,
            email: parking.email,
            phone: parking.phone,
            nameContact: parking.nameContact,
            opening_hours: parking.opening_hours,
            countVacancyCar: parking.countVacancyCar,
            countVacancyMoto: parking.countVacancyMoto,
            costCarMonth: parking.costCarMonth,
            costCarDay: parking.costCarDay,
            costCarHour: parking.costCarHour,
            costMotoMonth: parking.costMotoMonth,
            costMotoDay: parking.costMotoDay,
            costMotoHour: parking.costMotoHour,
            latitude: parking.latitude,
            longitude: parking.longitude,
            otherService: parking.otherService
        };
    },

    renderMany(parking: Parking[]){
        return parking.map(parking => this.render(parking));
    }
}