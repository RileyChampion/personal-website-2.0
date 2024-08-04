export function jumpToReleventDiv(id) {
    const releventDiv = document.getElementById(id);
    if (releventDiv) {
        releventDiv.scrollIntoView({behavior: "smooth"});
    }
}