<template>
    <!-- Aside Nav -->
    <div id="nav-aside">
        <ul class="nav-aside-menu">
            <li><a href="#">{{$ml.get('home_page')}}</a></li>
            <li><a href="#">{{$ml.get('site_name')}}</a></li>
            <li><a href="#">{{$ml.get('activities')}}</a></li>
            <li><a href="#">{{$ml.get('poems_written')}} </a></li>
            <li><a href="#">{{$ml.get('news')}}</a></li>
            <li><a href="#">{{$ml.get('articles')}}</a></li>
            <li><a href="#">{{$ml.get('competitions')}}</a></li>
            <li><a href="#">{{$ml.get('dar_versions')}}</a></li>
            <li><a href="#">{{$ml.get('gallery')}}</a></li>
            <li><a href="#">{{$ml.get('videos')}}</a></li>
            <li><a href="#">{{$ml.get('audios')}}</a></li>
            <li><a href="#">{{$ml.get('about_us')}}</a></li>
            <li><a href="#">{{$ml.get('contact_us')}}</a></li>
        </ul>
        <button class="nav-close nav-aside-close"><span></span></button>
    </div>
    <!-- /Aside Nav -->
</template>

<script>
    export default {
        name: "TopHeaderSide",
        mounted() {
            this.sideBarFunctionality()
        },
        methods: {
            sideBarFunctionality() {
                // Aside Nav
                $(document).click(function (event) {
                    if (!$(event.target).closest($('#nav-aside')).length) {
                        if ($('#nav-aside').hasClass('active')) {
                            $('#nav-aside').removeClass('active');
                            $('#nav').removeClass('shadow-active');
                        } else {
                            if ($(event.target).closest('.aside-btn').length) {
                                $('#nav-aside').addClass('active');
                                $('#nav').addClass('shadow-active');
                            }
                        }
                    }
                });

                $('.nav-aside-close').on('click', function () {
                    $('#nav-aside').removeClass('active');
                    $('#nav').removeClass('shadow-active');
                });
            }
        }
    }
</script>

<style scoped>

</style>