<template>
    <div>

        <div class="container">
            <div class="row">
                <div class="col-md-12 mt-5">
                    <div class="section-title">
                        <h1 class="title title-custom bg-transparent">{{$ml.get('about_us')}}</h1>
                    </div>
                </div>
                <div class="col-md-6">
                    <p>
                        ........................ .............................. .......................... ............
                        ........................ .............................. .......................... ............
                        ........................ .............................. .......................... ............
                        ........................ .............................. .......................... ............
                        ........................ .............................. .......................... ............
                        ........................ .............................. .......................... ............
                        ........................ .............................. .......................... ............
                        ........................ .............................. .......................... ............
                        ........................ .............................. .......................... ............
                        ........................ .............................. .......................... ............
                        ........................ .............................. .......................... ............
                        ........................ .............................. .......................... ............
                        ........................ .............................. .......................... ............
                        ........................ .............................. .......................... ............
                        ........................ .............................. .......................... ............
                    </p>
                </div>
                <div class="col-md-6">
                    <div style="width: 100%;direction: ltr">
                        <ul id="lightSlider">
                            <li data-thumb="https://via.placeholder.com/350x250">
                                <img src="https://via.placeholder.com/350x250"/>
                            </li>
                            <li data-thumb="https://via.placeholder.com/350x250">
                                <img src="https://via.placeholder.com/350x250"/>
                            </li>
                            <li data-thumb="https://via.placeholder.com/350x250">
                                <img src="https://via.placeholder.com/350x250"/>
                            </li>
                            <li data-thumb="https://via.placeholder.com/350x250">
                                <img src="https://via.placeholder.com/350x250"/>
                            </li>
                            <li data-thumb="https://via.placeholder.com/350x250">
                                <img src="https://via.placeholder.com/350x250"/>
                            </li>
                            <li data-thumb="https://via.placeholder.com/350x250">
                                <img src="https://via.placeholder.com/350x250"/>
                            </li>
                            <li data-thumb="https://via.placeholder.com/350x250">
                                <img src="https://via.placeholder.com/350x250"/>
                            </li>
                            <li data-thumb="https://via.placeholder.com/350x250">
                                <img src="https://via.placeholder.com/350x250"/>
                            </li>
                            <li data-thumb="https://via.placeholder.com/350x250">
                                <img src="https://via.placeholder.com/350x250"/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="mt-5"></div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "MainAbout",
        mounted() {
            this.sliderFunctionaliy();
        },
        methods: {
            sliderFunctionaliy() {
                require('@/assets/js/lightslider.min.js')
                $('#lightSlider').lightSlider({
                    gallery: true,
                    item: 1,
                    loop: true,
                    slideMargin: 0,
                    thumbItem: 9
                });
            }
        }
    }
</script>

<style scoped>

</style>