
class Errors extends Error{
    statusCode: number
    constructor(message: any,statusCode: number){
        super(message)
        this.statusCode = statusCode
    }
}

export default Errors