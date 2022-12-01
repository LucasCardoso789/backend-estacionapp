import { Request, Response } from 'express';

import { getRepository } from 'typeorm';
import Parking from '../models/Parking';
import parkingView from '../views/parkings_view';
import * as Yup from 'yup';
// import Orphanage from '../models/Parking';

export default {
    async create(request: Request, response: Response) {

        const {
            nameParking,
            email,
            phone,
            nameContact,
            opening_hours,
            countVacancyCar,
            countVacancyMoto,
            costCarMonth,
            costCarDay,
            costCarHour,
            costMotoMonth,
            costMotoDay,
            costMotoHour,
            latitude,
            longitude,
            otherService,
        } = (request.body);

        const parkingsRepository = getRepository(Parking);


        const data = {
            nameParking,
            email,
            phone,
            nameContact,
            opening_hours,
            countVacancyCar,
            countVacancyMoto,
            costCarMonth,
            costCarDay,
            costCarHour,
            costMotoMonth,
            costMotoDay,
            costMotoHour,
            latitude,
            longitude,
            otherService,
        };

        const schema = Yup.object().shape({
            nameParking: Yup.string().required(),
            email: Yup.string(),
            phone: Yup.string().required(),
            nameContact: Yup.string().required(),
            opening_hours: Yup.string().required(),
            countVacancyCar: Yup.number().required(),
            countVacancyMoto: Yup.number().required(),
            costCarMonth: Yup.number().required(),
            costCarDay: Yup.number().required(),
            costCarHour: Yup.number().required(),
            costMotoMonth: Yup.number().required(),
            costMotoDay: Yup.number().required(),
            costMotoHour: Yup.number().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            otherService: Yup.string().required().max(300),
        });


        await schema.validate(data, {
            abortEarly: false,
        });

        // console.log(data)
        
        const parking = parkingsRepository.create(data);
        console.log('chegou')

        await parkingsRepository.save(parking);

        return response.status(201).json(parking);
        
    },

    async index(request: Request, response: Response) {
        const parkingsRepository = getRepository(Parking);

        const parkings = await parkingsRepository.find();

        return response.json(parkingView.renderMany(parkings));
    },

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const parkingsRepository = getRepository(Parking);

        const parking = await parkingsRepository.findOneOrFail(id);

        return response.json(parkingView.render(parking));
    },
};