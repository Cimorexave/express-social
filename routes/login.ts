//modules
//express
import * as express from "express";
const router = express.Router();

router.get("/login", (req: express.Request, res: express.Response) => {
    res.json({
        msg: "login using username and password"
    })
} )
router.post("/login", (req: express.Request, res: express.Response) => {
    //check to see if there are login info in the body
    if (!req.body) {
        res.json({
            success: false,
            msg: "wrong informantion"
        }); 
        //saving login failed login attempt
    }
    //destructing username and password from the body
    const {username , password} = req.body;
    //checking to see if the username and password exist in the database

    //checking to see if they are valid

    //returning successfull response

    //saving login history

})

export default router;