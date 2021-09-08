Vue.config.devtools = true;

const app = new Vue( {
    el: "#root",
        data: {
            counterPhotos: 0,
            photos: ["../vue slider/img/image1.jpg",
            "../vue slider/img/image2.jpg",
            "../vue slider/img/image3.jpg",
            "../vue slider/img/image4.jpg"
        ]
            
    },

    mounted: function() {
        var time = 3000;
		setInterval( () => {
        if (this.nextPhoto()) {
            time = 3000;
         }
    }, time);
	},
    // mounted: function() {
    //     var time = 3000;
    //     setInterval( () => {
    //       this.nextPhoto();
    //     }, time);
    //   },
	

    methods: {
        prevPhoto() {
            this.counterPhotos -= 1;
           if (this.counterPhotos < 0) {
            this.counterPhotos = (this.photos.length- 1);
           }
        },
        nextPhoto() {
            this.counterPhotos += 1;
            if (this.counterPhotos == (this.photos.length- 1)) this.counterPhotos = 0;
        }
    }
   
  
 
});
