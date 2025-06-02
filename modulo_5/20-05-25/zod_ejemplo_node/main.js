const {z} = require("zod");
console.log(z);

const formularioSchema = z.object({
    nombre: z.string().min(1, "El nombre es requerido"),
    edad: z.coerce,

    cellphone: z.maxLength(10, "El formato del celular es incorrecto") //44481219111
})