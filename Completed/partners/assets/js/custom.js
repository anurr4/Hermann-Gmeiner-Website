var banner = document.getElementById("banner-image");
// var banner_reset_pos = banner.style.backgroundPosition;

/*Change photo home*/
changeHomePhoto();

function changeHomePhoto()
{
    let i = 1;

    setInterval(() =>
    {
        if(i == 0)
        {
            // banner.style.backgroundPosition = banner_reset_pos;
            banner.style.backgroundImage = 'url(assets/images/index_images/banner-1.jpg)';
        }
        else if(i == 1)
        {
            banner.style.backgroundImage = 'url(assets/images/index_images/banner-2.jpg)';
            // banner.style.backgroundPosition = 'right 0rem bottom 3.5rem';
        }
        else if(i == 2)
        {
            banner.style.backgroundImage = 'url(assets/images/index_images/banner-3.jpg)';
            // banner.style.backgroundPosition = 'left 2rem bottom 9rem';
        }

        i++;

        if(i > 2)
            i = 0;
    }, 4000);
}

// Parallex effect for banner
let title = document.getElementById('banner');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    title.style.top = value * -0.5 + 'px';
})


//hover and size icons up at learn more
function sizeIconUp(nr)
{
    var nameToLookFor = "icon" + nr.toString();

    document.getElementById(nameToLookFor).classList.remove("sizeIconDown");
    document.getElementById(nameToLookFor).classList.add("sizeIconUp");
}

function sizeIconDown(nr)
{
    var nameToLookFor = "icon" + nr.toString();

    document.getElementById(nameToLookFor).classList.remove("sizeIconUp");
    document.getElementById(nameToLookFor).classList.add("sizeIconDown");
}