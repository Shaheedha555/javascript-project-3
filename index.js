const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "WEB DEVELOPER",
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
    {
        id: 2,
        name: "Anna Johnson",
        job: "WEB DESIGNER",
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.Photo booth jean shorts artisan narwhal."
    },
    {
        id: 3,
        name: "Peter Jones",
        job: "INTERN",
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
        id: 4,
        name: "Bill Anderson",
        job: "THE BOSS",
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    }
];

const image = document.getElementById("prfl-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("description");

const prvBtn = document.querySelector(".prvs-btn");
const nexBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");


let startingItem = 0;

prvBtn.addEventListener("click", function(){
    startingItem--;
    if (startingItem<0){
        startingItem= reviews.length-1;
    }
    showPerson(startingItem);
})
nexBtn.addEventListener("click", function(){
    startingItem++;
    if ( startingItem>reviews.length-1){
        startingItem=0;
    }
    showPerson(startingItem);
})
 randomBtn.addEventListener("click", function(){
     let randomNumber = Math.floor(Math.random()*reviews.length);
     showPerson(randomNumber);
     console.log(randomNumber);
 })


function showPerson(person){
    let item = reviews[person];
    image.src = item.image;
    author.innerHTML = item.name;
    job.innerHTML = item.job;
    text.innerHTML = item.text;
}