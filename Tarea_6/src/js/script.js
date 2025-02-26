let offset = 0;

// Obtener publicaciones desde la API

function fetchPosts() {
    return fetch(`https://jsonplaceholder.typicode.com/posts?_start=${offset}&_limit=3`)
        .then(response => response.json());
}

// Obtener una imagen aleatoria desde la API de Picsum

function fetchImage() {
    return `https://picsum.photos/300/200?random=${Math.random()}`;
}

// Cargar publicaciones en la página

function loadPosts() {

    fetchPosts().then(posts => {

        const container = document.getElementById("posts");

        posts.forEach(post => {

            const card = document.createElement("div");
            card.className = "bg-white p-4 shadow rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl";

            const imageUrl = fetchImage();

            card.innerHTML = `
                <img src="${imageUrl}" alt="Imagen aleatoria" class="w-full h-48 object-cover rounded-t-lg mb-4">
                <h2 class="text-lg font-bold">${post.title}</h2>
                <p>${post.body}</p>
            `;

            container.appendChild(card);

        });

        offset += 3;

    });

}

// Desplazamiento infinito

window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) loadPosts();
};

// Botón de Cargar más y cargar inicialmente

document.getElementById("loadMore").addEventListener("click", loadPosts);
window.onload = loadPosts;