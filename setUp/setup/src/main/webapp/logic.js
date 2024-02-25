

//--------- All Movies Function------------
function allMovies(){
	fetch("http://localhost:8080/postbook/webapi/project/movies/allmovies", {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then(resp => resp.json())
		.then(data => {
			mapMovies(data)
			console.log(data);
		  })

}

function mapMovies(movies){
	let listString = '<div class="container"><div class="row">';
for (let i = 0; i < movies.length; i++) {
    listString += `
        <div class="col-md-4">
            <div class="card h-100" style="width: 18rem;">
                <img src="${movies[i].imageUrl}" class="card-img-top" style="height: 300px; object-fit: cover;" alt="Movie Poster">
                <div class="card-body">
                    <h5 class="card-title">${movies[i].movieTitle}</h5>
                    <p class="card-text" style="font-size: 14px;">${movies[i].movieDescription}</p>
                    <p class="card-text" style="font-size: 14px;"><strong>Director:</strong> ${movies[i].movieDirector}</p>
                    <p class="card-text" style="font-size: 14px;"><strong>Genre:</strong> ${movies[i].movieGenere}</p>
                    <button onClick="allMovies()" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#addReviewModal"  data-movie-id="1" style="font-size: 14px;">Add Review</button>
                </div>
            </div>
        </div>`;
}
listString += '</div></div>';



	document.getElementById('movieList').innerHTML = listString;
}