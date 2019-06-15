<template>


    <!-- Main Nav -->
    <div id="nav-bottom">
        <div class="container-fluid">
            <!-- nav -->
            <ul class="nav-menu">
                <li>
                    <router-link :to="{ name: 'home'}"
                                 tag="a" active-class="actives"
                                 exact-active-class="active">{{$ml.get('home_page')}}
                    </router-link>
                </li>
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
                <li>
                    <router-link :to="{ name: 'about_us'}"
                                 tag="a" active-class="active"
                                 exact-active-class="active">{{$ml.get('about_us')}}
                    </router-link>
                </li>
                <li><a href="#">{{$ml.get('contact_us')}}</a></li>
            </ul>
            <!-- /nav -->
        </div>
    </div>
    <!-- /Main Nav -->
</template>

<script>
    export default {
        name: "TopHeaderNav"
    }
</script>

<style scoped>

</style>