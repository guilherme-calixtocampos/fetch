    const file = "https://682282a1b342dce8004e7746.mockapi.io/animal";

    const animal = {
      nome: "Toto",
      idade: 12,
      raca: "cachorro"
    };

    function cadastrarAnimal() {
      fetch(file, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(animal)
      })
      .then(() => carregarAnimais()) // Após cadastrar, atualiza a lista
      .catch(error => console.log("Erro ao cadastrar:", error));
    }

    function carregarAnimais() {
      fetch(file)
        .then(response => response.json())
        .then(animais => {
          const ul = document.querySelector("ul");
          ul.innerHTML = ""; // limpa a lista

          for (let index of animais) {
            ul.innerHTML += `<li>${index.id} - ${index.nome}  (${index.idade}) ${index.raca}</li>`;
          }
        })
        .catch(error => console.log("Erro ao carregar:", error));
    }

      window.onload = carregarAnimais;