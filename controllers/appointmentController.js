import Appointment from '../models/Appointment.js';

const createAppointment = async (req, res) => {
    try {
        const appointment=req.body;
        appointment.user=req.user._id.toString();
        console.log('appointment',appointment)
    } catch (error) {
        console.log(error)
    }
}

export {
    createAppointment
}