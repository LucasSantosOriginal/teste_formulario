
const loader = document.getElementById("loader");
const videoSection = document.getElementById("videoSection");
const video = document.getElementById("prankVideo");
const status = document.getElementById("status");

const loadingTime = 1000;

setTimeout(async () => {
    loader.hidden = true;
    videoSection.hidden = false;

    video.muted = true;
    video.defaultMuted = true;
    video.volume = 1;

    try {
        await video.play();
        status.hidden = true;
    } catch (error) {
        status.hidden = false;
        status.textContent =
            "Clique em reproduzir para assistir ao vídeo.";
    }
}, loadingTime);

video.addEventListener("playing", () => {
    status.hidden = true;
});

video.addEventListener("error", () => {
    status.hidden = false;
    status.textContent =
        "Não foi possível carregar o vídeo. Verifique o arquivo video.mp4.";
});
