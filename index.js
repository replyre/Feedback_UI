const iconbtn = document.querySelectorAll(".icon");
const btn = document.getElementById("btn");
const container = document.getElementById("container");
document.getElementById("btn").disabled = true;
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
    document.getElementById("btn_back").style.display = "block";
    document.getElementById("btn").disabled = false;
  });
});

function feedback() {
  if (selectedRating == "") {
    document.querySelector(".error").style.display = "block";

    setTimeout(() => {
      document.querySelector(".error").style.display = "none";
    }, 2000);
    return;
  }
  var flag = true;
  document.querySelectorAll(".text").forEach((field) => {
    if (field.value.length === 0) flag = false;
  });

  console.log(flag);
  if (flag == false) return;

  setTimeout(() => {
    container.innerHTML = `<strong>Thank You !</strong>
   <strong>Feedback: ${selectedRating}</strong>
   <p>We'll use your feedback to improve our customer support.</p>.
   <div class="button" onclick="location.reload()"><p>Home</p></div>
   `;
    container.style.cssText =
      " border :2px solid rgb(44, 143, 236);  box-shadow: 0px 0px 12px 2px  rgba(44, 143, 236,0.5);";
  }, 1000);
}

function removeActive() {
  iconbtn.forEach((icon) => {
    icon.classList.remove("active");
  });
}
