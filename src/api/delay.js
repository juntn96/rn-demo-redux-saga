export default (t) => {
    return new Promise( resolve => {
        setTimeout(resolve, t)
    })
}