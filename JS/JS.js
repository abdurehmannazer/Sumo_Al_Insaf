// اظهار البار
let barbox = document.querySelector('.bar-box'),
    icon = document.querySelector('.icon'),
    logobox = document.querySelector('.logo-box'),
    navbar = document.querySelector('.nav-bar'),
    wellcomepage = document.querySelector('.wellcome-page');

icon.onclick = function () {
    barbox.style.height == '100vh'
        ? barbox.style.height = '0'
        : barbox.style.height = '100vh';

    this.innerHTML == '<i class="fa-solid fa-x"></i>'
        ? this.innerHTML = '<i class="fa-solid fa-bars"></i>'
        : this.innerHTML = '<i class="fa-solid fa-x"></i>';
};



// تحويل الى رابط
function redirect(url) {
    if (url !== '') {
        window.location = url
    }
}



// تغيير لون خلفية الشعار عند التحرك
window.onscroll = function () {
    if (this.scrollY >= 50) {
        logobox.style.backgroundColor = "#3d3218";
    } else {
        logobox.style.backgroundColor = ""
    }


    if (this.scrollY >= 50) {
        barbox.style.backgroundColor = "#3d3218";
        barbox.style.position = "fixed";
        barbox.style.top = "0";
    } else {
        barbox.style.backgroundColor = ""
        barbox.style.position = "absolute";
        barbox.style.top = "150px";
    }


}


// window.onscroll = function () {
//     let video = document.querySelector('video')

//     if (scrollY > 1600) {
//         video.setAttribute("autoplay" , "")
//         console.log(scrollY)

//     }
// }






var index = 0;
show_image(index)
function show_image(i) {
    index += i;

    var client = document.getElementsByClassName("client");
    var dot    = document.getElementsByClassName("dot");

    for (i = 0; i < client.length; i++)
        client[i].style.display = "none";
    
    for (i = 0; i < dot.length; i++)
        dot[i].className = dot[i].className.replace(" active", "");
    
    if (index > client.length - 1)
        index = 0;
    
    if (index < 0)
        index = client.length - 1;
    client[index].style.display = "flex";
    dot[index].classList.add("active")   
}
