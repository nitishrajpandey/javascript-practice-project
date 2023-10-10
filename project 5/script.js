
// unsplash api key 

const accessKeys = "6DXCWs-K_gecuDLGDtyUGlKHRtzu5cGRGUrvKaUS4gk";



const searchArea = document.querySelector('[data-searchArea]')
console.log(searchArea);

const formArea = document.querySelector('[data-formArea]');

const searchButton = document.querySelector('[data-searchButton]')

const imageContainer = document.querySelector('[data-imageContainer]')

const showMore = document.querySelector('[data-showMore]')

// user input through searchbox

let userInputData = ""

let views

// bydefult page number is one
let page = 1

// create function of searchimage


async function searchImage() {

    userInputData = searchArea.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&views=${views}&query=${userInputData}&client_id=${accessKeys}`

    const response = await fetch(url)
    const data = await response.json()
    // console.log("this is data", data);
    const results=data.results;
    console.log(results);
    if (page== 1) {
        imageContainer.innerHTML=""
    }

    results.map((result)=>{
        const boxWrapper=document.createElement('div')
        // console.log("this is before",boxWrapper.classList);
        boxWrapper.classList.add('h-fit', 'flex', 'flex-col', 'w-[30%]' ,'pb-5', 'bg-[#f0efef]', 'rounded-2xl', 'shadow-xl')
        // console.log("this is after",boxWrapper.classList);


        
        const imageWrapper=document.createElement('div')
        imageWrapper.classList.add('rounded-xl')
        const image =document.createElement('img')
        image.classList.add('bg-cover', 'rounded-t-xl', 
        'h-fit', 'w-full', 'bg-center', 'bg-no-repeat')
        image.src=result.urls.small
        image.alt=result.alt_description


        const linkWrapper=document.createElement('div')
        linkWrapper.classList.add('px-6', 'py-1')
        const imageLink=document.createElement('a')
        imageLink.classList.add('font-semibold',  'text-xl', 'text-blue-400')
        imageLink.href=result.links.html
        imageLink.target="_blank"
        imageLink.textContent=result.alt_description


        const details =document.createElement('div')
        details.classList.add('px-6')
        const views=document.createElement('h3')
        views.classList.add('font-bold')
        views.textContent="Views"
        const viewsNumber=document.createElement('span')
        views.textContent = `Likes: ${result.likes}`;

        const download=document.createElement('h3')
        download.classList.add('font-bold')
        download.textContent=`ClickBy : ${result.user.name}`


        imageWrapper.appendChild(image)
        boxWrapper.appendChild(imageWrapper)
        boxWrapper.appendChild(linkWrapper)
        boxWrapper.appendChild(details)
        details.appendChild(views)
        views.appendChild(viewsNumber)
        details.appendChild(download)


        linkWrapper.appendChild(imageLink)
        imageContainer.appendChild(boxWrapper);


    })

    page++

    if (page>1) {
        showMore.style.display="block"
    }
}


formArea.addEventListener("submit", function (event) {
    event.preventDefault()
    searchImage()
    page=1

})

showMore.addEventListener("click",function(){
    searchImage()
})



// ***************************************************************************



// // Unsplash API key
// const accessKey = "6DXCWs-K_gecuDLGDtyUGlKHRtzu5cGRGUrvKaUS4gk";

// // DOM element references
// const searchArea = document.querySelector('[data-searchArea]');
// const formArea = document.querySelector('[data-formArea]');
// const searchButton = document.querySelector('[data-searchButton]');
// const imageContainer = document.querySelector('[data-imageContainer]');
// const showMore = document.querySelector('[data-showMore]');

// // User input through search box
// let userInputData = "";

// // By default, page number is 1
// let page = 1;

// // Create a function to search for images
// async function searchImage() {
//     userInputData = searchArea.value;
//     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${userInputData}&client_id=${accessKey}`;

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         const results = data.results;

//         if (page === 1) {
//             imageContainer.innerHTML = "";
//         }

//         results.forEach((result) => {
//             const boxWrapper = document.createElement('div');
//             boxWrapper.classList.add('image-box');

//             const imageWrapper = document.createElement('div');
//             imageWrapper.classList.add('image-box__image');
//             const image = document.createElement('img');
//             image.src = result.urls.small;
//             image.alt = result.alt_description;

//             const linkWrapper = document.createElement('div');
//             linkWrapper.classList.add('image-box__link');
//             const imageLink = document.createElement('a');
//             imageLink.href = result.links.html;
//             imageLink.target = "_blank";
//             imageLink.textContent = result.alt_description;

//             imageWrapper.appendChild(image);
//             boxWrapper.appendChild(imageWrapper);
//             boxWrapper.appendChild(linkWrapper);
//             linkWrapper.appendChild(imageLink);
//             imageContainer.appendChild(boxWrapper);

//         });

//         page++;

//         if (page > 1) {
//             showMore.style.display = "block";
//         }
//     } catch (error) {
//         console.error("Error fetching and displaying images:", error);
//     }
// }

// formArea.addEventListener("submit", function (event) {
//     event.preventDefault();
//     searchImage();
//     page = 1;
// });

// showMore.addEventListener("click", function () {
//     searchImage();
// });
