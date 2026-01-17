const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
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
                    <p>${post.name}</p>
                    <p>${post.location}</p>
                </div>
            </div>
            <img class="post-image" src="${post.post}" alt="Post by ${post.username}.">
            <div class="post-details">
                <div class="post-icons">
                    <img src="images/icon-heart.png" class="icon">
                    <img src="images/icon-comment.png" class="icon">
                    <img src="images/icon-dm.png" class="icon">
                </div>
                <div class="post-likes-comments">
                    <p class="no-margin"><strong>${post.likes} likes</strong></p>
                    <p class="no-margin"><strong>${post.username}</strong> ${post.comment}</p>
                </div>
            </div>
        </div>
        `
    })
    feed.innerHTML = feedHTML
}

renderPosts()