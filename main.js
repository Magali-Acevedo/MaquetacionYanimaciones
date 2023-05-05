const imgOne = document.querySelector(".imgOne");
const imgTwo = document.querySelector(".imgTwo");
const imgThree = document.querySelector(".imgThree");
const modal = document.querySelector(".modal");
const closeIcon = document.querySelector(".close");


const modalGaleria = document.querySelector(".modal__galeria");
const btn = document.querySelector(".btn");
const backGaleria = document.querySelector(".galeria__back");

const slideImg1 = document.querySelector(".slider-1-img");
const slideImg2 = document.querySelector(".slider-2-img");
const slideImg3 = document.querySelector(".slider-3-img");

const imgGalerias =[
    {
    nombre:"Artista1",
    url:[
        "https://th.bing.com/th/id/OIP.b8aC8UMUTbt7CJXY3ofjqwHaHa?pid=ImgDet&w=171&h=171&c=7&dpr=2,3",
        "https://th.bing.com/th/id/OIP.drIhsbB03X5buhtLwtAMbgHaHa?pid=ImgDet&w=187&h=187&c=7&dpr=2,3",
        "https://th.bing.com/th/id/OIP.v_2qHDfUbSoxibSDVuNqVQAAAA?pid=ImgDet&w=187&h=187&c=7&dpr=2,3"
    ],
    galeriaUrl:[
        "https://i.pinimg.com/originals/83/e5/d5/83e5d5db67de85afc12b8ecb5805ae90.jpg",
        "https://i.pinimg.com/originals/0f/d5/d4/0fd5d40c013a6a731c43d723f400cafa.jpg",
        "https://i.pinimg.com/originals/0f/5b/fb/0f5bfbfb7a15b52469862e8b007666b6.jpg",
        "https://i.pinimg.com/originals/d1/8f/e7/d18fe79be0e4b521ddd32e074724f651.jpg",
        "https://i.pinimg.com/originals/84/ca/bb/84cabb8e5a7cbac008c45b1122c4067c.jpg",
        "https://i.pinimg.com/736x/f6/dd/d7/f6ddd73528a97ef5b5becb8a775311c5.jpg",

    ]
    
    },
    {
        nombre:"Artista2",
        url:[
            "https://i.pinimg.com/originals/25/de/46/25de4638966059b4070de075b81ad374.jpg",
            "https://i.pinimg.com/474x/e3/55/f0/e355f07ed0c9800b0c537e6058498e83.jpg",
            "https://i.pinimg.com/originals/0f/5b/fb/0f5bfbfb7a15b52469862e8b007666b6.jpg"
        ],
        galeriaUrl:[
            "https://i.pinimg.com/736x/73/d2/fd/73d2fd5b22dede34d854d4ce55233719.jpg",
            "https://i.pinimg.com/474x/e3/55/f0/e355f07ed0c9800b0c537e6058498e83.jpg",
            "https://i.pinimg.com/originals/77/e8/73/77e873635611c4b9da9c5f938c25bfb8.png",
            "https://i.pinimg.com/736x/57/61/f4/5761f4f17ad6a77abd944ebbc6f15a48.jpg",
            "https://i.pinimg.com/736x/46/9d/e1/469de11eabc2f1dae6c86b119e1b1aeb.jpg",
            "https://i.pinimg.com/originals/21/41/95/21419518e1a46bfcaebb3016f2c7b6be.jpg",
        ]
        
        },
        {
            nombre:"Artista3",
            url:[
                "https://th.bing.com/th/id/OIP.yhF9ucHV48tC08S54lM8pQHaKe?pid=ImgDet&w=187&h=264&c=7&dpr=2,3",
                "https://th.bing.com/th/id/OIP.TW0LzOFi6T_Q9CYa5uxhGAHaJI?pid=ImgDet&w=187&h=231&c=7&dpr=2,3",
                "https://i.pinimg.com/originals/79/c6/d4/79c6d4d4617f721b6bb233cc6f56de7b.png"
            ],
            galeriaUrl:[
                "https://cdna.artstation.com/p/assets/images/images/029/282/432/smaller_square/c-home-lisa5l.jpg?1597055757",
                "https://i.pinimg.com/474x/d4/fc/bc/d4fcbcda37fa24194fc5503f2c1bc317.jpg",
                "https://th.bing.com/th/id/OIP.yhF9ucHV48tC08S54lM8pQHaKe?pid=ImgDet&w=187&h=264&c=7&dpr=2,3",
                "https://th.bing.com/th/id/OIP.TW0LzOFi6T_Q9CYa5uxhGAHaJI?pid=ImgDet&w=187&h=231&c=7&dpr=2,3",
                "https://i.pinimg.com/originals/79/c6/d4/79c6d4d4617f721b6bb233cc6f56de7b.png"
         
            ]
            
            }

]


//Abrir modal 
imgOne.addEventListener("click",()=>{
    modal.classList.add("active");
    slideImg1.src=imgGalerias[0].url[0];
    slideImg2.src=imgGalerias[0].url[1];
    slideImg3.src=imgGalerias[0].url[2];
    btn.id = "1"
    console.log(btn)
})
imgTwo.addEventListener("click",()=>{
    modal.classList.add("active");
    slideImg1.src=imgGalerias[1].url[0];
    slideImg2.src=imgGalerias[1].url[1];
    slideImg3.src=imgGalerias[1].url[2];
})

imgThree.addEventListener("click",()=>{
    modal.classList.add("active");
    slideImg1.src=imgGalerias[2].url[0];
    slideImg2.src=imgGalerias[2].url[1];
    slideImg3.src=imgGalerias[2].url[2];
})

closeIcon.addEventListener("click",()=>{
    modal.classList.remove("active")
})

//ir a galeria

