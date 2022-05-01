// document.addEventListener('keydown', function (event) {
//     if (event.code == 'KeyC' && (event.ctrlKey || event.metaKey)) {
//         alert("Please don't try to copy code");
//     }
// });
var deleteBtn = document.getElementById('deleteBtn');
deleteBtn.addEventListener('click', deleteBlog);
function deleteBlog(e) {
    e.preventDefault();
    
    if (e.target.classList.contains('delete')) {
        if (confirm("Are you sure that you want to delete the blog?")) {
            document.getElementById('container').outerHTML = "";
        }
    }
}
var likeBtn = document.getElementById('likeBtn');
likeBtn.addEventListener('click',likePink);
function likePink(e) {
    e.preventDefault();
    var newVar = document.getElementById("likeBtn");
    if (newVar.src = 'heart.png') {
        newVar.src = 'heart (1).png';
        console.log(newVar.src);
    }
    else {
        newVar.src = 'heart.png';
    }
}
var upload = document.getElementById('blog-submit');
upload.addEventListener('click',uploadBlog);
function uploadBlog(e){
    e.preventDefault();
    var imageUrl = document.getElementById('image-url').value;
    var blogTitle = document.getElementById('blog-title').value;
    var blogDescription = document.getElementById('blog-description').value;
    var oldBlog = document.getElementById('intro');
    var newBlog = document.createElement('div');
    newBlog.className='container';
    var deleteBtn1 = document.createElement('button');
    deleteBtn1.className='delete';
    deleteBtn1.id='deleteBtn';
    deleteBtn1.appendChild(document.createTextNode('X'));
    newBlog.appendChild(deleteBtn1);
    var newMainBlog = document.createElement('div');
    newMainBlog.className='main-blog';
    newBlog.appendChild(newMainBlog);
    var newImg = document.createElement('img');
    newImg.className='logo';
    newImg.src=imageUrl;
    newImg.alt='image';
    newMainBlog.appendChild(newImg);
    var mainBlog = document.createElement('div');
    mainBlog.className='blog';
    newMainBlog.appendChild(mainBlog);
    var newHeading = document.createElement('h2');
    newHeading.appendChild(document.createTextNode(blogTitle));
    mainBlog.appendChild(newHeading);
    var newDesc = document.createElement('p');
    newDesc.appendChild(document.createTextNode(blogDescription));
    mainBlog.appendChild(newDesc);
    var likebtn = document.createElement('button');
    likebtn.className='likeBtn';
    var likeimg =document.createElement('img');
    likeimg.src='heart.png';
    likeimg.id='likeBtn';
    likeimg.className='icons';
    likebtn.appendChild(likeimg);

    var cmntbtn = document.createElement('button');
    cmntbtn.className='cmntBtn';
    var cmntimg =document.createElement('img');
    cmntimg.src='bubble-chat.png';
    cmntimg.className='icons';
    cmntbtn.appendChild(cmntimg);

    var sharebtn = document.createElement('button');
    sharebtn.className='shareBtn';
    var shareimg =document.createElement('img');
    shareimg.src='share.png';
    shareimg.className='icons';
    sharebtn.appendChild(shareimg);
    newBlog.appendChild(likebtn);
    newBlog.appendChild(cmntbtn);
    newBlog.appendChild(sharebtn);
    
    oldBlog.appendChild(newBlog);
    document.getElementById('blog-form').style.display = "none";
}
function div_show(e) {
    e.preventDefault();
    document.getElementById('blog-form').style.display = "block";
}
function div_hide(e) {
    e.preventDefault();
    document.getElementById('blog-form').style.display = "none";
}