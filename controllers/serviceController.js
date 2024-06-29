import Service from '../models/serviceModel.js';

// Crear un nuevo servicio
async function createService( req, res  ){
    try {
        const newService = new Service(req.body);
        await newService.save();

        res.status(201).json(newService);

    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error, data: []});
    }
}

// Obtener todos los servicios
async function getAllServices  (req, res){
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).send({ message: error, data: []});
    }
};

//obtener un servicio por ID
async function getServiceById (req, res){
    try {
        const service = await Service.findById(req.params.id);
        if (!service) {
            return res.status(404).send("Service not found.")
        }
        res.status(200).json(service);
    } catch (error) {
        res.status(500).send(error.message)
    }
};

//actualizar un servicio
async function updateService (req, res){
try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true } );
if (!service){
    return res.status(404).send("Service not found.")
}
res.status(200).json(service);

} catch (error) {
    res.status(400).send(error.message);
}
};

//Eliminar servicio
async function deleteService (req, res){
    try {
        const service = await Service.findByIdAndDelete(req.params.id);
        if(!service){
            return res.status(404).send("Service not found.")
        }
        res.status(200).json("Service Deleted successfully.");
    } catch (error) {
        res.status(500).send(error.message);
    }
}


// Exporto las funciones
export { createService, getAllServices, getServiceById, updateService, deleteService}