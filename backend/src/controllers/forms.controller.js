// importamos el modelo del formulario 
const formModel = require('../models/formulario');
// objeto que manejara las peticiones del servidor
const formCtrl ={};

// metodo get para obtener todos los formularios
    formCtrl.getForms = async (req,res)=>{
       // almacenamos los formularos obteenidos
       const formularios = await formModel.find();
       // respuesta 
       res.json(formularios);
    };

// metodo post para guarda formulario

    formCtrl.postForm = async (req,res)=>{
        const {name , lastName, phone, document }= req.body;
        const newForm = new formModel({
            name: name,
            lastName: lastName,
            phone: phone,
            document: document
        });
        await newForm.save();
        res.json({message: 'form save'});
    };


    module.exports=formCtrl;