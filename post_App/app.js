
////______function with edit nad delet work button_____////
function post() {
  var title = document.getElementById("title").value.trim();
  var description = document.getElementById("discription").value.trim();
  var postContainer = document.getElementById("posts");

  if (title && description) {
    // Create a unique post element
    var postCard = document.createElement("div");
    postCard.classList.add("card", "m-2");

    postCard.innerHTML = `
      <div class="card-header post-header">
        <img src="Post_App_Logo_Red_and_Royal_Blue-removebg-preview.png" alt="" height="47px" width="47px">
      </div>
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
      </div>
      <div class="ms-auto m-2">
        <button class="btn btn-success edit-btn">Edit</button>
        <button class="btn btn-danger delete-btn">Delete</button>
      </div>
    `;

    // Add post to the container
    postContainer.appendChild(postCard);

    // Clear inputs
    document.getElementById("title").value = "";
    document.getElementById("discription").value = "";

    // ✅ Add delete functionality
    postCard.querySelector(".delete-btn").addEventListener("click", function () {
      Swal.fire({
        title: "Are you sure?",
        text: "You won’t be able to recover this post!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          postCard.remove();
          Swal.fire("Deleted!", "Your post has been removed.", "success");
        }
      });
    });

    // ✅ Add edit functionality
    postCard.querySelector(".edit-btn").addEventListener("click", function () {
      const currentTitle = postCard.querySelector(".card-title").textContent;
      const currentDesc = postCard.querySelector(".card-text").textContent;

      Swal.fire({
        title: "Edit your post",
        html: `
          <input id="edit-title" class="swal2-input" value="${currentTitle}">
          <textarea id="edit-desc" class="swal2-textarea">${currentDesc}</textarea>
        `,
        showCancelButton: true,
        confirmButtonText: "Save",
        background: "url(&{'backgroundImg'})",
        preConfirm: () => {
          const newTitle = document.getElementById("edit-title").value.trim();
          const newDesc = document.getElementById("edit-desc").value.trim();
          if (!newTitle || !newDesc) {
            Swal.showValidationMessage("Please enter both title and description!");
            return false;
          }
          return { newTitle, newDesc };
        }
      }).then((result) => {
        if (result.isConfirmed) {
          postCard.querySelector(".card-title").textContent = result.value.newTitle;
          postCard.querySelector(".card-text").textContent = result.value.newDesc;
          Swal.fire("✅ Updated!", "Your post has been updated successfully.", "success");
        }
      });
    });

  } else {
    Swal.fire({
      icon: "error",
      title: "😥 Empty Post...",
      text: "Enter title & description",
      background: "#ebddd2ff",
      color: "#333"
    });
  }
}

////_______image selection pr active styling
// var cardImg;
// function selectImg(src) {
// cardImg = src
//   var bgImg = document.getElementsByClassName("bgImg")
//   for (let i = 0; i < bgImg.length; i++) {
//   }

//   event.target.classList.add("selectedImg")
// }






////________login page and post page pr name and image ka option_____/////
document.addEventListener("DOMContentLoaded", () => {
  const userName = localStorage.getItem("userName");
  const userNameDisplay = document.getElementById("userNameDisplay");
  const profileImage = document.getElementById("profileImage");

  if (userName) {
    userNameDisplay.textContent = userName;
  } else {
    userNameDisplay.textContent = "Guest";
  }

  // 🖼️ Let user upload their own image
  profileImage.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          profileImage.src = e.target.result;
          localStorage.setItem("profilePic", e.target.result); // save image
        };
        reader.readAsDataURL(file);
      }
    });

    input.click();
  });

  // 🧠 Restore saved image
  const savedPic = localStorage.getItem("profilePic");
  if (savedPic) {
    profileImage.src = savedPic;
  }
});

// function selectImg(src) {
//   backgroundImg = src;
//   var bgImg = document.getElementsByClassName("bgImg");

//   for (var i = 0; i < bgImg.length; i++) {
//     bgImg[i].className = "bgImg";
//   }
//   event.target.className += " selectedImg";
// }

//______image pr active effect lagana hy jb woh select ho to border lgy us pr____
var backgroundImg;
function selectImg(src) {
  backgroundImg = src;
  const bgImgs = document.getElementsByClassName("bgImg");
  for (let i = 0; i < bgImgs.length; i++) {
    bgImgs[i].className = "bgImg"

  }
  event.target.classList.add("selectedImg");

}

