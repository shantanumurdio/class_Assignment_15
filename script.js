const accessKey = "f0ox4OHMOQ1sgixwGqYcv8_mIaBldC-ISGAE9RQREyM";

const btn = document.getElementById("btn");
const animeContainer = document.querySelector(".anime-container");
const animeImg = document.getElementById("anime-img");
const animeName = document.getElementById("anime-name");
const limits = document.getElementById("limits");
const end = document.querySelector(".end");

btn.addEventListener("click", async () => {
  try {
    btn.disabled = true;
    btn.innerText = "Loading..";
    animeName.innerText = "Updating...";

    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${accessKey}&query=anime`
    );
    const data = await response.json();
    console.log(data);
    btn.disabled = false;
    btn.innerText = "Get Anime";
    animeContainer.style.display = "block";
    animeImg.src = data.urls.regular;
    animeName.innerText = data.user.username;
  } catch (error) {
    console.log(error);
    btn.disabled = false;
    btn.innerText = "Get Anime";
    end.style.backgroundColor = "green" ;
    limits.innerText = "Limit Exceeded Or there is an error, try again later.";
  }
});