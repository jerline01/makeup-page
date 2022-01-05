
async function product() {

    try {
        var res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner');
        var makeup = await res.json();
        console.log(makeup);
    
        var row = document.createElement('div');
        row.setAttribute('class','row');
    
        for(var i=0; i<29; i++) {
    
            var div = document.createElement('div');
            div.setAttribute('class','col-lg-4');
    
            var img = document.createElement('img');
            img.setAttribute('src',makeup[i].image_link);
    
            var brand = document.createElement('div');
            brand.innerHTML ="<b>Brand : </b>" + makeup[i].brand;
    
            var name = document.createElement('h4');
            name.innerHTML ="<b>Name : </b>" + makeup[i].name;
    
            var description = document.createElement('div');
            description.innerHTML = "<b>Description : </b>" + makeup[i].description;
            
            var link = document.createElement('a');
            link.setAttribute('href',makeup[i].product_link);
            link.innerHTML = "<b>Product Link </b>";
    
            var price = document.createElement('div');
            price.innerHTML ="<b>Price : </b>" + makeup[i].price_sign + makeup[i].price;
    
            div.append(img,name,brand,description,link,price);
            row.append(div);
            document.body.append(row);
            console.log(makeup[i].name);
        }
    

    } catch (error) {
        console.log(error);
    }
}

product();
