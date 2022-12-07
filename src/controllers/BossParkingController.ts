import { Request, Response } from 'express';

import { getRepository } from 'typeorm';
import BossParking from '../models/BossParking';
import bossParkingView from '../views/bossParking_view';
import * as Yup from 'yup';

export default {
    async create(request: Request, response: Response) {

        const {
            user,
            password,
            id_parking,
            status,
        } = (request.body);

        const bossParkingRepository = getRepository(BossParking);


        const data = {
            user,
            password,
            id_parking,
            status
        };

        const schema = Yup.object().shape({
            user: Yup.string().required(),
            password: Yup.string().required(),
            id_parking: Yup.string().required(),
            status: Yup.string().required(),
        });

        await schema.validate(data, {
            abortEarly: false,
        });
        
        const bossParking = bossParkingRepository.create(data);

        await bossParkingRepository.save(bossParking);

        return response.status(201).json(bossParking);
        
    },

    async index(request: Request, response: Response) {
        const bossParkingRepository = getRepository(BossParking);

        const bossParking = await bossParkingRepository.find();

        return response.json(bossParkingView.renderMany(bossParking));
    },

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const bossParkingRepository = getRepository(BossParking);

        const bossParking = await bossParkingRepository.findOneOrFail(id);

        return response.json(bossParkingView.render(bossParking));
    },
};