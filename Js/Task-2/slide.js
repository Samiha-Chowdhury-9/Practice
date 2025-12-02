const imageArray = ["https://www.obokash.com/admin/public/images/blogs/Popular-travel-destinations-8.jpeg", "https://image.cnbcfm.com/api/v1/image/107108131-1661279269174-gettyimages-831412090-20170731-tana9023.jpeg?v=1661279373", "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://cdn.shopify.com/s/files/1/0735/4204/1817/files/1732241829-thailand_destination_of_the_year.jpg?v=1745831072", "https://media.cnn.com/api/v1/images/stellar/prod/201230100522-11-2021-travel-destinations-italy.jpg?q=x_0,y_0,h_2303,w_4092,c_fill/w_1280", "https://blog.dookinternational.com/images/post-media/y00Gt1721810183.jpg", "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900", "https://www.travelinglifestyle.net/wp-content/uploads/2025/11/10-Off-Season-Travel-Destination-Ideas-To-Explore-in-Early-2026.jpg", "https://th-thumbnailer.cdn-si-edu.com/1f7LatxmeBgF3Mpa0mnwHp2FKdA=/1000x750/filters:no_upscale():focal(1061x707:1062x708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/af/f5/aff5bf0f-f8e9-4def-82a1-0db1d862410a/gettyimages-1170750411.jpg"];
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

prevBtn.addEventListener("click", goToPrev);
nextBtn.addEventListener("click", goToNext);
const img = document.querySelector("img");

let index = 0;

function goToPrev(){
    index--;
    if(index < 0){
        index = imageArray.length - 1;
    }
    img.src = imageArray[index];

}

function goToNext(){
    index++;
     if (index >= imageArray.length) {
        index = 0; }
    img.src = imageArray[index];

}

const intervalTime = 3000;
setInterval(goToNext, intervalTime);