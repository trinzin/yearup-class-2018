console.log('🚀');

    axios.get("https://www.redbullshopus.com/products.json")
      .then(function(envelope){
        console.log(envelope.data.products[0].images[0].src);
        console.log(envelope.data.products[0].images[1].src);
        console.log(envelope.data.products[0].images[2].src);

      let image_0 = envelope.data.products[0].images[0].src;
      let image_1 = envelope.data.products[0].images[1].src;
      let image_2 = envelope.data.products[0].images[2].src;
      let image_array = [image_0, image_1, image_2];
      let image0 = document.getElementById('zero');
      let image1 = document.getElementById('one');
      let image2 = document.getElementById('two');

      image0.src = image_0;
      image1.src = image_1;
      image2.src = image_2;



      })
