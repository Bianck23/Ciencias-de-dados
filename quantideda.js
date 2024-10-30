async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeomrails/api/main/numero_usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const anosdaspeesquisas = Object.keys (dados)
    const plasticonosoceanos = Object.values(dados)

    const data = [
        {
            x: anosdaspeesquisas
            y: plasticonosoceanos
            type:'bar'

        }
    ]

      console.log(dados)
  }