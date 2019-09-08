<template>
    <!-- Aside Nav -->
    <div id="nav-aside">
        <ul class="nav-aside-menu">
            <slot v-for="(nav_item , key) in NBar">
                <li v-if="nav_item.categories.length == 0">
                    <router-link :to="{ name: nav_item.name}"
                                 tag="a" active-class="actives"
                                 exact-active-class="active">{{nav_item[currentLang].title}}
                    </router-link>
                </li>

                <li class="has-dropdown" v-if="nav_item.categories.length > 0">
                    <div class="tabs">
                        <div class="tab">
                            <input type="radio" :id="'rd'+key" name="rd">
                            <label class="tab-label" :for="'rd'+key">{{nav_item[currentLang].title}}</label>
                            <div class="tab-content">
                                <ul class="dropdown-list">
                                    <li v-for="(category , _key) in nav_item.categories" :key="_key">
                                        <router-link :to="{ name: nav_item.name,params: {category:category}}"
                                                     tag="a" active-class="actives" class="submenu"
                                                     exact-active-class="active">{{category}}
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!--                        <div class="tab">-->
                        <!--                            <input type="radio" id="rd3" name="rd">-->
                        <!--                            <label for="rd3" class="tab-close">Close others &times;</label>-->
                        <!--                        </div>-->
                    </div>
                </li>
            </slot>


        </ul>
        <button class="nav-close nav-aside-close"><span></span></button>
    </div>
    <!-- /Aside Nav -->
</template>

<script>

    import apiServiesRoutes from '@/bootstrap/apiServiesRoutes'

    export default {
        name: "TopHeaderSide",
        data() {
            return {
                currentLang: this.$ml.current,
                NBar: []
            }
        },
        mounted() {
            this.getMenuItems();
            this.sideBarFunctionality()
        },
        methods: {
            getMenuItems() {
                let vm = this;

                axios.get(apiServiesRoutes.BASE_URL + apiServiesRoutes.NAV_BAR, {
                    params: {
                        lang: vm.currentLang
                    }
                }).then(response => {
                    if (response.data.status) {
                        vm.NBar = response.data.data.navbar;

                    }
                });
            },
            sideBarFunctionality() {
                // Aside Nav
                // $(document).click(function (event) {
                //     if (!$(event.target).closest($('#nav-aside')).length) {
                //         if ($('#nav-aside').hasClass('active')) {
                //             $('#nav-aside').removeClass('active');
                //             $('#nav').removeClass('shadow-active');
                //         } else {
                //             if ($(event.target).closest('.aside-btn').length) {
                //                 $('#nav-aside').addClass('active');
                //                 $('#nav').addClass('shadow-active');
                //             }
                //         }
                //     }
                // });

                $(document).on('click', '.aside-btn', function () {
                    $('#nav-aside').addClass('active');
                    $('#nav').addClass('shadow-active');
                });
                $(document).on('click', '.nav-aside-close', function () {
                    $('#nav-aside').removeClass('active');
                    $('#nav').removeClass('shadow-active');
                });
            }
        }
    }
</script>

<style scoped>
    .submenu {
        color: #fff !important;
        border-bottom: none;
    }

    /* Accordion styles */
    .tabs {
        overflow: hidden;
    }

    .tab {
        width: 100%;
        color: white;
        overflow: hidden;
    }

    .tab-label {
        display: flex;
        justify-content: space-between;
        padding: 1em;
        background: #00274e;
        font-weight: bold;
        cursor: pointer;
        /* Icon */
    }

    .tab-label:hover {
        background: #032241;
    }

    .tab-label::after {
        content: "\276F";
        width: 1em;
        height: 1em;
        text-align: center;
        transition: all .35s;
    }

    .tab-content {
        max-height: 0;
        padding: 0 1em;
        color: #00274e;
        background: #032c55;
        transition: all .35s;
    }

    .tab-close {
        display: flex;
        justify-content: flex-end;
        padding: 1em;
        font-size: 0.75em;
        background: #2c3e50;
        cursor: pointer;
    }

    .tab-close:hover {
        background: #032241;
    }

    input[type=checkbox], input[type=radio] {
        display: none;
    }

    input:checked + .tab-label {
        background: #032241;
    }

    input:checked + .tab-label::after {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
    }

    input:checked ~ .tab-content {
        max-height: 100vh;
        padding: 1em;
    }

</style>