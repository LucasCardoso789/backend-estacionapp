import BossParking from "../models/BossParking";

export default{
    render(bossParking: BossParking) {
        return {
            id: bossParking.id,
            user: bossParking.user,
            password: bossParking.password,
            id_parking: bossParking.id_parking,
            status: bossParking.status,
        };
    },

    renderMany(bossParking: BossParking[]){
        return bossParking.map(bossParking => this.render(bossParking));
    }
}