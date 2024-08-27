const Aula05 = () => {

    const usuario = [{ 
        id: 123,
         name: 'nome1', 
         description: 'descrição', 
         stock: 20 }]

    const showArray = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(usuario)
        }, 3000)
    })

    showArray
        .then((usuario) => {
            console.log(usuario);
        })
        .catch((usuario) => {
            console.log(Error)
        })


    return(

        <div>
            
        </div>
    )
}

export default Aula05