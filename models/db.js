const Pool = require('pg').Pool

const pool = new Pool({
    user:"gideons",
    host:"localhost",
    database:"api",
    password:"aladdin200",
    port:"5432"
})

function getFlowers(req,res){
    pool.query("select * from flowers",(err,data)=>{
        if(err){
            console.error(err)
        }else{
            res.json({"data":data.rows})
        }
    })
}

function getFlowerById(req,res){
    const id = parseInt(req.params.id)
    pool.query("SELECT * FROM flowers where id=$1",[id],(err,data)=>{
        if(err){
            console.error(err)
        }else{
            res.json({"data":data.rows})
        }
    })
}

module.exports = {
    getFlowers,
    getFlowerById,
    
}