let url = 'https://vaidarcertoo.herokuapp.com/LOL'


export async function account (user) {
    const response = await fetch(`${url}/account/${user}`)
    const json = response.json ()

    return json
}

export async function historico (user) {
    const response = await fetch(`${url}/historico/${user}`)
    const json = response.json ()

    return json 
}

export async function historicoDetalhado (user) {
    const response = await fetch(`${url}/historico/detalhes/${user}`)
    const json = response.json ()

    return json 
}



