//this function allows us to connect event listeners to elements in our html page
//we create a variable called images to assign to all elements with the img tag

function configureListeners() {
    let images = document.getElementsByTagName('img')  

//the for loop lets us apply this function to all images 
 //this will have an event listener that will pass the event type (mouseover) and the listner: the function of what to do when the event type happens
    
    for (var i = 0; i < images.length; i++) {
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity)
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity)
    //in my first submission, i said i did't understand the .id above and still don't fully understand it.
    //my guess is since we are collecting all images in our array, we are putting the .id to tie this to each img ID: pn1 - pn9.
    //i assumed that when we used the term 'case' in our switch statement below, it was able to connect to each id referenced. 

    } 
}

//the two functions below tell us what to do when we hover over the images
//we're using an if statement to apply the the class "dim" written in our CSS, to the function addOpacity
//we're going to do the same thing in the function removeOpacity, otherwise, we won't be remove our dim which will confuse the user wher their cursor is
//we'll also call a function in line 30 which will allow us to reveal the corresponding price and color. this is defined at line 50

function addOpacity(event) {
    if (!this.classList.contains('dim')){
        this.classList.add('dim')
    }

    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
    if (this.classList.contains('dim')){
        this.classList.remove('dim')
    }

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    

}

//this function will be plugged into our addOpacity function in the eventlistener and allow us to show the color and price of the paintColor displayed. 
// the price and colorName variables are what will 'switch' and are referenced in each 'case' to reflect the corresponding color
function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    //Switch lets us change the paintColor based on which img we hover over. We are able to do this with the ID's pn1-pn9. or maybe not still unsure about this..
    // On our html page these are displayed in divs that create the cube formation that we see.
     
    switch (paintColor) {
        case 'pn1':           
            price = '$14.99'
            colorName = 'Lime Green'  
            updatePrice(colorName,price)  
            break;           
        case 'pn2':
            price = "$11.14"
            colorName = "Medium Brown"
            updatePrice(colorName,price)            
            break;            
        case 'pn3':
            price = "$22.99"
            colorName = "Royal Blue"
            updatePrice(colorName,price)            
            break;   
        case 'pn4':
            price = "$13.42"
            colorName = "Solid Red"
            updatePrice(colorName,price)            
            break;   
        case 'pn5':
            price = "$21.98"
            colorName = "Solid White"
            updatePrice(colorName,price)           
            break;   
        case 'pn6':
            price = "$21.98"
            colorName = "Solid White"
            updatePrice(colorName,price)              
            break;
        case 'pn6':
            price = '$4.99'
            colorName = 'Solid Black'  
            updatePrice(colorName, price) 
            break;   
        case 'pn7':
            price = '$8.22'
            colorName = 'Solid Cyan'  
            updatePrice(colorName, price) 
            break;   
        case 'pn8':
            price = '$11.99'
            colorName = 'Solid Purple'  
            updatePrice(colorName, price) 
        case 'pn9':
            price = '$14.99'
            colorName = 'Solid Yellow'  
            updatePrice(colorName, price) 
            break;   
          default:              
    }

    //this function allows us to take the Id's color-price and color-name from our html page and assign them a variable so that we can change the text content.
    //We can open our dev tools and find where these ID's are on the doc. they are hidden until hovered over.
    //when this is function is passed into each case of the getProductInfo function, the switch statement is ultimately what allows us to have multiple prices and colors display, representing a dynamic page.
    function updatePrice(colorName, price,)
    {       
        let colorPrice = document.getElementById('color-price')
        colorPrice.textContent = price
        
        let color = document.getElementById('color-name')
         color.textContent = colorName
        }  
    
}
