// create user informstion 
const userInformation = [
    {
        id: 1,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSdQAnnNLTvLC0Wv_y3XYNjjQwtsyARxsbTA&s',
        name: 'Jimmy Anderson',
        description: 'An avid photographer who loves capturing nature.'
    },
    {
        id: 2,
        img: 'https://i.pinimg.com/236x/c7/58/7e/c7587eec8e58a3eb06f5931d51f6e436.jpg',
        name: 'Mary Jane Watson',
        description: 'A botanist with a passion for flowers.'
    },
    {
        id: 3,
        img: 'https://img.freepik.com/premium-photo/anime-girl-watching-sunset-3d-illustration_717906-1415.jpg',
        name: 'Tony Stark',
        description: 'An inventor who finds inspiration in nature.'
    },
    {
        id: 4,
        img: 'https://static.vecteezy.com/system/resources/thumbnails/033/662/051/small/cartoon-lofi-young-manga-style-girl-while-listening-to-music-in-the-rain-ai-generative-photo.jpg',
        name: 'Natasha Romanoff',
        description: 'A florist who creates stunning arrangements.'
    },
    {
        id: 5,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiqRj1HFlXqWojbz41qfmR9B-fhdBVDbizpA&s',
        name: 'Bruce Banner',
        description: 'A scientist who enjoys nature walks.'
    }
];


let cardIndex = -1;

document.querySelector('.next__btn').addEventListener('click' , () => {
    cardIndex += 1; // 0 , 1 , 2 , 3 , 4
    console.log(cardIndex);
    if(cardIndex == userInformation.length - 1) {
        document.querySelector('.next__btn').disabled = true
    }
    // updating the image 
    document.querySelector('.img').src = userInformation[cardIndex].img
    // updating the name.
    document.querySelector('.firstName').textContent = userInformation[cardIndex].name;
    // uodating the description 
    document.querySelector('.designation').textContent = userInformation[cardIndex].description
})

document.querySelector('.pre__btn').addEventListener('click' , () => {
    cardIndex -= 1; // 0 , 1 , 2 , 3 , 4
    console.log(cardIndex);
    if(cardIndex == -1) {
        document.querySelector('.pre__btn').disabled = true
    }
    // updating the image 
    document.querySelector('.img').src = userInformation[cardIndex].img
    // updating the name.
    document.querySelector('.firstName').textContent = userInformation[cardIndex].name;
    // uodating the description 
    document.querySelector('.designation').textContent = userInformation[cardIndex].description
})
