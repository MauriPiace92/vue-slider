var app= new Vue(
    {
        el:'#root',
        data:{
            countIndexImg: 0,
            images:[
                'img/campagna.jpg',
                'img/cascate.webp',
                'img/fiori.jpeg',
                'img/montagne.webp'
            ],
            visible: true

            
            
        },
        methods:{
            nextImage(){
                const nextImg= this.countIndexImg +1;
                

                if(nextImg > this.images.length - 1 ){
                    this.countIndexImg = 0;
                }else{
                
                    this.countIndexImg = nextImg;
                };

            },

            prevImage(){
                const prevImg= this.countIndexImg -1;

                if(prevImg < 0){

                  this.countIndexImg = this.images.length -1;      

                } else{

                    this.countIndexImg = prevImg;

                }
                
            }
        },
        created(){
            setInterval(() =>{ 
                this.nextImage(); 
            }, 3000);
        }
    }
);