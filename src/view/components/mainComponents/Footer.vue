<template>

    <footer id="footer">
        <!-- container -->
        <div class="container">
            <!-- row -->
            <div class="row">
                <div class="col-md-3">
                    <div class="footer-widget">
                        <div class="footer-logo">
                            <a href="" class="logo"><img src="@/assets/images/logo.png" width="90" alt=""></a>
                        </div>
                        <p class="text-white"> يسعدنا تواصلك تواصل معنا الان</p>
                        <ul class="contact-social">
                            <li><a :href="staticInfo.facebook_url" target="_blank" class="social-facebook"><i
                                    class="fab fa-facebook"></i></a></li>
                            <li><a :href="staticInfo.twitter_url" target="_blank" class="social-twitter"><i
                                    class="fab fa-twitter"></i></a></li>
                            <li><a :href="staticInfo.instagram_url" target="_blank" class="social-instagram"><i
                                    class="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="footer-widget">
                        <h3 class="footer-title">علامات</h3>
                        <div class="tags-widget">
                            <ul>
                                <li><a href="#">كتب</a></li>
                                <li><a href="#">مقالات</a></li>
                                <li><a href="#">فيديوهات</a></li>
                                <li><a href="#">منشورات</a></li>
                                <li><a href="#">اخبار</a></li>
                                <li><a href="#">اخر الاحداث</a></li>
                                <li><a href="#">كتب</a></li>
                                <li><a href="#">مقالات</a></li>
                                <li><a href="#">فيديوهات</a></li>
                                <li><a href="#">منشورات</a></li>
                                <li><a href="#">اخبار</a></li>
                                <li><a href="#">اخر الاحداث</a></li>
                                <li><a href="#">كتب</a></li>
                                <li><a href="#">مقالات</a></li>
                                <li><a href="#">فيديوهات</a></li>
                                <li><a href="#">منشورات</a></li>
                                <li><a href="#">اخبار</a></li>
                                <li><a href="#">اخر الاحداث</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="footer-widget">
                        <h3 class="footer-title">البريد الالكتروني</h3>
                        <div class="newsletter-widget">
                            <form>
                                <p class="text-white">يمكنك الان الاشترك فى خدمة الرسائل الالكترونية</p>
                                <input class="input" name="newsletter" placeholder="اكتب البريد الالكتروني">
                                <div class="text-center">
                                    <button class="primary-button mt-5">اشترك الان</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /row -->

            <!-- row -->
            <div class="footer-bottom row">
                <div class="col-md-12 text-center text-white">
                    <div class="footer-copyright">

                        جميع حقوق النشر محفوظة ©
                        {{ new Date().getFullYear()}}
                        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                    </div>
                </div>
            </div>
            <!-- /row -->
        </div>
        <!-- /container -->
    </footer>

</template>

<script>
    import GLOBALINFO from '../../../bootstrap/appStaticInfo'

    export default {
        name: "Footer",
        data() {
            return {
                staticInfo: GLOBALINFO
            }
        },
    }
</script>

<style scoped>

</style>