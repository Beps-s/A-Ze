export const uploadImage = (req, res) => {
    const {image} = req.files

    if(!image){
        res.send({error: 'Tekkis viga pildi üleslaadimisel'})
    }

    image.mv(`./images/` + image.name);
}