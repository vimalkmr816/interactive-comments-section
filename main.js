// console.log("vimal");
const scoreEl = document.getElementById("score");
const imgIcon = document.getElementById("img_icon");
const userName = document.getElementById("username");
const dateCreated = document.getElementById("date_created");
const commentContent = document.getElementById("comment_content");
const mainContainer = document.querySelector(".main_container");
const scoreNumber = document.querySelector(".score_number");

//fetching data from json file
fetch("data.json")
	.then((response) => response.json())
	.then((data) => {
		let index = data.comments.length;
		// console.log(index, "index");
		for (let i = 0; i < index; i++) {
			newComments(data.comments[i]);
		}
	})
	.catch((error) => console.log(error));
// .then((data) => {
// 	console.log(data.currentUser.username, "content added");
// });

function newComments(commentsData) {
	let repliesLength = commentsData.replies.length;

	//creaating new div for rendering comments
	const newCommentDiv = document.createElement("div");
	newCommentDiv.classList.add("comment_inner_container");
	mainContainer.appendChild(newCommentDiv);
	newCommentDiv.innerHTML = `<div class="container  d-flex align-items-center justify-content-center bg-light rounded-3 p-3 my-3">
	    <div
	      class="score_container bg-primary bg-opacity-10 px-3 d-flex justify-content-around align-items-center flex-column rounded-3 me-4 ">
	      <div class="score_plus py-2">+</div>
	      <div class="score_number py-2" id="score">${commentsData.score}</div>
	      <div class="score_minus py-2">-</div>
	    </div>
	    <div class="comment_container">
	      <div class="comment_topbar d-flex align-items-center justify-content-between">
	        <div class="comment_details d-flex align-items-center gap-2">
	          <div class="comment_img">
	            <img src="${commentsData.user.image.png}" width="30px" alt="img_icon" id="img_icon">
	          </div>
	          <div class="comment_name fw-bold" id="username">${commentsData.user.username}</div>
	          <div class="comment_date" id="date_created">${commentsData.createdAt}</div>
	        </div>
	        <div class="comment_reply fw-bold"><img class="me-2" src="./images/icon-reply.svg" alt="icon-reply">Reply</div>
	      </div>
	      <div class="comment_content my-3" id="comment_content">${commentsData.content}
	      </div>
	    </div>
	  </div>`;

	//creating a div to render replies dynamically
	if (repliesLength) {
		for (let i = 0; i < repliesLength; i++) {
			const newReplyDiv = document.createElement("div");
			newReplyDiv.classList.add("reply_container");
			mainContainer.appendChild(newReplyDiv);
			newReplyDiv.innerHTML = `<div class="container  d-flex align-items-center justify-content-center bg-light rounded-3 p-3  my-3
			">
		  <div
		    class="score_container bg-primary bg-opacity-10 px-3 d-flex justify-content-around align-items-center flex-column rounded-3 me-4 ">
		    <div class="score_plus py-2">+</div>
		    <div class="score_number py-2" id="score">${commentsData.replies[i].score}</div>
		    <div class="score_minus py-2">-</div>
		  </div>
		  <div class="comment_container">
		    <div class="comment_topbar d-flex align-items-center justify-content-between">
		      <div class="comment_details d-flex align-items-center gap-2">
		        <div class="comment_img">
		          <img src="${commentsData.replies[i].user.image.png}" width="30px" alt="img_icon" id="img_icon">
		        </div>
		        <div class="comment_name fw-bold" id="username">${commentsData.replies[i].user.username}</div>
		        <div class="comment_date" id="date_created">${commentsData.replies[i].createdAt}</div>
		      </div>
  				<div class="comment_reply fw-bold"><img class="me-2" src="./images/icon-reply.svg" alt="icon-reply"> Reply</div>
		    </div>
		    <div class="comment_content my-3" id="comment_content"><span class="replying_to" >@${commentsData.replies[i].replyingTo}</span> ${commentsData.replies[i].content}
		    </div>
		  </div>
		</div>`;
		}
	}
}
