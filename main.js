// console.log("vimal");
const scoreEl = document.getElementById("score");
const imgIcon = document.getElementById("img_icon");
const userName = document.getElementById("username");
const dateCreated = document.getElementById("date_created");
const commentContent = document.getElementById("comment_content");
const mainContainer = document.querySelector(".main_container");
fetch("data.json")
	.then((response) => response.json())
	.then((data) => {
		let index = Object.keys(data.comments).length;
		console.log(index);
		for (let i = 0; i <= index; i++) {
			newComments(i, data);
		}
	});
function newComments(index, data) {
	const newDiv = document.createElement("div");
	newDiv.classList.add("comment_vimal");
	mainContainer.appendChild(newDiv);
	newDiv.innerHTML = `<div class="container  d-flex align-items-center justify-content-center bg-light rounded-3 p-3 my-3">
    <div
      class="score_container bg-primary bg-opacity-10 px-3 d-flex justify-content-around align-items-center flex-column rounded-3 me-4 ">
      <div class="score_plus py-2">+</div>
      <div class="score_number py-2" id="score">${data.comments[index].score}</div>
      <div class="score_minus py-2">-</div>
    </div>
    <div class="comment_container">
      <div class="comment_topbar d-flex align-items-center justify-content-between">
        <div class="comment_details d-flex align-items-center gap-2">
          <div class="comment_img">
            <img src="${data.comments[index].user.image.png}" width="30px" alt="img_icon" id="img_icon">
          </div>
          <div class="comment_name fw-bold" id="username">${data.comments[index].user.username}</div>
          <div class="comment_date" id="date_created">${data.comments[index].createdAt}</div>
        </div>
        <div class="comment_reply fw-bold">Reply</div>
      </div>
      <div class="comment_content my-3" id="comment_content">${data.comments[index].content}
      </div>
    </div>
  </div>`;
	// console.log(data.comments[index].content);
	// scoreEl.innerText = data.comments[index].score;
	// imgIcon.innerText = data.comments[index].user.image.png;
	// userName.innerText = data.comments[index].user.username;
	// dateCreated.innerText = data.comments[index].createdAt;
	// commentContent.innerText = data.comments[index].content;
}
