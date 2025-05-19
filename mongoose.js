const mongoose=require("mongoose")
const uri="mongodb://localhost:27017/studentDB"

async function connectdb(){
    try{
        await mongoose.connect(uri)
        console.log("connected")

        const userSchema=new mongoose.Schema({
            name: String,
            rollNumber: Number,
            course: String,
            email: String

        })
        const collection=mongoose.model('students',userSchema)
        //const data=new collection({name:'Monalisha Kar',rollNumber:'2001',course:'MCA', email:'monalishakar25d@gmail.com'})
        //await data.save()

        //CREATE OPERATION

        const insonedata=await collection.insertOne({name:'Monalisha Kar',rollNumber:'2001',course:'MCA', email:'monalishakar25d@gmail.com'})
        console.log("data inserted")

        const insmanydata=await collection.insertMany([{name:'Monalisha Kar',rollNumber:'2001',course:'MCA', email:'monalishakar25d@gmail.com'},
                       {name:'Shreya Mondal',rollNumber:'2002',course:'MCA', email:'shreyamondal@gmail.com'},
                       {name:'Joy Paul',rollNumber:'2003',course:'MCA', email:'jpaul@gmail.com'},
                       {name:'Arkadeep Roy',rollNumber:'2004',course:'BSC', email:'aroy@gmail.com'},
                       {name:'Banti Saha',rollNumber:'2005',course:'BTECH', email:'bsaha@gmail.com'},
                       {name:'Amiyo Singha',rollNumber:'2006',course:'MTECH', email:'asingha@gmail.com'}                             
        ])
        console.log("data inserted")

        //READ OPERATION

        const data1 = await collection.findOne({rollNumber:'2002'});
        console.log('%s %d %s %s', data1.name, data1.rollNumber, data1.course, data1.email)
        const data2 = await collection.find();
        console.log(data2)

        //UPDATE OPERATION

        const updatedata = await collection.updateOne({rollNumber:'2001'},{$set:{course:'MERN'}});
        console.log("Data Updated")
        console.log(updatedata)

        const updatemanydata = await collection.updateMany({course:'MCA'},{$set:{course:'MERN'}});
        console.log("Data Updated")
        console.log(updatemanydata)

        //DELETE OPERATION

         const deletedata = await collection.deleteOne({rollNumber:'2001'});
         console.log("Data Deleted")
         console.log(deletedata)
    
    }catch(err){
        if(err) throw err
    }
}
connectdb()