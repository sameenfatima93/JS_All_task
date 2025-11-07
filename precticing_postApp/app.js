/////______select image kr ky us pr border l;agana hy______//

var cardImg;
function selectImg(src) {
    cardImg = src
    var bgImg = document.getElementsByClassName("bgImg")
    // console.log(bgImg);
    for (let i = 0; i < bgImg.length; i++) {
        bgImg[i].className = "bgImg"
    }
    // console.log(bgImg);

    event.target.classList.add("selectedImg")
}

function post() {
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var posts = document.getElementById("posts");
    console.log(title, description);
    if (title.trim() && description.trim()) {
        posts.innerHTML += `<div class="card m-2">
              <div class="card-header">@Post</div>
              <div style="background-image: url(${cardImg});" class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">
                 ${description}
                </p>
                </div>
                <div class="ms-auto m-2">
                  <button onclick="editpost()" class="btn btn-success">Edit</button>
                  <button onclick="deletepost()" class="btn btn-danger">Delete</button>
                </div>
            </div>`;
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
    } else {
        Swal.fire({
            icon: "error",
            title: "Empty Post...",
            text: "Enter title & description",

        });
    }
}
//____delete button ka function_______/////

//  var title = 
function deletepost() {
    var deletepost = event.target.parentNode.parentNode
    console.log(deletepost);

    deletepost.remove()

    // event.target.arentNode=deletepost

    // console.log("delet");

}

//____edit button ka function_____

function editpost() {
    var card = event.target.parentNode.parentNode;
    //  var title = card.childNodes;
    var title = card.childNodes[3].childNodes[1].innerHTML;
    var description = card.childNodes[3].childNodes[3].innerHTML;
    document.getElementById("title").value = title;
    document.getElementById("description").value = description; 
    card.remove()


    //  console.log();



}