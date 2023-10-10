function configureListeners() {
    let images = document.getElementsByTagName('img')  


     for (var i = 0; i < images.length; i++) {
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity)
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity)
       //the hardest part of this assignemnt and the part that was preventing me from getting this to work was the code in the Event Listener above, (images[i].id), specifically the .id in the element. I know we're using the Dom selector for an ID and the images[i] is collecting all of the images in that For loop, but I was confused on the .id. I didn't understand what that was for and couldn't figure that out. In our panopto or in classes, i didn't see us put .id when selecting an ID, so just not sure about that.
    } 
}

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

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
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

    
    function updatePrice(colorName, price,)
    {       
        let colorPrice = document.getElementById('color-price')
        colorPrice.textContent = price
        
        let color = document.getElementById('color-name')
         color.textContent = colorName
        }  
    
}
