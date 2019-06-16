<template>
    <div class="container-fluids" style="padding: 0 15px">
        <div class="row" style="background: rgb(144, 142, 142)">
            <div class="col-md-4">
                <div id="container">

                    <div class="background"></div>
                    <div id="cover"></div>
                    <!-- audio player -->
                    <div id="audio-info">
                        <span class="Artist">Artist</span>
                        <span class="Title">Title</span>
                    </div>
                    <!-- Seek bar -->
                    <div class="bottom">
                        <!-- Controls -->
                        <div id="Controls">
                            <!--                 <button class="Skip-Back"><i class="ion-skip-backward"></i></button> -->
                            <button class="Play audio-button">
                                <i class="material-icons dp48">play_circle_filled</i>
                            </button>
                            <button class="Pause audio-button">
                                <i class="material-icons dp48">pause_circle_outline</i>
                            </button>
                            <button class="Stop audio-button">
                                <i class="material-icons dp48">stop</i>
                            </button>
                            <button class="Stop audio-button">
                                <i class="material-icons dp48" id="Volume-Icon">volume_up</i>
                            </button>
                            <!--<button class="Skip-forward"><i class="ion-skip-forward"></i></button>-->
                            <div id="Volume-Controls">
                                <!--<i class="ion-volume-medium"></i> -->
                                <!--<i class="material-icons dp48" id="Volume-Icon">volume_up</i>-->
                                <input id="Volume" type="range" min="0" max="100" value="50" orient="vertical">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="row">
                    <div class="col-md-2">
                        <div class="play_icon"></div>
                    </div>
                    <div class="col-md-10 text-left direction-ltr">
                        <div class="mt-5"></div>
                        <h2 id="song_title" class="title_bg_dark"></h2>
                        <h3 id="song_artist" class="title_bg_sm_dark"></h3>
                    </div>
                    <div class="col-md-12">

                        <div class="bottoms" style="direction: ltr">
                            <div id="Seek-Bar">
                                <div id="Progress-Bar"></div>
                                <div id="Loading-Bar"></div>
                                <div id="handle"></div>
                            </div>
                            <div id="Time"></div>
                        </div>
                        <div class="row">
                            <div class="mt-5"></div>
                            <div class="col-md-12">
                                <ul id="playlist" class="list-group">
                                    <li class="audio-li list-group-item" song="http://gdurl.com/aEBf"
                                        artist="Capital Kings"
                                        title="Don't Wanna Wake Up"
                                        cover="http://gdurl.com/Ssby">
                                        <i class="material-icons display_icon_list">play_circle_outline</i>Don't Wanna
                                        Wake Up
                                    </li>
                                    <li class="audio-li list-group-item" song="http://gdurl.com/arOF"
                                        artist="Citizen Way"
                                        title="Bulletproof"
                                        cover="https://images-na.ssl-images-amazon.com/images/I/81EBWVsSheL._SY355_.jpg">
                                        <i class="material-icons display_icon_list">play_circle_outline</i>Bulletproof
                                    </li>
                                    <li class="audio-li list-group-item" song="http://gdurl.com/aEBf"
                                        artist="Capital Kings"
                                        title="Don't Wanna Wake Up"
                                        cover="http://gdurl.com/Ssby">
                                        <i class="material-icons display_icon_list">play_circle_outline</i>Don't Wanna
                                        Wake Up
                                    </li>
                                    <li class="audio-li list-group-item" song="http://gdurl.com/Os8Q"
                                        artist="Future James"
                                        title="Life"
                                        cover="http://gdurl.com/io3Y">
                                        <i class="material-icons display_icon_list">play_circle_outline</i>life
                                    </li>
                                    <li class="audio-li list-group-item" song="http://gdurl.com/aEBf"
                                        artist="Capital Kings"
                                        title="Don't Wanna Wake Up"
                                        cover="http://gdurl.com/Ssby">
                                        <i class="material-icons display_icon_list">play_circle_outline</i>Don't Wanna
                                        Wake Up
                                    </li>
                                    <li class="audio-li list-group-item" song="http://gdurl.com/aEBf"
                                        artist="Capital Kings"
                                        title="Don't Wanna Wake Up"
                                        cover="http://gdurl.com/Ssby">
                                        <i class="material-icons display_icon_list">play_circle_outline</i>Don't Wanna
                                        Wake Up
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import '@/assets/css/audio.css';

    export default {
        name: "AudioPlaylist",
        mounted() {
            this.audioFunctionality()
        },
        methods: {
            audioFunctionality() {
                $(document).ready(function () {
                    var isPlaying = false;
                    var songtime = 0;
                    var song;
                    $.get;
                    $(".Pause").hide();

                    let fillBar = document.querySelector('#Progress-Bar');
                    let seekBar = document.querySelector('#Seek-Bar');
                    let volumeSlider = document.querySelector('#Volume');
                    let container = document.querySelector('#container');

                    //Initializer - Play First Song
                    initAudio($('#playlist li:first-child'));

                    function initAudio(element) {
                        var file = element.attr('song');
                        var title = element.text();
                        var cover = element.attr('cover');
                        var artist = element.attr('artist');


                        //Create a New Audio Object
                        song = new Audio(file);


                        if (!song.currentTime) {
                            $('#duration').html('0.00');
                        }

                        $('#song_title').text(title)
                        $('#song_artist').text(artist)
                        $('#audio-info .title').text(title);
                        $('#audio-info .artist').text(artist);

                        $('#container').css('background-image', 'url(' + cover + ')');

                        $('#playlist li').removeClass('active');
                        element.addClass('active');
                    }

                    // Play Button
                    $(".Play").click(function () {
                        song.play();
                        isPlaying = true;
                        console.log("Playing...");
                        $(this).hide();
                        $(".Pause").show();
                        showDuration();
                        $("#cover").css("transform", "scale(1)")
                    });

                    // Pause Button
                    $(".Pause").click(function () {
                        $(this).hide();
                        $(".Play").show();
                        song.pause();
                        isPlaying = false;
                        console.log("Paused")
                        $("#cover").css("transform", "scale(.8)")
                    });

                    // Stop Button
                    $(".Stop").click(function () {
                        song.pause();
                        song.currentTime = 0;
                        $(".Pause").hide();
                        $(".Play").show();
                    });

                    // Time Duration
                    if (!song.currentTime) {
                        $("#Time").html("0:00")
                    }

                    function showDuration() {
                        $(song).bind("timeupdate", function () {
                            // Get Hours & Minutes
                            var s = parseInt(song.currentTime % 60);
                            var m = parseInt((song.currentTime) / 60) % 60;
                            // Add 0 if less them 10
                            if (s < 10) {
                                s = "0" + s;
                            }
                            $("#Time").html(m + ":" + s)
                            var value = 0;
                            if (song.currentTime > 0) {
                                value = Math.floor((100 / song.duration) * song.currentTime);
                            }
                            let p = song.currentTime / song.duration;

                            fillBar.style.width = p * 100 + '%';

                        });
                    }

                    //  Volume Control
                    volumeSlider.oninput = function () {
                        song.volume = parseFloat(this.value / 100);
                    };

                    // progress bar
                    let mousedown = false

                    function clamp(min, val, max) {
                        return Math.min(Math.max(min, val), max);
                    }

                    function getP(e) {
                        let p = (e.clientX - container.offsetLeft - seekBar.offsetLeft) / seekBar.clientWidth;
                        p = clamp(0, p, 1);

                        console.log(p);

                        return p;

                    }

                    seekBar.addEventListener('mousedown', function (e) {
                        mousedown = true;

                        let p = getP(e);

                        fillBar.style.width = p * 100 + '%';

                        console.log;
                    });

                    //Playlist Song Click
                    $('#playlist li').click(function () {
                        song.pause();
                        initAudio($(this));
                        $('.Play').hide();
                        $('.Pause').show();
                        song.play();
                        showDuration();

                    });

                    window.addEventListener('mousemove', function (e) {
                        if (!mousedown) return;

                        let p = getP(e);

                        fillBar.style.width = p * 100 + '%';

                        fillBar.style.transition = "0s";

                    });

                    window.addEventListener('touchmove', function (e) {
                        if (!touchstart) return;

                        let p = getP(e);

                        fillBar.style.width = p * 100 + '%';

                        fillBar.style.transition = "0s";

                    });

                    window.addEventListener('mouseup', function (e) {
                        if (!mousedown) return;

                        mousedown = false;

                        let p = getP(e);


                        fillBar.style.width = p * 100 + '%';

                        fillBar.style.transition = "0.3s";

                        song.currentTime = p * song.duration;
                    });


                });
            }
        }
    }
</script>

<style scoped>
    @import "https://fonts.googleapis.com/icon?family=Material+Icons";

    .dp48 {
        font-size: 48px;
    }

    .title_bg_dark {
        background: rgba(0, 0, 0, 0.4);
        padding: 12px;
        color: #fff;
    }

    .title_bg_sm_dark {
        background: rgba(0, 0, 0, 0.4);
        padding: 10px;
        width: 300px;
        color: #fff;
    }

    .play_icon {
        width: 50px;
        height: 50px;
    }

    .list-group-item.active, .list-group-item.active:focus, .list-group-item.active:hover {
        z-index: 2;
        color: #fff;
        background-color: #cc9936;
        border-color: #d49823;
    }

    .display_icon_list {
        float: left;
        padding-right: 8px;
    }

    .direction-ltr {
        direction: ltr;
    }
</style>