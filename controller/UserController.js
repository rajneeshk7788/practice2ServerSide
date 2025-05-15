import userModel from "../model/UserModel.js";

const userRegister = async (req, res) => {
    console.log("User registration request received");
    
    try {
        console.log(req.body);
        const { name, email, password, phone, address } = req.body;
        if (!name || !email || !password || !phone || !address) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const user = await userModel.create({
            name,
            email,
            password,
            phone,
            address
        });
        console.log(user);
        return res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export default userRegister;
