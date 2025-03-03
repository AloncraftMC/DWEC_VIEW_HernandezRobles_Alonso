let offset = 0;
const limit = 3;

// Obtener publicaciones desde la API
function fetchPosts() {
    return $.get(`https://jsonplaceholder.typicode.com/posts?_start=${offset}&_limit=${limit}`);
}

// Obtener una imagen aleatoria desde la API de Picsum
function fetchImage() {
    return `https://picsum.photos/300/200?random=${Math.random()}`;
}

// Cargar publicaciones en la página
function loadPosts() {

    fetchPosts().done(posts => {

        // Si no se reciben publicaciones, reiniciamos el offset y volvemos a cargar
        if (posts.length === 0) {
            offset = 0;
            return loadPosts();
        }

        const container = $("#posts");

        posts.forEach(post => {

            const card = $(`
                <section class="bg-white p-4 shadow rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl">
                    <img src="${fetchImage()}" alt="Imagen aleatoria" class="w-full h-48 object-cover rounded-t-lg mb-4">
                    <h2 class="text-lg font-bold">${post.title}</h2>
                    <p>${post.body}</p>
                </section>
            `);

            container.append(card);
        });

        offset += limit;
        
    });

}

// Desplazamiento infinito
$(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
        loadPosts();
    }
});

// Botón de Cargar más y carga inicial
$(document).ready(function() {
    loadPosts();
    $("#loadMore").click(loadPosts);
});