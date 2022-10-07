var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
      1,
      1,
      0,
      1,
      0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
  }

  var mainDiv=document.getElementById('product');

  
  
    var leftDiv=document.createElement('div')
  leftDiv.className='left-column';

  var img = document.createElement('img')
  img.src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg";
  img.className='product-img';

 
  

  var rightDiv=document.createElement('div');
  rightDiv.className='right-column';

  var productDes=document.createElement('div')
  productDes.className='product-description';

  var title=document.createElement('h1')
  title.className='name';
  title.innerHTML="Men Navy Blue Solid Sweatshirt";

  var brand= document.createElement('h4');
  brand.className='brand';
  brand.innerHTML='United Colors of Benetton'

  var price=document.createElement('h3')
  price.innerHTML='Price: Rs 2599'
  price.className='price';
  price.style.color='blue';

  var descriptionItem=document.createElement('div')
  descriptionItem.className='description';

  var aboutDes=document.createElement('h3');
  aboutDes.innerHTML='Description';

  var pDes=document.createElement('p');
  pDes.className='description1'
  pDes.innerHTML='Navy solid sweatshirt with patchwork, has a round neck, long sleeves';

var productPreview=document.createElement('div')
productPreview.className='product-preview';
var productTitle=document.createElement('h3');
productTitle.innerHTML='Product Preview';

var previewImg=document.createElement('div')
previewImg.className='preview-img';


/* var photos=document.createElement('img')
photos.src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg "
photos.className='img0 active';
var photo1=document.createElement('img')
photo1.className='img1 active';
photo1.src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg"

var photo2=document.createElement('img')
photo2.className='img1 active';
photo2.src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg"

 */

var button=document.createElement('div')
button.className='btn ';
var addBtn=document.createElement('button')
addBtn.className='add-to-cart';
addBtn.innerHTML="Add to Cart"

  mainDiv.appendChild(leftDiv)
  leftDiv.appendChild(img)
  mainDiv.appendChild(rightDiv)
  rightDiv.appendChild(productDes)
  rightDiv.appendChild(title)
  rightDiv.appendChild(brand)
  rightDiv.appendChild(price)

  rightDiv.appendChild(descriptionItem)
  descriptionItem.appendChild(aboutDes)
  descriptionItem.appendChild(pDes)
  rightDiv.appendChild(productPreview)
  productPreview.appendChild(productTitle)
  rightDiv.appendChild(previewImg)
  // previewImg.appendChild(photos)
  // previewImg.appendChild(photo1)
  // previewImg.appendChild(photo2)
  for (let i=0; i<productData.photos.length;i++){
    
    var photo=document.createElement('img');
    photo.src=productData.photos[i];
    photo.className='img0';
    previewImg.appendChild(photo)
    photo.onmousemove=function(){
      img.src=productData.photos[i];
    }
  }
  
  rightDiv.appendChild(button)
  button.appendChild(addBtn)
  console.log(mainDiv)
 

  
  

