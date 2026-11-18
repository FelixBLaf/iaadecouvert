// The host sends audio without byte ranges, so browsers cannot seek.
// On first play, download the full file and switch the player to a local copy.
function makeSeekable(a) {
  if (!a) return;
  a.addEventListener("play", async function once() {
    a.removeEventListener("play", once);
    const note = a.parentNode.querySelector(".load-note");
    if (note) note.hidden = false;
    const blob = await fetch(a.src).then(r => r.blob());
    const t = a.currentTime, playing = !a.paused;
    a.src = URL.createObjectURL(blob);
    a.addEventListener("loadedmetadata", () => { a.currentTime = t; if (playing) a.play(); }, { once: true });
    if (note) note.hidden = true;
  });
}
document.querySelectorAll("audio").forEach(makeSeekable);
 
