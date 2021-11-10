const calcular = document.getElementById('calcular');

    function pace(){
        const nome = document.getElementById('nome').value;
        const peso = document.getElementById('peso').value;
        const distancia = document.getElementById('distancia').value;
        const tempo = document.getElementById('tempo').value;
        const resultado = document.getElementById('resultado');

        if(nome !== '' && peso !== '' && distancia !== '' && tempo !==''){
            const tempo_corte = tempo.split(':')

            const horas = parseInt(tempo_corte[0]);
            const minutos = parseInt(tempo_corte[1]);
            const segundos = parseInt(tempo_corte[2]);

            const tempo_horas = horas + (minutos/60) + (segundos/3600);

            const tempo_min = (horas*60) + minutos + (segundos/60)

            const velocidade = (distancia/(tempo_horas)).toFixed(2);

            resultado.textContent = `Ola, ${nome} ! você percorreu ${distancia}km em ${tempo}, e teve uma velocidade média de ${velocidade}`
        }
        else{
            resultado.textContent = 'Preencha os campos corretamente para que o calculo seja feito'
        }
    }

 calcular.addEventListener(click, pace);