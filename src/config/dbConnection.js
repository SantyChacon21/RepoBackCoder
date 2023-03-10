import { connect } from "mongoose"

const URL = 'mongodb+srv://MaitaJv:qpwo_1029@cluster0.asmvudf.mongodb.net/ecommerce?retryWrites=true&w=majority'

const dbConnection = async () => {
    return await connect(URL, err => {
        if (err) {
            console.log('No es posible conectarse: ', err)
            process.exit()
        }
        console.log('DB se conecto exitosamente ')
    })
}

export default dbConnection