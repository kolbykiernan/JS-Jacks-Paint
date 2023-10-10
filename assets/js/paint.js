function configureListeners() {
    let images = document.getElementsByTagName('img')  


     for (var i = 0; i < images.length; i++) {
        document.querySelector(images[i].id).addEventListener('mouseover', addOpacity)
        document.querySelector(images[i].id).addEventListener('mouseout', removeOpacity)
       //the hardest part of this assignemnt and the part that was preventing me from getting this to work was the code in the Event Listener above, (imagess[i].id), specifically the .id in the element. I couldn't figure that part out after looking through multiple panopto's and I'm still not really sure why that's there. tried looking online as well, so i guess i'm misunderstanding that part of missed something in our learnings
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
