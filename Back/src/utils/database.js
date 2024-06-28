import mongoose from "mongoose";

// se você for mandar isso para produção:
// a senha e o admin não pode ficar assim EXPOSTOS!!!
// daí teria que configurar uma variável de ambiente para isso.
// aqui está assim porque é apenas um teste de projeto de backend mesmo.
const URI = 'mongodb+srv://admin:teste@cluster0.ilrusx1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// é importante que nos conectemos apenas 1 vez
// senão, a cada requisição teríamos várias conexões diferentes.
const databaseConnection = async () => {
    if (!global.mongoose) {
        mongoose.set('strictQuery', false)
        global.mongoose = await mongoose.connect(URI)
    }
}
// sempre que precisarmos de conexão com o Banco de Dados, chamaremos a função acima.

export default databaseConnection;