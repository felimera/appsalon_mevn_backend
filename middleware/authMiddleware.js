import jwt from 'jsonwebtoken';

const authMiddleware=(req,res,next)=>{
    if(req.headers.authorization&&req.headers.authorization.startsWith('Bearer'))
    {
try {
    const token=req.headers.authorization.split(' ')[1];
    const decode=jwt.verify(token,process.env.JWT_SECRET);
    console.log(decode);
} catch {
    const error=new Error('Token no válido');
        res.status(403).json({msg:error.message});
}
    }else{
        const error=new Error('Token no válido o inexistente');
        res.status(403).json({msg:error.message});
    }
}

export default authMiddleware;