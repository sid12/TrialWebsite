	var image1 = new Image()
	image1.src = "one.jpg"
	var image2 = new Image()
	image2.src = "two.jpg"
	var image3 = new Image()
	image3.src = "three.jpg"
        var step=1;
        function slideit()
        {
            document.images.slide.src = eval("image"+step+".src");
			setTimeout("slideit()",5000);
            if(step<3)
                {
				step++;
				}
            else
                {
				step=1;
				}
        }
        slideit();

