let offset = 0;

// Obtener publicaciones desde la API
function fetchPosts() {
    return $.get(`https://jsonplaceholder.typicode.com/posts?_start=${offset}&_limit=3`);
}

// Obtener una imagen aleatoria desde la API de Picsum
function fetchImage() {
    return `https://picsum.photos/300/200?random=${Math.random()}`;
}

// Cargar publicaciones en la página
function loadPosts() {

    fetchPosts().done(posts => {

        const container = $("#posts");

        posts.forEach(post => {

            const card = $(`
                <div class="bg-white p-4 shadow rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl">
                    <img src="${fetchImage()}" alt="Imagen aleatoria" class="w-full h-48 object-cover rounded-t-lg mb-4">
                    <h2 class="text-lg font-bold">${post.title}</h2>
                    <p>${post.body}</p>
                </div>
            `);

            container.append(card);

        });

        offset += 3;

    });

}

// Desplazamiento infinito
$(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
        loadPosts();
    }
});

// Botón de Cargar más y cargar inicialmente
$(document).ready(function() {

    // Cargo inicialmente las publicaciones
    loadPosts();

    // Cargar publicaciones al hacer clic en el botón
    $("#loadMore").click(loadPosts);
    
});
