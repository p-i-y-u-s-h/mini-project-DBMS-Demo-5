export const signup = (req,res)=>{
    const {fullName,email,password} = req.body
    try {
        
    } catch (error) {
        
    }
}

export const login = (req,res)=>{
    res.send("login page");
    console.log(1)
}

export const logout = (req,res)=>{
    res.send("logout page");
}