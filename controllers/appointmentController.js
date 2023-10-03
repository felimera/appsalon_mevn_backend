import { parse, formatISO } from 'date-fns';
import Appointment from '../models/Appointment.js';

const createAppointment = async (req, res) => {
    const appointment = req.body;
    appointment.user = req.user._id.toString();
    try {
        const newAppointment = new Appointment(appointment);
        await newAppointment.save();
        res.json({ msg: 'Tu Reservación se realizó Correctamente' });
    } catch (error) {
        console.log(error)
    }
}

const getAppointmentsByDate = async (req, res) => {
    const {date} =req.query;
    const newDate = parse(strDate, 'dd/MM/yyyy', new Date())
    const isoDate= formatISO(newDate);
}

export {
    createAppointment,
    getAppointmentsByDate
}