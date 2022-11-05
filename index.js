$('.add-gif').on('click', function() {
   
     let gif = $('.gif-link').val();
     $.ajax({
      url: 'http://localhost:5000/add?gif=' + gif,
      type: 'GET',
      success: function(data) {
        window.location.href = 'http://localhost:5500';
      }
  });
});


$(document).on('click', '.count', function() {
  let count = $(this).text();
    count++;
    $(this).text(count);
});

// create an ajax request to localhost:5000
$.ajax({
    url: 'http://localhost:5000',
    type: 'GET',
    success: function(data) {
      data.forEach(element => {
        let str = `<div class="card1 border m-2">
        <img class="card-img-top" src="${element.link}" alt="Card image" style="width:100%">
        <div class="card-body">
          <h4 class="card-title name">Gif By BB17G</h4>
          <span><span class="count">0</span> Likes ❤️</span>
        </div>
      </div>`
       $('.gifs').append(str);
        });
    }
});


