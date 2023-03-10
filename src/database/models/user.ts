const mongoose = require('mongoose')

const userSchema: any = new mongoose.Schema({
    //personal details
    firstName : {type  : String},
    lastName : { type : String},
    middleName :  {type : String},

    aadharCard : { type : String},
    address : {type : String},
    area : {type : String},
    city : {type : String},
    district : {type : String},
    state : {type :String},
    zipCode : {type : String},
    rollNo : {type : Number},
    standard : {type : mongoose.Schema.Types.ObjectId , ref : "standard"},
    class :  {type : String},
    dob : {type : Date},
    bloodGroup : {type :  String},
    preSchool: {type : String},

    email: { type: String, required: true },
    phoneNumber: { type: String},
    userId : {type : String},
    password: { type: String },
    profilePhoto : {type : String},

    //parent details
    fatherName : {type : String},
    motherName : {type : String},
    accHolderName : {type : String},
    accNumber : {type : String},
    ifscCode : {type : String},

    //sibling
    siblings : [
    {
      _id : {type :mongoose.Schema.Types.ObjectId , ref : "user" },
     relation : {type : String}
    } 
    ],

    //achievements 
    achievements : [
        {
          name : {type :String},
          description : {type : String},
          certificate : {type : String}
        } 
    ],



    
   
    otp: { type: Number, default: null },
    otpExpireTime: { type: Date, default: null },
    isEmailVerified: { type: Boolean, default: false },
   
    userType : { type : String , default :"user"}, //faculty , admin , user
    isActive: { type: Boolean, default: true },
    isBlock: { type: Boolean, default: false },
    isLoggedIn : { type : Boolean , default : false},

}, { timestamps: true })

export const userModel = mongoose.model('user', userSchema);