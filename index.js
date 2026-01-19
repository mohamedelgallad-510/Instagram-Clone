import { v4 as uuidv4 } from "https://cdn.skypack.dev/uuid";

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        isLiked: false,
        uuid: uuidv4()
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        isLiked: false,
        uuid: uuidv4()
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        isLiked: false,
        uuid: uuidv4()
    }
]

const feed = document.getElementById("feed");

function renderPosts() {
    let feedHTML = ""
    posts.forEach(function(post) {
        feedHTML += `
        <div class="post">
            <div class="post-details-top">
                <img src="${post.avatar}" class="poster-photo" alt="A portrait of ${post.name}.">
                <div class="poster-name-loc">
                    <p><b>${post.name}</b></p>
                    <p>${post.location}</p>
                </div>
            </div>
            <img class="post-image" src="${post.post}" alt="Post by ${post.username}.">
            <div class="post-details">
                <div class="post-icons">
                    <i class="fa-regular fa-heart icon" data-like='${post.uuid}'></i>
                    <i class="fa-regular fa-comment icon" data-comment='${post.uuid}'></i>
                    <i class="fa-regular fa-paper-plane icon" data-share='${post.uuid}'></i>
                </div>
                <div class="post-likes-comments">
                    <p class="no-margin"><strong>${post.likes} likes</strong></p>
                    <p class="no-margin"><strong>${post.username}</strong> ${post.comment}</p>
                </div>
            </div>
        </div>
        `
    })
    console.log(feedHTML)
    feed.innerHTML = feedHTML
}

renderPosts()

/* document.addEventListener("dblclick", function(e) {
    if (e.target.classList.contains("post-image")) {
        const postIndex = Array.from(feed.getElementsByClassName("post-image")).indexOf(e.target);
        posts[postIndex].likes += 1;
        renderPosts();
    }
}); */

document.addEventListener("click", function(e) {
    if (e.target.dataset.like) {
        handleLikeClick(e.target.dataset.like);
    }});

function handleLikeClick(postUuid) {
    const post = posts.find(post => post.uuid === postUuid);
    if (post) {
        if (!post.isLiked) {
            post.likes += 1;
            post.isLiked = true;
            document.querySelector(`i[data-like='${postUuid}']`).classList.remove("fa-regular");
            document.querySelector(`i[data-like='${postUuid}']`).classList.add("fa-solid");
        } else {
            post.likes -= 1;
            post.isLiked = false;
            document.querySelector(`i[data-like='${postUuid}']`).classList.remove("fa-solid");
            document.querySelector(`i[data-like='${postUuid}']`).classList.add("fa-regular");
        }
}
renderPosts();}