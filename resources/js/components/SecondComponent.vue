<template>
    <div class="container">
        <div class="container-fluid fixed-top magic-container">

        <div id="mySidenav" class="sidenav text-center">
            <img href="#" src="download.jpg" alt="Avatar" class="avatar_chat mt-3" data-toggle="tooltip" title="name">
            <img href="#" src="download.jpg" alt="Avatar" class="avatar_chat mt-3" data-toggle="tooltip" title="name">
            <img href="#" src="download.jpg" alt="Avatar" class="avatar_chat mt-3" data-toggle="tooltip" title="name">
            <img href="#" src="download.jpg" alt="Avatar" class="avatar_chat mt-3" data-toggle="tooltip" title="name">
            <img href="#" src="download.jpg" alt="Avatar" class="avatar_chat mt-3" data-toggle="tooltip" title="name">
            <img href="#" src="download.jpg" alt="Avatar" class="avatar_chat mt-3" data-toggle="tooltip" title="name">
            <img href="#" src="download.jpg" alt="Avatar" class="avatar_chat mt-3" data-toggle="tooltip" title="name">
            <img href="#" src="download.jpg" alt="Avatar" class="avatar_chat mt-3" data-toggle="tooltip" title="name">
            <img href="#" src="download.jpg" alt="Avatar" class="avatar_chat mt-3" data-toggle="tooltip" title="name">
            <img href="#" src="download.jpg" alt="Avatar" class="avatar_chat mt-3" data-toggle="tooltip" title="name">

        </div>
    </div>
    <div id="s-nav">

        <div id="one" style="cursor:pointer; font-size:10px" class="float-right" onclick="openNav()">
            <div class='chat_label top-right py-2 px-1'>
                <div class='content'> Let's Chat <i class="fas fa-comments rot_of_icon"></i></div>
            </div>
        </div>
        <div id="two" style="cursor:pointer; font-size:10px" class="float-right" onclick="closeNav()">
            <div class='chat_label top-right1 py-2 px-1'>
                <div class='content'> Let's Chat<i class="fas fa-comments rot_of_icon"></i></div>
            </div>
        </div>
    </div>



    <div id="main" class="container pt-5">
        <div class="row m-3 pt-4">
            <div class="col-lg-9">
                <div class="row container1 p-3 text-center">
                    <div class="col-md-9">
                        <div class="row">
                            <div class="col-md-2 p-0">
                                <img src="download.jpg" alt="Avatar" class="avatar-post d-inline mt-0 pt-0">
                            </div>
                            <div class="col-md-9 p-0 pt-4">
                                <textarea class="d-inline w-100 shadow p-2" id="post"
                                    placeholder="Share some what are you thinking..."></textarea>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-3 text-center pt-4">
                        <div class="d-block">
                            <button class="btn page_btn" v-on:click="publish">Publish</button>
                        </div>
                        <div class="d-block pt-2 ">
                            <a href=""><i class="fas fa-image gold"></i></a>
                            <a href=""><i class="fas fa-music gold pl-2"></i></a>
                            <a href=""><i class="fas fa-file gold pl-2"></i></a>
                            <a href=""><i class="fas fa-video gold pl-2"></i></a>
                            <a href=""><i class="fas fa-map-marker-alt gold pl-2"></i></a>

                        </div>
                    </div>
                </div>
                <div class="row container1 mt-4 p-3" v-for="(p, index) in posts" :key="index">
                    <div class="col-md-7">
                        <div class="row">
                            <div class="col-3 col-lg-2 p-0 text-center">
                                <a href="#"><img src="download.jpg" alt="Avatar" class="avatar-post align-top"></a>
                            </div>
                            <div class="col-7 col-lg-8 p-0">
                                <div class="d-block pt-md-1">
                                    <a class="drop-text1 text-left">{{p.name}}</a>
                                </div>
                                <div class="d-block pt-md-2">
                                    <a class="drop-text1 text-left red">
                                        published: {{p.created_at}}
                                    </a>
                                </div>
                            </div>
                            <div class="col-2 text-center pt-3">
                                <a href="#"><i class="fa fa-ellipsis-h"></i></a>
                            </div>
                        </div>
                        <div class="row">
                            <p>{{p.caption}}</p>
                            <img v-bind:src="'/' + p.media" class="img-fluid" alt="Responsive image">
                            <div class="col-md-6 p-0 pt-3 pt-md-4 text-center">
                                <a href="#" class="d-inline-block"><i class="fas fa-eye gold d-block"></i><span class="black drop-text3"><strong>{{p.views}}</strong></span></a>
                                <a href="#" class="d-inline-block pl-3"><i class="fas fa-heart gold d-block"></i><span class="black drop-text3"><strong>{{p.likes}}</strong></span></a>
                                <a href="#" class="d-inline-block pl-3"><i class="fas fa-comment-alt gold d-block"></i><span class="black drop-text3"><strong>{{p.comments}}</strong></span></a>
                                <a href="#" class="d-inline-block pl-3"><i class="fas fa-share-alt gold d-block"></i><span class="black drop-text3"><strong>{{p.shares}}</strong></span></a>                               
                            </div>
                            <div class="col-md-6 p-0 pt-3 text-center">
                                <div>
                                    <a href="#"><img src="download.jpg" alt="Avatar" class="avatar-dropdown"></a>
                                    <a href="#"><img src="download.jpg" alt="Avatar" class="avatar-dropdown ml-n3"></a>
                                    <a href="#"><img src="download.jpg" alt="Avatar" class="avatar-dropdown ml-n3"></a>
                                    <a href="#"><img src="download.jpg" alt="Avatar" class="avatar-dropdown ml-n3"></a>
                                    <a href="#"><img src="download.jpg" alt="Avatar" class="avatar-dropdown ml-n3"></a>
                                </div>
                                <div>
                                    <span class="drop-text2">you,sarah and 25+ others likes</span>
                                </div>                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 my-auto pt-3 pt-md-0">
                        <div class="row container1 ml-md-2">
                            <div class="col-12">
                                <div class="row com-scroll">
                                    <div class="col-12 pb-3">
                                        <div class="row pt-3 pl-2 mb-0">
                                            <div class="col-2 p-0 pt-2 text-center">
                                                <a href="#"><img src="download.jpg" alt="Avatar" class="avatar"></a>
                                            </div>
                                            <div class="col-10 p-0 pr-2">
                                                <p class="mb-0 pb-0"><strong>Alyssa Perry: </strong>Lorem ipsum dolor sit amet consectetur </p>
                                                <div class="row mt-0">
                                                    <div class="col-9">
                                                        <a href="#" class="d-inline"><i class="fas fa-heart gold"></i><span class="black drop-text2 pl-1">101K</span></a>
                                                        <a href="#" class="d-inline pl-1"><i class="fas fa-comment-alt gold"></i><span class="black drop-text2 pl-1">101K</span></a>
                                                    </div>
                                                    <div class="col-3">
                                                        <a href="#"><i class="fa fa-ellipsis-h"></i></a>
                                                    </div>
                                                </div>  
                                            </div>
                                        </div>
                                        <div class="row pt-3 pl-2 mb-0">
                                            <div class="col-2 p-0 pt-2 text-center">
                                                <a href="#"><img src="download.jpg" alt="Avatar" class="avatar"></a>
                                            </div>
                                            <div class="col-10 p-0 pr-2">
                                                <p class="mb-0 pb-0"><strong>Alyssa Perry: </strong>Lorem ipsum dolor sit amet consectetur </p>
                                                <div class="row mt-0">
                                                    <div class="col-9">
                                                        <a href="#" class="d-inline"><i class="fas fa-heart gold"></i><span class="black drop-text2 pl-1">101K</span></a>
                                                        <a href="#" class="d-inline pl-1"><i class="fas fa-comment-alt gold"></i><span class="black drop-text2 pl-1">101K</span></a>
                                                    </div>
                                                    <div class="col-3">
                                                        <a href="#"><i class="fa fa-ellipsis-h"></i></a>
                                                    </div>
                                                </div>  
                                            </div>
                                        </div>
                                        <div class="row pt-3 pl-2 mb-0">
                                            <div class="col-2 p-0 pt-2 text-center">
                                                <a href="#"><img src="download.jpg" alt="Avatar" class="avatar"></a>
                                            </div>
                                            <div class="col-10 p-0 pr-2">
                                                <p class="mb-0 pb-0"><strong>Alyssa Perry: </strong>Lorem ipsum dolor sit amet consectetur </p>
                                                <div class="row mt-0">
                                                    <div class="col-9">
                                                        <a href="#" class="d-inline"><i class="fas fa-heart gold"></i><span class="black drop-text2 pl-1">101K</span></a>
                                                        <a href="#" class="d-inline pl-1"><i class="fas fa-comment-alt gold"></i><span class="black drop-text2 pl-1">101K</span></a>
                                                    </div>
                                                    <div class="col-3">
                                                        <a href="#"><i class="fa fa-ellipsis-h"></i></a>
                                                    </div>
                                                </div>  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row p-2 pb-3">
                                    <div class="col-12">
                                        <div class="row con-blue">
                                            <div class="col-2 p-0 py-1 text-center">
                                                <a href="#"><img src="download.jpg" alt="Avatar" class="avatar"></a>
                                            </div>
                                            <div class="col-7 p-0 my-auto">
                                                <input type="text" class="w-100 border-chat px-3 p-2 drop-text2" placeholder="Your comment here...">
                                            </div>
                                            <div class="col-3 p-0 pl-2 my-auto">
                                                <a href="#"><i class="fas fa-smile white d-inline"></i></a>
                                                <a href="#"><i class="fas fa-play white pl-2 d-inline"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="col-lg-3 pl-lg-5 mt-4 mt-lg-0">
                <div class="row container1">
                    <div class="col md-12">
                        <div>
                            <h6 class="py-3 blue"><strong>Friend Suggestions</strong></h6>
                        </div>
                        <div class="pb-2">
                            <div class="row">
                                <div class="col-3 p-0 text-center">
                                    <a href="#"><img src="download.jpg" alt="Avatar"
                                        class="avatar-dropdown"></a>
                                </div>
                                <div class="col-5 p-0">
                                    <div class="d-block">
                                        <a class="align-bottom drop-text1">Alyssa Perry</a>
                                    </div>
                                    <div class="d-block">
                                        <a class="align-top drop-text2">student</a>
                                    </div>
                                </div>
                                <div class="col-4 p-0 pr-md-2 text-center">
                                    <a href="#"><i class="fas fa-user-check pl-1 icons1 d-inline"></i></a>
                                    <a href="#"><i class="fas fa-user-times pl-1 icons1 d-inline"></i></a>
                                </div>
                            </div>
                            <div class="row pt-2">
                                <div class="col-3 p-0 text-center">
                                    <a href="#"><img src="download.jpg" alt="Avatar"
                                        class="avatar-dropdown"></a>
                                </div>
                                <div class="col-5 p-0">
                                    <div class="d-block">
                                        <a class="align-bottom drop-text1">Alyssa Perry</a>
                                    </div>
                                    <div class="d-block">
                                        <a class="align-top drop-text2">student</a>
                                    </div>
                                </div>
                                <div class="col-4 p-0 pr-md-2 text-center">
                                    <a href="#"><i class="fas fa-user-check pl-1 icons1 d-inline"></i></a>
                                    <a href="#"><i class="fas fa-user-times pl-1 icons1 d-inline"></i></a>
                                </div>
                            </div>
                            <div class="row pt-2">
                                <div class="col-3 p-0 text-center">
                                    <a href="#"><img src="download.jpg" alt="Avatar"
                                        class="avatar-dropdown"></a>
                                </div>
                                <div class="col-5 p-0">
                                    <div class="d-block">
                                        <a class="align-bottom drop-text1">Alyssa Perry</a>
                                    </div>
                                    <div class="d-block">
                                        <a class="align-top drop-text2">student</a>
                                    </div>
                                </div>
                                <div class="col-4 p-0 pr-md-2 text-center">
                                    <a href="#"><i class="fas fa-user-check pl-1 icons1 d-inline"></i></a>
                                    <a href="#"><i class="fas fa-user-times pl-1 icons1 d-inline"></i></a>
                                </div>
                            </div>
                            <div class="link-text text-center pt-3">
                                <a href="#">More &#8594;
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row container1 mt-4">
                    <div class="col md-12">
                        <div>
                            <h6 class="py-3 blue"><strong>Page Suggestions</strong></h6>
                        </div>
                        <div class="pb-2">
                            <div class="row">
                                <div class="col-3 p-0 text-center">
                                    <a href="#"><img src="download.jpg" alt="Avatar"
                                        class="avatar-dropdown"></a>
                                </div>
                                <div class="col-5 p-0">
                                    <div class="d-block">
                                        <a class="align-bottom drop-text1">Alyssa Perry</a>
                                    </div>
                                    <div class="d-block">
                                        <a class="align-top drop-text2">student</a>
                                    </div>
                                </div>
                                <div class="col-4 p-0 pr-md-2 text-center">
                                    <a href="#"><i class="fas fa-check-circle pl-1 icons1 d-inline"></i></a>
                                    <a href="#"><i class="fas fa-times-circle pl-1 icons1 d-inline"></i></a>
                                </div>
                            </div>
                            <div class="row pt-2">
                                <div class="col-3 p-0 text-center">
                                    <a href="#"><img src="download.jpg" alt="Avatar"
                                        class="avatar-dropdown"></a>
                                </div>
                                <div class="col-5 p-0">
                                    <div class="d-block">
                                        <a class="align-bottom drop-text1">Alyssa Perry</a>
                                    </div>
                                    <div class="d-block">
                                        <a class="align-top drop-text2">student</a>
                                    </div>
                                </div>
                                <div class="col-4 p-0 pr-md-2 text-center">
                                    <a href="#"><i class="fas fa-check-circle pl-1 icons1 d-inline"></i></a>
                                    <a href="#"><i class="fas fa-times-circle pl-1 icons1 d-inline"></i></a>
                                </div>
                            </div>
                            <div class="row pt-2">
                                <div class="col-3 p-0 text-center">
                                    <a href="#"><img src="download.jpg" alt="Avatar"
                                        class="avatar-dropdown"></a>
                                </div>
                                <div class="col-5 p-0">
                                    <div class="d-block">
                                        <a class="align-bottom drop-text1">Alyssa Perry</a>
                                    </div>
                                    <div class="d-block">
                                        <a class="align-top drop-text2">student</a>
                                    </div>
                                </div>
                                <div class="col-4 p-0 pr-md-2 text-center">
                                    <a href="#"><i class="fas fa-check-circle pl-1 icons1 d-inline"></i></a>
                                    <a href="#"><i class="fas fa-times-circle pl-1 icons1 d-inline"></i></a>
                                </div>
                            </div>
                            <div class="link-text text-center pt-3">
                                <a href="#">More &#8594;
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row container1 mt-4">
                    <div class="col md-12">
                        <div>
                            <h6 class="py-3 blue"><strong>Institute Suggestions</strong></h6>
                        </div>
                        <div class="pb-2">
                            <div class="row">
                                <div class="col-3 p-0 text-center">
                                    <a href="#"><img src="download.jpg" alt="Avatar"
                                        class="avatar-dropdown"></a>
                                </div>
                                <div class="col-5 p-0">
                                    <div class="d-block">
                                        <a class="drop-text1">ABC Institute</a>
                                    </div>
                                    
                                </div>
                                <div class="col-4 p-0 pr-md-2 text-center">
                                    <a href="#"><i class="fas fa-check-circle pl-1 icons1 d-inline"></i></a>
                                    <a href="#"><i class="fas fa-times-circle pl-1 icons1 d-inline"></i></a>
                                </div>
                            </div>
                            <div class="row pt-3">
                                <div class="col-3 p-0 text-center">
                                    <a href="#"><img src="download.jpg" alt="Avatar"
                                        class="avatar-dropdown"></a>
                                </div>
                                <div class="col-5 p-0">
                                    <div class="d-block">
                                        <a class="drop-text1">ABC Institute</a>
                                    </div>
                                </div>
                                <div class="col-4 p-0 pr-md-2 text-center">
                                    <a href="#"><i class="fas fa-check-circle pl-1 icons1 d-inline"></i></a>
                                    <a href="#"><i class="fas fa-times-circle pl-1 icons1 d-inline"></i></a>
                                </div>
                            </div>
                            <div class="row pt-3">
                                <div class="col-3 p-0 text-center">
                                    <a href="#"><img src="download.jpg" alt="Avatar"
                                        class="avatar-dropdown"></a>
                                </div>
                                <div class="col-5 p-0">
                                    <div class="d-block">
                                        <a class="drop-text1">ABC Institute</a>
                                    </div>
                                </div>
                                <div class="col-4 p-0 pr-md-2 text-center">
                                    <a href="#"><i class="fas fa-check-circle pl-1 icons1 d-inline"></i></a>
                                    <a href="#"><i class="fas fa-times-circle pl-1 icons1 d-inline"></i></a>
                                </div>
                            </div>
                            <div class="link-text text-center pt-3">
                                <a href="#">More &#8594;
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data () {
            return {
              posts: null
            }
        },
        mounted () {
            axios.get('/posts')
              .then(response => {
          // console.log(response.data.data);
          this.posts = response.data.data
        })
        },

        methods: {
            publish: function (event) {
              
                var newPost = {
                                caption:'New post published, please like,subscribe and share',
                                comments:'50',
                                created_at:'2020-05-15 08:15:15',
                                deleted_at:'',
                                email:'rizwanhiroli@gmail.com',
                                email_verified_at:null,
                                id:'5',
                                likes:'5',
                                media:'img3.jpeg',
                                name:'John Doe',
                                password:null,
                                remember_token:null,
                                shares:'10',
                                updated_at:'somew',
                                user_id:1,views:50
                            };

              this.posts.splice(0, 0, newPost);  
              console.log(this.posts);
              
            


            }
        },
    }
</script>
