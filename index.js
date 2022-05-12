const menu = [{
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "https://media.istockphoto.com/photos/food-for-healthy-brain-picture-id1299079243?b=1&k=20&m=1299079243&s=170667a&w=0&h=vav4VYNuuV0Qc4fl2JhROewXaKGEYnhlXddiB4PCKm8=",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Burger Italy",
        category: "dinner",
        price: 16.99,
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 11,
        title: "French Fry Mongolia",
        category: "dinner",
        price: 16.99,
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    }
];

const menuItems = document.querySelector(".menu-items");
const buttonGroup = document.querySelector('.button-group');

const all = document.querySelector(".all");
const breakfast = document.querySelector(".breakfast");
const lunch = document.querySelector(".lunch");
const dinner = document.querySelector(".dinner");
const shakes = document.querySelector(".shakes");

//On window opnes
window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu);
    displayButtons(menu);
});

//FIltering mennu items


//displaing all the button based on catagory
const displayButtons = (buttons) => {
    let catagory = buttons.reduce((values, item) => {
        if (!values.includes(item.category)) {
            values.push(item.category)
        }
        return values;
    }, ['all']);
    let buttonHtml = catagory.map((but) => {
        return `<button class=" food" data-title="${but}">${but}</button>`
    })
    buttonHtml = buttonHtml.join('');
    buttonGroup.innerHTML = buttonHtml;
    const food = document.querySelectorAll(".food");
    food.forEach((items) => {
        items.addEventListener('click', (e) => {
            const catagory = e.currentTarget.dataset.title;
            const filteredItem = menu.filter((menuItem) => {
                if (menuItem.category == catagory) {
                    return menuItem;
                }

            })
            if (catagory === 'all') {
                displayMenuItems(menu);
            } else {
                displayMenuItems(filteredItem);
            }

        })

    })

}

//Displaying all the food items
const displayMenuItems = (menuItem) => {
    let displayMenu = menuItem.map((item) => {

        return `<article class="menu-item">
            <figure class="menu-image">
                <img src="${item.img}" alt="${item.title}" height="100px" width="100px">
            </figure>
            <div class="menu-info">
                <h3 class="menu-title">${item.title}</h3>
                <h4 class="menu-price">$ ${item.price}</h4>
                <p class="menu-text">${item.desc}</p>
            </div>
        </article>`;
    });
    displayMenu = displayMenu.join("");
    menuItems.innerHTML = displayMenu;
}