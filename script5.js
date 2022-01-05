
async function product() {

    try {
        var res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner');
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
            brand.innerHTML = makeup[i].brand;
            brand.setAttribute('class','brand');
    
            var name = document.createElement('h4');
            name.innerHTML = makeup[i].name;
    
            var description = document.createElement('div');
            description.setAttribute('class','desc');
            var text = makeup[i].description;
            function shorten(text,max) {
                return text && text.length > max ? text.slice(0,max).split(' ').slice(0, -1).join(' ') : text
            }
            console.log(shorten(text,150));
            description.innerHTML = shorten(text,150); 
            
            var link = document.createElement('a');
            link.setAttribute('href',makeup[i].product_link);
            link.innerHTML = "<i>Click to buy </i>";
    
            var price = document.createElement('div');
            price.setAttribute('class','price');
            price.innerHTML = "$ "+ makeup[i].price;
    
            div.append(img,name,brand,description,link,price);
            row.append(div);
            document.body.append(row);
            console.log(makeup[i].name);
        }
    
        // for(var i=100; i<103; i++) {
    
        //     var div = document.createElement('div');
        //     div.setAttribute('class','col-lg-4');
    
        //     var img = document.createElement('img');
        //     img.setAttribute('src',makeup[i].image_link);
    
        //     var brand = document.createElement('div');
        //     brand.innerHTML ="<b>Brand : </b>" + makeup[i].brand;
    
        //     var name = document.createElement('h4');
        //     name.innerHTML ="<b>Name : </b>" + makeup[i].name;
    
        //     var description = document.createElement('div');
        //     description.innerHTML = "<b>Description : </b>" + makeup[i].description;
            
        //     var link = document.createElement('a');
        //     link.setAttribute('href',makeup[i].product_link);
        //     link.innerHTML = "<b>Product Link </b>";
    
        //     var price = document.createElement('div');
        //     price.innerHTML ="<b>Price : </b>" + makeup[i].price_sign + makeup[i].price;
    
        //     div.append(img,name,brand,description,link,price);
        //     row.append(div);
        //     document.body.append(row);
        //     console.log(makeup[i].name);
        // }

        // for(var i=203; i<206; i++) {
    
        //     var div = document.createElement('div');
        //     div.setAttribute('class','col-lg-4');
    
        //     var img = document.createElement('img');
        //     img.setAttribute('src',makeup[i].image_link);
    
        //     var brand = document.createElement('div');
        //     brand.innerHTML ="<b>Brand : </b>" + makeup[i].brand;
    
        //     var name = document.createElement('h4');
        //     name.innerHTML ="<b>Name : </b>" + makeup[i].name;
    
        //     var description = document.createElement('div');
        //     description.innerHTML = "<b>Description : </b>" + makeup[i].description;
            
        //     var link = document.createElement('a');
        //     link.setAttribute('href',makeup[i].product_link);
        //     link.innerHTML = "<b>Product Link </b>";
    
        //     var price = document.createElement('div');
        //     price.innerHTML ="<b>Price : </b>" + makeup[i].price_sign + makeup[i].price;
    
        //     div.append(img,name,brand,description,link,price);
        //     row.append(div);
        //     document.body.append(row);
        //     console.log(makeup[i].name);
        // }

        // for(var i=340; i<343; i++) {
    
        //     var div = document.createElement('div');
        //     div.setAttribute('class','col-lg-4');
    
        //     var img = document.createElement('img');
        //     img.setAttribute('src',makeup[i].image_link);
    
        //     var brand = document.createElement('div');
        //     brand.innerHTML ="<b>Brand : </b>" + makeup[i].brand;
    
        //     var name = document.createElement('h4');
        //     name.innerHTML ="<b>Name : </b>" + makeup[i].name;
    
        //     var description = document.createElement('div');
        //     description.innerHTML = "<b>Description : </b>" + makeup[i].description;
            
        //     var link = document.createElement('a');
        //     link.setAttribute('href',makeup[i].product_link);
        //     link.innerHTML = "<b>Product Link </b>";
    
        //     var price = document.createElement('div');
        //     price.innerHTML ="<b>Price : </b>" + makeup[i].price_sign + makeup[i].price;
    
        //     div.append(img,name,brand,description,link,price);
        //     row.append(div);
        //     document.body.append(row);
        //     console.log(makeup[i].name);
        // }

        // for(var i=500; i<503; i++) {
    
        //     var div = document.createElement('div');
        //     div.setAttribute('class','col-lg-4');
    
        //     var img = document.createElement('img');
        //     img.setAttribute('src',makeup[i].image_link);
    
        //     var brand = document.createElement('div');
        //     brand.innerHTML ="<b>Brand : </b>" + makeup[i].brand;
    
        //     var name = document.createElement('h4');
        //     name.innerHTML ="<b>Name : </b>" + makeup[i].name;
    
        //     var description = document.createElement('div');
        //     description.innerHTML = "<b>Description : </b>" + makeup[i].description;
            
        //     var link = document.createElement('a');
        //     link.setAttribute('href',makeup[i].product_link);
        //     link.innerHTML = "<b>Product Link </b>";
    
        //     var price = document.createElement('div');
        //     price.innerHTML ="<b>Price : </b>" + makeup[i].price_sign + makeup[i].price;
    
        //     div.append(img,name,brand,description,link,price);
        //     row.append(div);
        //     document.body.append(row);
        //     console.log(makeup[i].name);
        // }

        // for(var i=690; i<693; i++) {
    
        //     var div = document.createElement('div');
        //     div.setAttribute('class','col-lg-4');
    
        //     var img = document.createElement('img');
        //     img.setAttribute('src',makeup[i].image_link);
    
        //     var brand = document.createElement('div');
        //     brand.innerHTML ="<b>Brand : </b>" + makeup[i].brand;
    
        //     var name = document.createElement('h4');
        //     name.innerHTML ="<b>Name : </b>" + makeup[i].name;
    
        //     var description = document.createElement('div');
        //     description.innerHTML = "<b>Description : </b>" + makeup[i].description;
            
        //     var link = document.createElement('a');
        //     link.setAttribute('href',makeup[i].product_link);
        //     link.innerHTML = "<b>Product Link </b>";
    
        //     var price = document.createElement('div');
        //     price.innerHTML ="<b>Price : </b>" + makeup[i].price_sign + makeup[i].price;
    
        //     div.append(img,name,brand,description,link,price);
        //     row.append(div);
        //     document.body.append(row);
        //     console.log(makeup[i].name);
        // }

        // for(var i=780; i<783; i++) {
    
        //     var div = document.createElement('div');
        //     div.setAttribute('class','col-lg-4');
    
        //     var img = document.createElement('img');
        //     img.setAttribute('src',makeup[i].image_link);
    
        //     var brand = document.createElement('div');
        //     brand.innerHTML ="<b>Brand : </b>" + makeup[i].brand;
    
        //     var name = document.createElement('h4');
        //     name.innerHTML ="<b>Name : </b>" + makeup[i].name;
    
        //     var description = document.createElement('div');
        //     description.innerHTML = "<b>Description : </b>" + makeup[i].description;
            
        //     var link = document.createElement('a');
        //     link.setAttribute('href',makeup[i].product_link);
        //     link.innerHTML = "<b>Product Link </b>";
    
        //     var price = document.createElement('div');
        //     price.innerHTML ="<b>Price : </b>" + makeup[i].price_sign + makeup[i].price;
    
        //     div.append(img,name,brand,description,link,price);
        //     row.append(div);
        //     document.body.append(row);
        //     console.log(makeup[i].name);
        // }

        // for(var i=820; i<823; i++) {
    
        //     var div = document.createElement('div');
        //     div.setAttribute('class','col-lg-4');
    
        //     var img = document.createElement('img');
        //     img.setAttribute('src',makeup[i].image_link);
    
        //     var brand = document.createElement('div');
        //     brand.innerHTML ="<b>Brand : </b>" + makeup[i].brand;
    
        //     var name = document.createElement('h4');
        //     name.innerHTML ="<b>Name : </b>" + makeup[i].name;
    
        //     var description = document.createElement('div');
        //     description.innerHTML = "<b>Description : </b>" + makeup[i].description;
            
        //     var link = document.createElement('a');
        //     link.setAttribute('href',makeup[i].product_link);
        //     link.innerHTML = "<b>Product Link </b>";
    
        //     var price = document.createElement('div');
        //     price.innerHTML ="<b>Price : </b>" + makeup[i].price_sign + makeup[i].price;
    
        //     div.append(img,name,brand,description,link,price);
        //     row.append(div);
        //     document.body.append(row);
        //     console.log(makeup[i].name);
        // }

        // for(var i=906; i<909; i++) {
    
        //     var div = document.createElement('div');
        //     div.setAttribute('class','col-lg-4');
    
        //     var img = document.createElement('img');
        //     img.setAttribute('src',makeup[i].image_link);
    
        //     var brand = document.createElement('div');
        //     brand.innerHTML ="<b>Brand : </b>" + makeup[i].brand;
    
        //     var name = document.createElement('h4');
        //     name.innerHTML ="<b>Name : </b>" + makeup[i].name;
    
        //     var description = document.createElement('div');
        //     description.innerHTML = "<b>Description : </b>" + makeup[i].description;
            
        //     var link = document.createElement('a');
        //     link.setAttribute('href',makeup[i].product_link);
        //     link.innerHTML = "<b>Product Link </b>";
    
        //     var price = document.createElement('div');
        //     price.innerHTML ="<b>Price : </b>" + makeup[i].price_sign + makeup[i].price;
    
        //     div.append(img,name,brand,description,link,price);
        //     row.append(div);
        //     document.body.append(row);
        //     console.log(makeup[i].name);
        // }

    } catch (error) {
        console.log(error);
    }
}

product();