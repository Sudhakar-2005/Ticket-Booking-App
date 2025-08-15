document.addEventListener('DOMContentLoaded', function() {
  // Enhanced Movie Data with placeholder images and additional details
  const movies = [
    { 
      title: "Avengers: Endgame", 
      img: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg",
      rating: "4.9",
      duration: "3h 1m",
      genre: "Action, Adventure, Sci-Fi",
      synopsis: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos' actions.",
      director: "Anthony Russo, Joe Russo",
      cast: "Robert Downey Jr., Chris Evans, Mark Ruffalo"
    },
    { 
      title: "Inception", 
      img: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
      rating: "4.8",
      duration: "2h 28m",
      genre: "Action, Adventure, Sci-Fi",
      synopsis: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      director: "Christopher Nolan",
      cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page"
    },
    { 
      title: "The Dark Knight", 
      img: "https://m.media-amazon.com/images/I/51K8ouYrHeL._AC_SY679_.jpg",
      rating: "4.9",
      duration: "2h 32m",
      genre: "Action, Crime, Drama",
      synopsis: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      director: "Christopher Nolan",
      cast: "Christian Bale, Heath Ledger, Aaron Eckhart"
    },
    { 
      title: "Interstellar", 
      img:"https://via.placeholder.com/200x300/000033/FFFFFF?text=Interstellar",
      rating: "4.7",
      duration: "2h 49m",
      genre: "Adventure, Drama, Sci-Fi",
      synopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      director: "Christopher Nolan",
      cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain"
    },
    { 
      title: "Joker", 
      img: "https://m.media-amazon.com/images/I/71K9CbNZPsL._AC_SY679_.jpg",
      rating: "4.6",
      duration: "2h 2m",
      genre: "Crime, Drama, Thriller",
      synopsis: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime.",
      director: "Todd Phillips",
      cast: "Joaquin Phoenix, Robert De Niro, Zazie Beetz"
    },
    { 
      title: "Avatar", 
      img: "https://via.placeholder.com/300x450/006600/FFFFFF?text=Avatar",
      rating: "4.5",
      duration: "2h 42m",
      genre: "Action, Adventure, Fantasy",
      synopsis: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      director: "James Cameron",
      cast: "Sam Worthington, Zoe Saldana, Sigourney Weaver"
    },
    { 
      title: "Frozen II", 
      img: "https://via.placeholder.com/300x450/0066CC/FFFFFF?text=Frozen+II",
      rating: "4.3",
      duration: "1h 43m",
      genre: "Animation, Adventure, Comedy",
      synopsis: "Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land in search of the origin of Elsa's powers.",
      director: "Chris Buck, Jennifer Lee",
      cast: "Kristen Bell, Idina Menzel, Josh Gad"
    },
    { 
      title: "Black Panther", 
      img: "https://via.placeholder.com/300x450/000000/FFFFFF?text=Black+Panther",
      rating: "4.8",
      duration: "2h 15m",
      genre: "Action, Adventure, Sci-Fi",
      synopsis: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
      director: "Ryan Coogler",
      cast: "Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o"
    },
    { 
      title: "Spider-Man: No Way Home", 
      img: "https://via.placeholder.com/300x450/CC0000/FFFFFF?text=Spider-Man",
      rating: "4.9",
      duration: "2h 28m",
      genre: "Action, Adventure, Fantasy",
      synopsis: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
      director: "Jon Watts",
      cast: "Tom Holland, Zendaya, Benedict Cumberbatch"
    },
    { 
      title: "Doctor Strange", 
      img: "https://via.placeholder.com/300x450/660066/FFFFFF?text=Dr+Strange",
      rating: "4.5",
      duration: "1h 55m",
      genre: "Action, Adventure, Fantasy",
      synopsis: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
      director: "Scott Derrickson",
      cast: "Benedict Cumberbatch, Chiwetel Ejiofor, Rachel McAdams"
    },
    { 
      title: "Guardians of the Galaxy", 
      img: "https://via.placeholder.com/300x450/FFCC00/000000?text=Guardians",
      rating: "4.7",
      duration: "2h 1m",
      genre: "Action, Adventure, Comedy",
      synopsis: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
      director: "James Gunn",
      cast: "Chris Pratt, Vin Diesel, Bradley Cooper"
    },
    { 
      title: "Thor: Ragnarok", 
      img: "https://via.placeholder.com/300x450/FF9900/000000?text=Thor",
      rating: "4.6",
      duration: "2h 10m",
      genre: "Action, Adventure, Comedy",
      synopsis: "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world.",
      director: "Taika Waititi",
      cast: "Chris Hemsworth, Tom Hiddleston, Cate Blanchett"
    }
  ];

  // DOM Elements
  const movieList = document.getElementById('movie-list');
  const bookingForm = document.getElementById('booking-form');
  const confirmationSection = document.getElementById('confirmation');
  const movieTitleElement = document.getElementById('movie-title');
  const confirmBookingBtn = document.getElementById('confirm-booking');
  const searchInput = document.querySelector('.search-input');
  const genreFilter = document.getElementById('genre-filter');
  const languageFilter = document.getElementById('language-filter');
  const comingSoonGrid = document.querySelector('.coming-soon-grid');

  // Display movies with filtering
  function displayMovies(filterText = '', genre = 'all', language = 'all') {
    movieList.innerHTML = '';
    
    const filteredMovies = movies.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(filterText.toLowerCase());
      const matchesGenre = genre === 'all' || movie.genre.toLowerCase().includes(genre);
      // Note: Language filter would require adding language property to movie objects
      return matchesSearch && matchesGenre;
    });

    if (filteredMovies.length === 0) {
      movieList.innerHTML = '<p class="no-results">No movies found matching your criteria.</p>';
      return;
    }

    filteredMovies.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.className = 'movie-card';
      movieCard.innerHTML = `
        <img src="${movie.img}" alt="${movie.title}" class="movie-poster">
        <div class="movie-info">
          <h3>${movie.title}</h3>
          <div class="movie-meta">
            <span class="rating">⭐ ${movie.rating}</span>
            <span>${movie.duration}</span>
          </div>
          <p class="genre">${movie.genre}</p>
          <button class="btn btn-book" data-movie="${movie.title}">Book Now</button>
        </div>
      `;
      movieList.appendChild(movieCard);
    });

    // Add event listeners to book buttons
    document.querySelectorAll('.btn-book').forEach(button => {
      button.addEventListener('click', function() {
        const movieTitle = this.getAttribute('data-movie');
        showBookingForm(movieTitle);
      });
    });
  }

  // Show booking form for selected movie
  function showBookingForm(title) {
    const movie = movies.find(m => m.title === title);
    if (movie) {
      // Update movie info
      movieTitleElement.textContent = movie.title;
      document.getElementById('movie-poster').src = movie.img;
      document.getElementById('movie-rating').textContent = `⭐ ${movie.rating}`;
      document.getElementById('movie-duration').textContent = movie.duration;
      document.getElementById('movie-genre').textContent = movie.genre;
      document.getElementById('movie-synopsis').textContent = movie.synopsis;
      document.getElementById('movie-director').textContent = movie.director;
      document.getElementById('movie-cast').textContent = movie.cast;
      
      // Generate showtimes
      const showtimesContainer = document.getElementById('showtimes');
      showtimesContainer.innerHTML = '';
      const showtimes = ['10:00 AM', '1:30 PM', '4:45 PM', '8:00 PM', '11:15 PM'];
      showtimes.forEach(time => {
        const button = document.createElement('button');
        button.className = 'showtime-btn';
        button.textContent = time;
        showtimesContainer.appendChild(button);
      });

      // Reset ticket counts
      document.getElementById('standard-tickets').value = 0;
      document.getElementById('premium-tickets').value = 0;
      document.getElementById('total-amount').textContent = '₹0';

      // Show booking form
      movieList.style.display = 'none';
      bookingForm.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Initialize ticket controls
  function initTicketControls() {
    document.querySelectorAll('.ticket-plus').forEach(btn => {
      btn.addEventListener('click', function() {
        const input = this.previousElementSibling;
        input.value = parseInt(input.value) + 1;
        updateTotal();
      });
    });

    document.querySelectorAll('.ticket-minus').forEach(btn => {
      btn.addEventListener('click', function() {
        const input = this.nextElementSibling;
        if (parseInt(input.value) > 0) {
          input.value = parseInt(input.value) - 1;
          updateTotal();
        }
      });
    });

    document.querySelectorAll('.ticket-count').forEach(input => {
      input.addEventListener('change', updateTotal);
    });
  }

  // Calculate total amount
  function updateTotal() {
    const standardTickets = parseInt(document.getElementById('standard-tickets').value) || 0;
    const premiumTickets = parseInt(document.getElementById('premium-tickets').value) || 0;
    const total = (standardTickets * 200) + (premiumTickets * 350);
    document.getElementById('total-amount').textContent = `₹${total}`;
  }

  // Handle booking confirmation
  confirmBookingBtn.addEventListener('click', function() {
    const standardTickets = parseInt(document.getElementById('standard-tickets').value) || 0;
    const premiumTickets = parseInt(document.getElementById('premium-tickets').value) || 0;
    
    if (standardTickets + premiumTickets === 0) {
      alert('Please select at least one ticket');
      return;
    }

    const selectedShowtime = document.querySelector('.showtime-btn.active');
    if (!selectedShowtime) {
      alert('Please select a showtime');
      return;
    }

    // Generate random booking ID
    const bookingId = 'CINE' + Math.floor(100000 + Math.random() * 900000);
    
    // Update confirmation details
    document.getElementById('booking-id').textContent = bookingId;
    document.getElementById('confirmation-movie').textContent = movieTitleElement.textContent;
    document.getElementById('confirmation-showtime').textContent = selectedShowtime.textContent;
    document.getElementById('confirmation-theater').textContent = 'PVR Cinemas: Forum Mall';
    
    // Generate random seat numbers
    const seats = [];
    const totalTickets = standardTickets + premiumTickets;
    for (let i = 0; i < totalTickets; i++) {
      const row = String.fromCharCode(65 + Math.floor(Math.random() * 5));
      const seat = row + (Math.floor(Math.random() * 15) + 1);
      seats.push(seat);
    }
    document.getElementById('confirmation-seats').textContent = seats.join(', ');
    
    // Calculate total amount
    const totalAmount = (standardTickets * 200) + (premiumTickets * 350);
    document.getElementById('confirmation-amount').textContent = `₹${totalAmount}`;

    // Show confirmation
    bookingForm.style.display = 'none';
    confirmationSection.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Showtime selection
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('showtime-btn')) {
      document.querySelectorAll('.showtime-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');
    }
  });

  // Search functionality
  searchInput.addEventListener('input', function() {
    displayMovies(this.value, genreFilter.value, languageFilter.value);
  });

  // Filter functionality
  genreFilter.addEventListener('change', function() {
    displayMovies(searchInput.value, this.value, languageFilter.value);
  });

  languageFilter.addEventListener('change', function() {
    displayMovies(searchInput.value, genreFilter.value, this.value);
  });

  // Display coming soon movies
  function displayComingSoon() {
    const comingSoonMovies = [
      { title: "The Marvels", img: "https://via.placeholder.com/300x450/CC0000/FFFFFF?text=The+Marvels" },
      { title: "Dune: Part Two", img: "https://via.placeholder.com/300x450/663300/FFFFFF?text=Dune+2" },
      { title: "Mission: Impossible 8", img: "https://via.placeholder.com/300x450/000066/FFFFFF?text=MI8" },
      { title: "Wonka", img: "https://via.placeholder.com/300x450/660066/FFFFFF?text=Wonka" }
    ];

    comingSoonMovies.forEach(movie => {
      const card = document.createElement('div');
      card.className = 'coming-soon-card';
      card.innerHTML = `
        <img src="${movie.img}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>Coming Soon</p>
      `;
      comingSoonGrid.appendChild(card);
    });
  }

  // Initialize the page
  displayMovies();
  displayComingSoon();
  initTicketControls();
});