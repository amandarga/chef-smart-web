import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }
})

// explicando a linha abaixo: se no mongoose já tiver o modelo User, ele retorna esse modelo acima.
// se não existir, ele cria um modelo novo.
export default mongoose.models.User || mongoose.model('User', UserSchema)