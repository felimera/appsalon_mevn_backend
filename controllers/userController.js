import Appointment from "../models/Appointment.js";

const getUserAppointmets = async (req, res) => {
    const { user } = req.params;

    if (user !== req.user._id.toString()) {
        const error = new Error('Acceso Denegado');
        return res.status(400).json({ msg: error.message });
    }

    try {
        const query = req.user.admin ? { date: { $gte: new Date() } } : { user: user, date: { $gte: new Date() } };
        const appointments = await Appointment.find(query).populate('services').sort({ date: 'asc' });
        res.json(appointments);
    } catch (error) {
        console.log(error)
    }
}

export {
    getUserAppointmets
}