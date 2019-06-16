<template>

    <!--Books-->
    <div>
        <div class="mt-5"></div>
        <div class="main-bg">
            <div class="container-fluid">
                <div class="mt-5"></div>
                <div class="section-title bg-transparent">
                    <h1 class="title title-custom bg-transparent"> {{$ml.get('latest_versions')}}</h1>
                </div>
                <div class="owl-carousel owl-theme owl-carousel-books">
                    <div class="item" v-for="(book,key) in books" :key="key">
                        <div class="bookitem">
                            <img :src="book.image" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-5"></div>
    </div>
    <!--/Books-->
</template>

<script>
    /* eslint-disable */

    import '@/assets/css/owl.carousel.min.css';
    import '@/assets/css/owl.theme.default.min.css';
    import '@/assets/css/owl.theme.green.min.css';

    export default {
        name: "Books",
        data() {
            return {
                books: [
                    {image: "https://d1466nnw0ex81e.cloudfront.net/n_iv/600/864281.jpg", title: 'book1'},
                    {
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDRWKKw3POgACFtH2dwSatcdOS-vzRQIANV7E15w7ZrjB5EvQd",
                        title: 'book2'
                    },
                    {image: "https://static.posters.cz/image/1300/kalendare/spiderman-i51053.jpg", title: 'book3'},
                    {
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu6GNg-eMX5tpdQawW50i9W6GcjhwrwTFxHXxkZFkLS4ldkQRN",
                        title: 'book4'
                    }
                ]
            }
        },
        mounted() {
            this.owlFunctionality();

        },
        methods: {
            owlFunctionality() {
                console.log($)
                window.fn = require('@/assets/js/owl.carousel.min.js');

                $('.owl-carousel-books').owlCarousel({
                    rtl: true,
                    loop: true,
                    margin: 10,
                    autoplay: true,
                    autoplayTimeout: 1000,
                    autoplayHoverPause: true,
                    nav: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 8
                        },
                        1000: {
                            items: 8
                        }
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>