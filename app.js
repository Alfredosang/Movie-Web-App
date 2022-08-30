const key = '17e5955c532c9dba692872d39ea34860';
// const searchInput =  document.querySelector('form.input');
// const searchBTN = document.querySelector('form.button');


// https://api.themoviedb.org/3/search/movie?api_key=17e5955c532c9dba692872d39ea34860&query=Jack+Reacher

const pageNum = Math.floor(Math.random() * 100)+ 1;


 

const randomMov = async (pageNum) =>{
    const base =`https://api.themoviedb.org/3/movie/popular?api_key=17e5955c532c9dba692872d39ea34860&page=${pageNum}`;
    const response = await  fetch(base);
    let data = await response.json();
    const boxCon = document.querySelector('.box-con');
    const info = document.querySelector('.info');
    console.log(data);

    data.results.forEach(element => {
        const title = element.original_title;
        const src = element.poster_path;
        const movieInfo = element.overview;
        boxCon.innerHTML += `
        <div class="h-80 shadow theme-grad rounded-xl">
        <img src="https://image.tmdb.org/t/p/w200/${src}" alt="movie poster" class="h-60  w-full object-cover object-top box">
        <div class="flex flex-col items-center my-2 ">
            <h3 class="font-bold text-white text-md">${title}</h3>
            <a href="info.html" class="text-amber-400">View info</a>
    
        </div>
    
    </div>`
    console.log(info);

    // info.innerHTML = `
    // <div class="movie-info flex flex-col justify-center mt-0">

    //             <img src="https://image.tmdb.org/t/p/500/${src}" alt="movie details" class="pic object-center mb-10  ">

    //             <h2 class="text-white text-5xl font-bold mb-5">${title}</h2>
    //             <p class="text-white text-3xl">${movieInfo}</p>

    //         </div>`
        
    });


}; 
// &append_to_response=videos

const updateSearch = async (searchInput) => {
    const base = `https://api.themoviedb.org/3/search/movie?api_key=17e5955c532c9dba692872d39ea34860&query=${searchInput}`;
    const response = await fetch(base);
    const data = await response.json();
    console.log(data);

    const findCon = document.querySelector('.find-con');
    findCon.innerHTML = '';

    data.results.forEach(element => {
        const title = element.original_title;
        const src = element.poster_path;
        findCon.innerHTML += `
        <div class="h-80 shadow theme-grad rounded-xl">
        <img src="https://image.tmdb.org/t/p/w200/${src}" alt="movie poster" class="h-60  w-full object-cover object-top box">
        <div class="flex flex-col items-center my-2 ">
            <h3 class="font-bold text-white text-md">${title}</h3>
            <a href="#" class="text-amber-400">View info</a>
    
        </div>
    
    </div>`
    });

}






const searchBTN = document.querySelector('button');

searchBTN.addEventListener('click',(e) => {
    e.preventDefault();
    const searchInput =  document.querySelector('input').value;
    const inputForm = document.querySelector('form');
    
    

    updateSearch(searchInput);
    inputForm.reset();
    


});


randomMov(pageNum);