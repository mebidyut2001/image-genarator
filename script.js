const accesskey="--m63pFPwtq4uuPzlWlBWz7cdw5MndN5pviiNpoosIY";

const searchForm=document.getElementById("search-form");
const searchBox=document.getElementById("search-box");
const searchResult=document.getElementById("search-result");
const showmoreButn=document.getElementById("show-more-butn");
// --m63pFPwtq4uuPzlWlBWz7cdw5MndN5pviiNpoosIY

let keyword="";
let page = 1;
async function searchImage(){
    keyword=searchBox.value;
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

  const respons = await fetch(url);
  const data= await respons.json();
  if (page==1) {
    searchResult.innerHTML="";
  }
//   console.log(data);
const results=data.results;
results.map((results)=>{
    const image = document.createElement("img");
    image.src=results.urls.small;
    const imageLink=document.createElement("a");
    imageLink.href=results.links.html;
    imageLink.target="_blank";
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);


})

showmoreButn.style.display="block";


}
searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page=1;
    searchImage();
})
showmoreButn.addEventListener("click", ()=>{
    page++;
    searchImage();
})
