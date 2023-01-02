const sql = require('mssql/msnodesqlv8');
const config = require('./config')


exports.Login = async (req, res)=>{

    const username = req.params.username;

    try{
        const pool = new sql.ConnectionPool(config);
        pool.connect().then(() => { 
           pool.request()
           .input('UserName', sql.NVarChar, username)
           .query('select * from LoginRegisterDetails Where UserName = @UserName', (err, result) => {
               if(err) console.log(err)
               else{
                   console.log(username)
                   return res.json({data : result.recordset})
               }
           })
           sql.close();
    })
    }
    catch(err){
        console.log(err)
    }

    // Connecting to SQL



}

exports.getData = async (req, res)=>{
    console.log("Anup")
    try{
        const pool = new sql.ConnectionPool(config);
        await pool.connect().then(() => { 
           pool.request()
           .query('select * from LoginRegisterDetails',async (err, result) => {
               if(err) console.log(err)
               else{
                   const ans = await res.json({data : result.recordset});
                   return ans;
               }
           })
           sql.close();

           return res.json(pool)
    })
    }
    catch(err){
        console.log(err)
    }
}

exports.postUserDetails = async (req, res)=>{
    console.log("UserDetails");
}