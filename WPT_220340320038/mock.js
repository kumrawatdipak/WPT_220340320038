
    let userdata={
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'test',
	port:3306
    }

    const mysql=reqire(mysql2);
    const con=mysql.createConnection(userdata);

    const express=require(express);
    const app=express();

    app.use(express.static("sf"));

    
    let input=req.query.xyz;
    let output={itemfound:false,bookdetails:{itemno:4,bookname:"",price:700}}


    app.get("/updateprice",(req,resp))
    var result ="";
    connection.query("select * from booklist where bookid = ?", [req.body.xyz.pqr], (err, res1) => {
            if (err) {
                result = err;
                console.log("trouble " + err);
            } else {
                result = res1;
                console.log("success" + result)
            }
            
            res.send(result);
        });

