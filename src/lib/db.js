const {username,password} = process.env
export const connectionStr="mongodb+srv://"+username+":"+password+"@cluster0.xg73pwe.mongodb.net/Auditdb?retryWrites=true&w=majority&appName=Cluster0";