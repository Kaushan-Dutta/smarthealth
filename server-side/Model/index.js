const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    entity:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
})
const patientSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserModel'
    },
    appointment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'AppointmentModel'
    },
    
})
const doctorSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserModel'
    },
    appointment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'AppointmentModel'
    },
    
})
const adminSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserModel'
    },
    appointment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'AppointmentModel'
    },
    
})
const appointmentSchema=new mongoose.Schema({
    patientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'PatientModel'
    },
    doctorCheck:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'DoctorModel'
    },
    date:{
        type:Date,
        required:true
    },

})
const userModel=new mongoose.Model('UserModel',userSchema);
const patientModel=new mongoose.Model('PatientModel',patientSchema);
const doctorModel=new mongoose.Model('DoctorModel',doctorSchema);
const adminModel=new mongoose.Model('AdminModel',adminSchema);
const appointmentModel=new mongoose.Model('AppointmentModel',appointmentSchema);

module.exports={userModel,patientModel,doctorModel,adminModel,appointmentModel}