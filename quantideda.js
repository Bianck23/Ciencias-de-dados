async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeomrails/api/main/numero_usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const anosdaspeesquisas = Object.keys (dados)
    const plasticonosoceanos = Object.values(dados)

    console.log(dados)

    const data = [
        {
            x: anosdaspeesquisas
            y: plasticonosoceanos
            type:'bar'

        }
    ]
     const grafico = document.createElement('div')
      grafico.className = 'grafico'
      document.getElementById('grafico-container').appendChild(grafico)
      plotly.newplot(grafico)
  }
  quantidadeUsuarios()