

const b = async (req, res, next) => {
    try {

        var r = await a(req.url)
        // console.log(r);
        req.namer = r
        next() ;
    } catch (error) {
        return error
    }
    // console.log(r);

}

// export default a
async function a(url) {
    return new Promise((resolve, reject) => {
        try {

            resolve(url)
        } catch (error) {
            resolve(error)
        }
    })
}
export default b;