const posts = [
    "posts/post1.md",
    "posts/post2.md"
];

function loadPosts() {
    const container = document.getElementById('blog-posts');

    posts.forEach(post => {
        fetch(post)
            .then(response => response.text())
            .then(markdown => {
                const html = marked(markdown); // Usando a biblioteca Marked.js para converter Markdown para HTML
                const article = document.createElement('article');
                article.innerHTML = html;
                container.appendChild(article);
            });
    });
}

document.addEventListener('DOMContentLoaded', loadPosts);
