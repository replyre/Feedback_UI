const iconbtn = document.querySelectorAll(".icon");
const btn = document.getElementById("btn");
let selectedRating = "";
iconbtn.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    // console.log(e.target);

    id = e.target.attributes.id.nodeValue;
    if (!id.split("_")[1]) id += "_icon";
    // console.log(id);
    document.getElementById(id).classList.remove(id + "_anime");
    document.getElementById(id).offsetWidth;
    document.getElementById(id).classList.add(id + "_anime");
    removeActive();
    e.target.classList.add("active");
    e.target.parentNode.classList.add("active");

    // console.log(e.target.innerText || e.target.parentNode.innerText);
    selectedRating = e.target.parentNode.innerText.split("\n")[0];
  });
});
btn.addEventListener("click", () => {
  if (selectedRating == "") {
    document.querySelector(".error").style.display = "block";

    setTimeout(() => {
      document.querySelector(".error").style.display = "none";
    }, 2000);
    return;
  }
});

function removeActive() {
  iconbtn.forEach((icon) => {
    icon.classList.remove("active");
  });
}
