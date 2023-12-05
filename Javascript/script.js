// Ông già noel
var leftToRight = true;
var endPos = 0;
var size = 0;
function showSantaClaus()
{
    if (leftToRight == true)
    {
        leftToRight = false;
        endPos = $(window).width();
        $("img").attr("src", "santaclaus.gif");
        $("img").css("left", "-390px");
    }
    else
    {
        leftToRight = true;
        endPos = -390;
        $("img").attr("src", "santaclausreverse.gif");
        $("img").css("left", $(window).width() + "px");
    }

    size = Math.floor(Math.random() * 5 + 1) + 15;
    $("img").css("height", size + "%");
    $("img").css("width", size + "%");
    $("img").css("top", Math.floor(Math.random() * 10 + 1) + 5 + "%");

    $("img").animate({
        "left": endPos
    }, 15000, "linear", showSantaClaus);
}

// Function to open the modal
// Function to open the modal


function openModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "block";
}


function closeModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}


// Nhạc 
    function startBackgroundMusic() {
        // Bắt đầu phát nhạc nền khi nhấn nút
        document.getElementById("background-music").play();
    }
    
    function stopVideo() {
        // Lấy thẻ video
        var video = document.getElementById("myVideo");

        // Dừng video
        video.pause();
    }
