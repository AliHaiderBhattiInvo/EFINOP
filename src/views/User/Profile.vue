<template>
  <b-container fluid>
    <b-row>
      <b-col sm="12">
        <iq-card body-class=" profile-page p-0">
          <template v-slot:body>
            <div class="profile-header">
              <div class="cover-container">
                <b-img v-bind:src="user.background" alt="profile-bg" rounded fluid class="w-100" />
                <ul class="header-nav d-flex flex-wrap justify-end p-0 m-0">
                  <li>
                    <b-link href="javascript:void(0);"><i class="ri-pencil-line"></i></b-link>
                  </li>
                  <li>
                    <b-link href="javascript:void(0);"><i class="ri-settings-4-line"></i></b-link>
                  </li>
                </ul>
              </div>
              <div class="user-detail text-center mb-3">
                <div class="profile-img">
                  <img v-bind:src="user.profile" alt="profile-img" class="avatar-130 img-fluid" />
                </div>
                <div class="profile-detail">
                  <h3 class="">Barry Tech</h3>
                </div>
              </div>
              <div class="profile-info p-4 d-flex align-items-center justify-content-between position-relative">
                <div class="social-links">
                  <ul class="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                    <li class="text-center pr-3" v-for="(item, index) in iconData" :key="index">
                      <a href="#"><img v-bind:src="item.image" :alt="item.alter" class="img-fluid rounded" /></a>
                    </li>
                  </ul>
                </div>
                <div class="social-info">
                  <ul class="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                    <li class="text-center pl-3">
                      <h6>Posts</h6>
                      <p class="mb-0">690</p>
                    </li>
                    <li class="text-center pl-3">
                      <h6>Followers</h6>
                      <p class="mb-0">206</p>
                    </li>
                    <li class="text-center pl-3">
                      <h6>Following</h6>
                      <p class="mb-0">100</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col sm="12">
        <b-row>
          <b-col lg="4">
            <iq-card>
              <template v-slot:body>
                <a href="#"><span class="badge badge-pill badge-primary font-weight-normal ml-auto mr-1"><i
                      class="ri-star-line"></i></span> 27 Items for yoou</a>
              </template>
            </iq-card>
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">Life Event</h4>
              </template>
              <template v-slot:headerAction>
                <p class="m-0"><a href="javacsript:void();"> Create </a></p>
              </template>
              <template v-slot:body>
                <b-row>
                  <b-col sm="12" v-for="(item, index) in lifeEvent" :key="index">
                    <div class="event-post position-relative">
                      <a href="javascript:void();"><img :src="item.image" alt="gallary-image"
                          class="img-fluid rounded"></a>
                      <div class="job-icon-position">
                        <div class="job-icon bg-primary p-2 d-inline-block rounded"><i class="ri-briefcase-line"></i>
                        </div>
                      </div>
                      <div class="iq-card-body text-center p-2">
                        <h5>Started New Job at Themeforest</h5>
                        <p>January 24, 2019</p>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </template>
            </iq-card>
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">Photos</h4>
              </template>
              <template v-slot:headerAction>
                <p class="m-0">Add Photo</p>
              </template>
              <template v-slot:body>
                <ul class="profile-img-gallary d-flex flex-wrap p-0 m-0">
                  <li v-for="(item,index) in galary" :key="index" class="col-md-4 col-6 pl-1 pr-0 pb-1">
                    <b-link :href="item.href">
                      <b-img :src="item.image" alt="gallary-image" fluid />
                    </b-link>
                  </li>
                </ul>
              </template>
            </iq-card>
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">Friends</h4>
              </template>
              <template v-slot:headerAction>
                <p class="m-0"><a href="javacsript:void();">Add New </a></p>
              </template>
              <template v-slot:body>
                <ul class="profile-img-gallary d-flex flex-wrap p-0 m-0">
                  <li class="col-md-4 col-6 pl-2 pr-0 pb-3" v-for="(item, index) in friends" :key="index">
                    <a href="javascript:void();">
                      <img :src="item.image" alt="gallary-image" class="img-fluid w-100" />
                    </a>
                    <h6 class="mt-2">{{ item.name }}</h6>
                  </li>
                </ul>
              </template>
            </iq-card>
          </b-col>
          <b-col lg="8">
            <iq-card id="post-modal-data">
              <template v-slot:headerTitle>
                <h4 class="card-title">Create Post</h4>
              </template>
              <template v-slot:body data-toggle="modal" data-target="#post-modal">
                <div class="d-flex align-items-center">
                  <div class="user-img">
                    <img :src="require('../../assets/images/user/1.jpg')" alt="userimg"
                      class="avatar-60 rounded img-fluid">
                  </div>
                  <form class="post-text ml-3 w-100" action="javascript:void();">
                    <input type="text" class="form-control rounded" placeholder="Write something here..."
                      style="border:none;">
                  </form>
                </div>
                <hr>
                <ul class="post-opt-block d-flex align-items-center list-inline m-0 p-0">
                  <li class="iq-bg-primary rounded p-2 pointer mr-3"><a href="#"></a><img
                      :src="require('../../assets/images/small/07.png')" alt="icon" class="img-fluid"> Photo/Video</li>
                  <li class="iq-bg-primary rounded p-2 pointer mr-3"><a href="#"></a><img
                      :src="require('../../assets/images/small/08.png')" alt="icon" class="img-fluid"> Tag Friend</li>
                  <li class="iq-bg-primary rounded p-2 pointer mr-3"><a href="#"></a><img
                      :src="require('../../assets/images/small/09.png')" alt="icon" class="img-fluid"> Feeling/Activity
                  </li>
                  <li class="iq-bg-primary rounded p-2 pointer">
                    <div class="iq-card-header-toolbar d-flex align-items-center">
                      <div class="dropdown">
                        <span class="dropdown-toggle" id="post-option" data-toggle="dropdown">
                          <i class="ri-more-fill"></i>
                        </span>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="post-option" style="">
                          <a class="dropdown-item" href="#">Check in</a>
                          <a class="dropdown-item" href="#">Live Video</a>
                          <a class="dropdown-item" href="#">Gif</a>
                          <a class="dropdown-item" href="#">Watch Party</a>
                          <a class="dropdown-item" href="#">Play with Friend</a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </template>
              <div class="modal fade" id="post-modal" tabindex="-1" role="dialog" aria-labelledby="post-modalLabel"
                aria-hidden="true" style="display: none;">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="post-modalLabel">Create Post</h5>
                      <button type="button" class="btn btn-secondary" data-dismiss="modal"><i
                          class="ri-close-fill"></i></button>
                    </div>
                    <div class="modal-body">
                      <div class="d-flex align-items-center">
                        <div class="user-img">
                          <img :src="require('../../assets/images/user/1.jpg')" alt="userimg" class="avatar-60 rounded img-fluid">
                        </div>
                        <form class="post-text ml-3 w-100" action="javascript:void();">
                          <input type="text" class="form-control rounded" placeholder="Write something here..."
                            style="border:none;">
                        </form>
                      </div>
                      <hr>
                      <ul class="d-flex flex-wrap align-items-center list-inline m-0 p-0">
                        <li class="col-md-6 mb-3">
                          <div class="iq-bg-primary rounded p-2 pointer mr-3"><a href="#"></a><img
                              :src="require('../../assets/images/small/07.png')" alt="icon" class="img-fluid"> Photo/Video</div>
                        </li>
                        <li class="col-md-6 mb-3">
                          <div class="iq-bg-primary rounded p-2 pointer mr-3"><a href="#"></a><img
                              :src="require('../../assets/images/small/08.png')" alt="icon" class="img-fluid"> Tag Friend</div>
                        </li>
                        <li class="col-md-6 mb-3">
                          <div class="iq-bg-primary rounded p-2 pointer mr-3"><a href="#"></a><img
                              :src="require('../../assets/images/small/09.png')" alt="icon" class="img-fluid"> Feeling/Activity</div>
                        </li>
                        <li class="col-md-6 mb-3">
                          <div class="iq-bg-primary rounded p-2 pointer mr-3"><a href="#"></a><img
                              :src="require('../../assets/images/small/10.png')" alt="icon" class="img-fluid"> Check in</div>
                        </li>
                        <li class="col-md-6 mb-3">
                          <div class="iq-bg-primary rounded p-2 pointer mr-3"><a href="#"></a><img
                              :src="require('../../assets/images/small/11.png')" alt="icon" class="img-fluid"> Live Video</div>
                        </li>
                        <li class="col-md-6 mb-3">
                          <div class="iq-bg-primary rounded p-2 pointer mr-3"><a href="#"></a><img
                              :src="require('../../assets/images/small/12.png')" alt="icon" class="img-fluid"> Gif</div>
                        </li>
                        <li class="col-md-6 mb-3">
                          <div class="iq-bg-primary rounded p-2 pointer mr-3"><a href="#"></a><img
                              :src="require('../../assets/images/small/13.png')" alt="icon" class="img-fluid"> Watch Party</div>
                        </li>
                        <li class="col-md-6 mb-3">
                          <div class="iq-bg-primary rounded p-2 pointer mr-3"><a href="#"></a><img
                              :src="require('../../assets/images/small/14.png')" alt="icon" class="img-fluid"> Play with Friends</div>
                        </li>
                      </ul>
                      <hr>
                      <div class="other-option">
                        <div class="d-flex align-items-center justify-content-between">
                          <div class="d-flex align-items-center">
                            <div class="user-img mr-3">
                              <img :src="require('../../assets/images/user/1.jpg')" alt="userimg" class="avatar-60 rounded img-fluid">
                            </div>
                            <h6>Your Story</h6>
                          </div>
                          <div class="iq-card-post-toolbar">
                            <div class="dropdown">
                              <span class="dropdown-toggle" id="postdata-1" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false" role="button">
                                <span class="btn btn-primary">Friend</span>
                              </span>
                              <div class="dropdown-menu m-0 p-0" aria-labelledby="postdata-1" style="">
                                <a class="dropdown-item p-3" href="#">
                                  <div class="d-flex align-items-top">
                                    <div class="icon font-size-20"><i class="ri-save-line"></i></div>
                                    <div class="data ml-2">
                                      <h6>Public</h6>
                                      <p class="mb-0">Anyone on or off Facebook</p>
                                    </div>
                                  </div>
                                </a>
                                <a class="dropdown-item p-3" href="#">
                                  <div class="d-flex align-items-top">
                                    <div class="icon font-size-20"><i class="ri-close-circle-line"></i></div>
                                    <div class="data ml-2">
                                      <h6>Friends</h6>
                                      <p class="mb-0">Your Friend on facebook</p>
                                    </div>
                                  </div>
                                </a>
                                <a class="dropdown-item p-3" href="#">
                                  <div class="d-flex align-items-top">
                                    <div class="icon font-size-20"><i class="ri-user-unfollow-line"></i></div>
                                    <div class="data ml-2">
                                      <h6>Friends except</h6>
                                      <p class="mb-0">Don't show to some friends</p>
                                    </div>
                                  </div>
                                </a>
                                <a class="dropdown-item p-3" href="#">
                                  <div class="d-flex align-items-top">
                                    <div class="icon font-size-20"><i class="ri-notification-line"></i></div>
                                    <div class="data ml-2">
                                      <h6>Only Me</h6>
                                      <p class="mb-0">Only me</p>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button type="submit" class="btn btn-primary d-block w-100 mt-3">Post</button>
                    </div>
                  </div>
                </div>
              </div>
            </iq-card>
            <iq-card>
              <template v-slot:body>
                <div class="post-item">
                  <div class="user-post-data p-3">
                    <div class="d-flex flex-wrap">
                      <div class="media-support-user-img mr-3">
                        <img class="rounded img-fluid" :src="require('../../assets/images/user/1.jpg')" alt="">
                      </div>
                      <div class="media-support-info mt-2">
                        <h5 class="mb-0 d-inline-block"><a href="#" class="">Barry Tech</a></h5>
                        <p class="ml-1 mb-0 d-inline-block">Add New Post</p>
                        <p class="mb-0">3 hour ago</p>
                      </div>
                      <div class="iq-card-post-toolbar">
                        <div class="dropdown">
                          <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false" role="button">
                            <i class="ri-more-fill"></i>
                          </span>
                          <div class="dropdown-menu m-0 p-0">
                            <a class="dropdown-item p-3" href="#">
                              <div class="d-flex align-items-top">
                                <div class="icon font-size-20"><i class="ri-save-line"></i></div>
                                <div class="data ml-2">
                                  <h6>Save Post</h6>
                                  <p class="mb-0">Add this to your saved items</p>
                                </div>
                              </div>
                            </a>
                            <a class="dropdown-item p-3" href="#">
                              <div class="d-flex align-items-top">
                                <div class="icon font-size-20"><i class="ri-pencil-line"></i></div>
                                <div class="data ml-2">
                                  <h6>Edit Post</h6>
                                  <p class="mb-0">Update your post and saved items</p>
                                </div>
                              </div>
                            </a>
                            <a class="dropdown-item p-3" href="#">
                              <div class="d-flex align-items-top">
                                <div class="icon font-size-20"><i class="ri-close-circle-line"></i></div>
                                <div class="data ml-2">
                                  <h6>Hide From Timeline</h6>
                                  <p class="mb-0">See fewer posts like this.</p>
                                </div>
                              </div>
                            </a>
                            <a class="dropdown-item p-3" href="#">
                              <div class="d-flex align-items-top">
                                <div class="icon font-size-20"><i class="ri-delete-bin-7-line"></i></div>
                                <div class="data ml-2">
                                  <h6>Delete</h6>
                                  <p class="mb-0">Remove thids Post on Timeline</p>
                                </div>
                              </div>
                            </a>
                            <a class="dropdown-item p-3" href="#">
                              <div class="d-flex align-items-top">
                                <div class="icon font-size-20"><i class="ri-notification-line"></i></div>
                                <div class="data ml-2">
                                  <h6>Notifications</h6>
                                  <p class="mb-0">Turn on notifications for this post</p>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="user-post">
                    <a href="javascript:void();"><img :src="require('../../assets/images/page-img/p1.jpg')" alt="post-image"
                        class="img-fluid w-100" /></a>
                  </div>
                  <div class="comment-area mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="like-block position-relative d-flex align-items-center">
                        <div class="d-flex align-items-center">
                          <div class="like-data">
                            <div class="dropdown">
                              <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false" role="button">
                                <img :src="require('../../assets/images/icon/01.png')" class="img-fluid" alt="">
                              </span>
                              <div class="dropdown-menu">
                                <a class="ml-2 mr-2" href="#" data-toggle="tooltip" data-placement="top" title=""
                                  data-original-title="Like"><img :src="require('../../assets/images/icon/01.png')" class="img-fluid" alt=""></a>
                                <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title=""
                                  data-original-title="Love"><img :src="require('../../assets/images/icon/02.png')" class="img-fluid" alt=""></a>
                                <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title=""
                                  data-original-title="Happy"><img :src="require('../../assets/images/icon/03.png')" class="img-fluid"
                                    alt=""></a>
                                <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title=""
                                  data-original-title="HaHa"><img :src="require('../../assets/images/icon/04.png')" class="img-fluid" alt=""></a>
                                <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title=""
                                  data-original-title="Think"><img :src="require('../../assets/images/icon/05.png')" class="img-fluid"
                                    alt=""></a>
                                <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title=""
                                  data-original-title="Sade"><img :src="require('../../assets/images/icon/06.png')" class="img-fluid" alt=""></a>
                                <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title=""
                                  data-original-title="Lovely"><img :src="require('../../assets/images/icon/07.png')" class="img-fluid"
                                    alt=""></a>
                              </div>
                            </div>
                          </div>
                          <div class="total-like-block ml-2 mr-3">
                            <div class="dropdown">
                              <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false" role="button">
                                140 Likes
                              </span>
                              <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Max Emum</a>
                                <a class="dropdown-item" href="#">Bill Yerds</a>
                                <a class="dropdown-item" href="#">Hap E. Birthday</a>
                                <a class="dropdown-item" href="#">Tara Misu</a>
                                <a class="dropdown-item" href="#">Midge Itz</a>
                                <a class="dropdown-item" href="#">Sal Vidge</a>
                                <a class="dropdown-item" href="#">Other</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="total-comment-block">
                          <div class="dropdown">
                            <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                              aria-expanded="false" role="button">
                              20 Comment
                            </span>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="#">Max Emum</a>
                              <a class="dropdown-item" href="#">Bill Yerds</a>
                              <a class="dropdown-item" href="#">Hap E. Birthday</a>
                              <a class="dropdown-item" href="#">Tara Misu</a>
                              <a class="dropdown-item" href="#">Midge Itz</a>
                              <a class="dropdown-item" href="#">Sal Vidge</a>
                              <a class="dropdown-item" href="#">Other</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="share-block d-flex align-items-center feather-icon mr-3">
                        <a href="javascript:void();"><i class="ri-share-line"></i>
                          <span class="ml-1">99 Share</span></a>
                      </div>
                    </div>
                    <hr>
                    <ul class="post-comments p-0 m-0">
                      <li class="mb-2">
                        <div class="d-flex flex-wrap">
                          <div class="user-img">
                            <img :src="require('../../assets/images/user/02.jpg')" alt="userimg" class="avatar-35 rounded img-fluid">
                          </div>
                          <div class="comment-data-block ml-3">
                            <h6>Monty Carlo</h6>
                            <p class="mb-0">Lorem ipsum dolor sit amet</p>
                            <div class="d-flex flex-wrap align-items-center comment-activity">
                              <a href="javascript:void();">like</a>
                              <a href="javascript:void();">reply</a>
                              <a href="javascript:void();">translate</a>
                              <span> 5 minit </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex flex-wrap">
                          <div class="user-img">
                            <img :src="require('../../assets/images/user/03.jpg')" alt="userimg" class="avatar-35 rounded img-fluid">
                          </div>
                          <div class="comment-data-block ml-3">
                            <h6>Paul Molive</h6>
                            <p class="mb-0">Lorem ipsum dolor sit amet</p>
                            <div class="d-flex flex-wrap align-items-center comment-activity">
                              <a href="javascript:void();">like</a>
                              <a href="javascript:void();">reply</a>
                              <a href="javascript:void();">translate</a>
                              <span> 5 minit </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <form class="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
                      <input type="text" class="form-control rounded">
                      <div class="comment-attagement d-flex">
                        <a href="javascript:void();"><i class="ri-link mr-3"></i></a>
                        <a href="javascript:void();"><i class="ri-user-smile-line mr-3"></i></a>
                        <a href="javascript:void();"><i class="ri-camera-line mr-3"></i></a>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="post-item">
                  <div class="user-post-data p-3">
                    <div class="d-flex flex-wrap">
                      <div class="media-support-user-img mr-3">
                        <img class="rounded img-fluid" :src="require('../../assets/images/user/1.jpg')" alt="">
                      </div>
                      <div class="media-support-info mt-2">
                        <h5 class="mb-0 d-inline-block"><a href="#" class="">Barry Tech</a></h5>
                        <p class="ml-1 mb-0 d-inline-block">Share Anna Mull's Post</p>
                        <p class="mb-0">5 hour ago</p>
                      </div>
                      <div class="iq-card-post-toolbar">
                        <div class="dropdown">
                          <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false" role="button">
                            <i class="ri-more-fill"></i>
                          </span>
                          <div class="dropdown-menu m-0 p-0">
                            <a class="dropdown-item p-3" href="#">
                              <div class="d-flex align-items-top">
                                <div class="icon font-size-20"><i class="ri-save-line"></i></div>
                                <div class="data ml-2">
                                  <h6>Save Post</h6>
                                  <p class="mb-0">Add this to your saved items</p>
                                </div>
                              </div>
                            </a>
                            <a class="dropdown-item p-3" href="#">
                              <div class="d-flex align-items-top">
                                <div class="icon font-size-20"><i class="ri-pencil-line"></i></div>
                                <div class="data ml-2">
                                  <h6>Edit Post</h6>
                                  <p class="mb-0">Update your post and saved items</p>
                                </div>
                              </div>
                            </a>
                            <a class="dropdown-item p-3" href="#">
                              <div class="d-flex align-items-top">
                                <div class="icon font-size-20"><i class="ri-close-circle-line"></i></div>
                                <div class="data ml-2">
                                  <h6>Hide From Timeline</h6>
                                  <p class="mb-0">See fewer posts like this.</p>
                                </div>
                              </div>
                            </a>
                            <a class="dropdown-item p-3" href="#">
                              <div class="d-flex align-items-top">
                                <div class="icon font-size-20"><i class="ri-delete-bin-7-line"></i></div>
                                <div class="data ml-2">
                                  <h6>Delete</h6>
                                  <p class="mb-0">Remove thids Post on Timeline</p>
                                </div>
                              </div>
                            </a>
                            <a class="dropdown-item p-3" href="#">
                              <div class="d-flex align-items-top">
                                <div class="icon font-size-20"><i class="ri-notification-line"></i></div>
                                <div class="data ml-2">
                                  <h6>Notifications</h6>
                                  <p class="mb-0">Turn on notifications for this post</p>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="user-post">
                    <a href="javascript:void();"><img :src="require('../../assets/images/page-img/p2.jpg')" alt="post-image"
                        class="img-fluid w-100" /></a>
                  </div>
                  <div class="comment-area mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="like-block position-relative d-flex align-items-center">
                        <div class="d-flex align-items-center">
                          <div class="like-data">
                            <div class="dropdown">
                              <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false" role="button">
                                <img :src="require('../../assets/images/icon/01.png')" class="img-fluid" alt="">
                              </span>
                              <div class="dropdown-menu">
                                <a class="ml-2 mr-2" href="#" data-toggle="tooltip" data-placement="top" title=""
                                  data-original-title="Like"><img :src="require('../../assets/images/icon/01.png')" class="img-fluid" alt=""></a>
                                <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title=""
                                  data-original-title="Love"><img :src="require('../../assets/images/icon/02.png')" class="img-fluid" alt=""></a>
                                <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title=""
                                  data-original-title="Happy"><img :src="require('../../assets/images/icon/03.png')" class="img-fluid"
                                    alt=""></a>
                                <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title=""
                                  data-original-title="HaHa"><img :src="require('../../assets/images/icon/04.png')" class="img-fluid" alt=""></a>
                                <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title=""
                                  data-original-title="Think"><img :src="require('../../assets/images/icon/05.png')" class="img-fluid"
                                    alt=""></a>
                                <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title=""
                                  data-original-title="Sade"><img :src="require('../../assets/images/icon/06.png')" class="img-fluid" alt=""></a>
                                <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title=""
                                  data-original-title="Lovely"><img :src="require('../../assets/images/icon/07.png')" class="img-fluid"
                                    alt=""></a>
                              </div>
                            </div>
                          </div>
                          <div class="total-like-block ml-2 mr-3">
                            <div class="dropdown">
                              <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false" role="button">
                                140 Likes
                              </span>
                              <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Max Emum</a>
                                <a class="dropdown-item" href="#">Bill Yerds</a>
                                <a class="dropdown-item" href="#">Hap E. Birthday</a>
                                <a class="dropdown-item" href="#">Tara Misu</a>
                                <a class="dropdown-item" href="#">Midge Itz</a>
                                <a class="dropdown-item" href="#">Sal Vidge</a>
                                <a class="dropdown-item" href="#">Other</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="total-comment-block">
                          <div class="dropdown">
                            <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                              aria-expanded="false" role="button">
                              20 Comment
                            </span>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="#">Max Emum</a>
                              <a class="dropdown-item" href="#">Bill Yerds</a>
                              <a class="dropdown-item" href="#">Hap E. Birthday</a>
                              <a class="dropdown-item" href="#">Tara Misu</a>
                              <a class="dropdown-item" href="#">Midge Itz</a>
                              <a class="dropdown-item" href="#">Sal Vidge</a>
                              <a class="dropdown-item" href="#">Other</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="share-block d-flex align-items-center feather-icon mr-3">
                        <a href="javascript:void();"><i class="ri-share-line"></i>
                          <span class="ml-1">99 Share</span></a>
                      </div>
                    </div>
                    <hr>
                    <ul class="post-comments p-0 m-0">
                      <li class="mb-2">
                        <div class="d-flex flex-wrap">
                          <div class="user-img">
                            <img :src="require('../../assets/images/user/02.jpg')" alt="userimg" class="avatar-35 rounded img-fluid">
                          </div>
                          <div class="comment-data-block ml-3">
                            <h6>Monty Carlo</h6>
                            <p class="mb-0">Lorem ipsum dolor sit amet</p>
                            <div class="d-flex flex-wrap align-items-center comment-activity">
                              <a href="javascript:void();">like</a>
                              <a href="javascript:void();">reply</a>
                              <a href="javascript:void();">translate</a>
                              <span> 5 minit </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex flex-wrap">
                          <div class="user-img">
                            <img :src="require('../../assets/images/user/03.jpg')" alt="userimg" class="avatar-35 rounded img-fluid">
                          </div>
                          <div class="comment-data-block ml-3">
                            <h6>Paul Molive</h6>
                            <p class="mb-0">Lorem ipsum dolor sit amet</p>
                            <div class="d-flex flex-wrap align-items-center comment-activity">
                              <a href="javascript:void();">like</a>
                              <a href="javascript:void();">reply</a>
                              <a href="javascript:void();">translate</a>
                              <span> 5 minit </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <form class="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
                      <input type="text" class="form-control rounded">
                      <div class="comment-attagement d-flex">
                        <a href="javascript:void();"><i class="ri-link mr-3"></i></a>
                        <a href="javascript:void();"><i class="ri-user-smile-line mr-3"></i></a>
                        <a href="javascript:void();"><i class="ri-camera-line mr-3"></i></a>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="post-item">
                  <div class="user-post-data p-3">
                    <div class="d-flex flex-wrap">
                      <div class="media-support-user-img mr-3">
                        <img class="rounded img-fluid" :src="require('../../assets/images/user/1.jpg')" alt="">
                      </div>
                      <div class="media-support-info mt-2">
                        <h5 class="mb-0 d-inline-block"><a href="#" class="">Barry Tech</a></h5>
                        <p class="ml-1 mb-0 d-inline-block">Update his Status</p>
                        <p class="mb-0">7 hour ago</p>
                      </div>
                      <div class="iq-card-post-toolbar">
                        <div class="dropdown">
                          <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false" role="button">
                            <i class="ri-more-fill"></i>
                          </span>
                          <div class="dropdown-menu m-0 p-0">
                            <a class="dropdown-item p-3" href="#">
                              <div class="d-flex align-items-top">
                                <div class="icon font-size-20"><i class="ri-save-line"></i></div>
                                <div class="data ml-2">
                                  <h6>Save Post</h6>
                                  <p class="mb-0">Add this to your saved items</p>
                                </div>
                              </div>
                            </a>
                            <a class="dropdown-item p-3" href="#">
                              <div class="d-flex align-items-top">
                                <div class="icon font-size-20"><i class="ri-pencil-line"></i></div>
                                <div class="data ml-2">
                                  <h6>Edit Post</h6>
                                  <p class="mb-0">Update your post and saved items</p>
                                </div>
                              </div>
                            </a>
                            <a class="dropdown-item p-3" href="#">
                              <div class="d-flex align-items-top">
                                <div class="icon font-size-20"><i class="ri-close-circle-line"></i></div>
                                <div class="data ml-2">
                                  <h6>Hide From Timeline</h6>
                                  <p class="mb-0">See fewer posts like this.</p>
                                </div>
                              </div>
                            </a>
                            <a class="dropdown-item p-3" href="#">
                              <div class="d-flex align-items-top">
                                <div class="icon font-size-20"><i class="ri-delete-bin-7-line"></i></div>
                                <div class="data ml-2">
                                  <h6>Delete</h6>
                                  <p class="mb-0">Remove thids Post on Timeline</p>
                                </div>
                              </div>
                            </a>
                            <a class="dropdown-item p-3" href="#">
                              <div class="d-flex align-items-top">
                                <div class="icon font-size-20"><i class="ri-notification-line"></i></div>
                                <div class="data ml-2">
                                  <h6>Notifications</h6>
                                  <p class="mb-0">Turn on notifications for this post</p>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="user-post">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                  </div>
                  <div class="comment-area mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="like-block position-relative d-flex align-items-center">
                        <div class="d-flex align-items-center">
                          <div class="like-data">
                            <div class="dropdown">
                              <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false" role="button">
                                <img :src="require('../../assets/images/icon/01.png')" class="img-fluid" alt="">
                              </span>
                              <div class="dropdown-menu">
                                <a class="ml-2 mr-2" href="#" data-toggle="tooltip" data-placement="top" title=""
                                  data-original-title="Like"><img :src="require('../../assets/images/icon/01.png')" class="img-fluid" alt=""></a>
                                <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title=""
                                  data-original-title="Love"><img :src="require('../../assets/images/icon/02.png')" class="img-fluid" alt=""></a>
                                <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title=""
                                  data-original-title="Happy"><img :src="require('../../assets/images/icon/03.png')" class="img-fluid"
                                    alt=""></a>
                                <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title=""
                                  data-original-title="HaHa"><img :src="require('../../assets/images/icon/04.png')" class="img-fluid" alt=""></a>
                                <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title=""
                                  data-original-title="Think"><img :src="require('../../assets/images/icon/05.png')" class="img-fluid"
                                    alt=""></a>
                                <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title=""
                                  data-original-title="Sade"><img :src="require('../../assets/images/icon/06.png')" class="img-fluid" alt=""></a>
                                <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title=""
                                  data-original-title="Lovely"><img :src="require('../../assets/images/icon/07.png')" class="img-fluid"
                                    alt=""></a>
                              </div>
                            </div>
                          </div>
                          <div class="total-like-block ml-2 mr-3">
                            <div class="dropdown">
                              <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false" role="button">
                                140 Likes
                              </span>
                              <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Max Emum</a>
                                <a class="dropdown-item" href="#">Bill Yerds</a>
                                <a class="dropdown-item" href="#">Hap E. Birthday</a>
                                <a class="dropdown-item" href="#">Tara Misu</a>
                                <a class="dropdown-item" href="#">Midge Itz</a>
                                <a class="dropdown-item" href="#">Sal Vidge</a>
                                <a class="dropdown-item" href="#">Other</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="total-comment-block">
                          <div class="dropdown">
                            <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                              aria-expanded="false" role="button">
                              20 Comment
                            </span>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="#">Max Emum</a>
                              <a class="dropdown-item" href="#">Bill Yerds</a>
                              <a class="dropdown-item" href="#">Hap E. Birthday</a>
                              <a class="dropdown-item" href="#">Tara Misu</a>
                              <a class="dropdown-item" href="#">Midge Itz</a>
                              <a class="dropdown-item" href="#">Sal Vidge</a>
                              <a class="dropdown-item" href="#">Other</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="share-block d-flex align-items-center feather-icon mr-3">
                        <a href="javascript:void();"><i class="ri-share-line"></i>
                          <span class="ml-1">99 Share</span></a>
                      </div>
                    </div>
                    <hr>
                    <ul class="post-comments p-0 m-0">
                      <li class="mb-2">
                        <div class="d-flex flex-wrap">
                          <div class="user-img">
                            <img :src="require('../../assets/images/user/02.jpg')" alt="userimg" class="avatar-35 rounded img-fluid">
                          </div>
                          <div class="comment-data-block ml-3">
                            <h6>Monty Carlo</h6>
                            <p class="mb-0">Lorem ipsum dolor sit amet</p>
                            <div class="d-flex flex-wrap align-items-center comment-activity">
                              <a href="javascript:void();">like</a>
                              <a href="javascript:void();">reply</a>
                              <a href="javascript:void();">translate</a>
                              <span> 5 minit </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex flex-wrap">
                          <div class="user-img">
                            <img :src="require('../../assets/images/user/03.jpg')" alt="userimg" class="avatar-35 rounded img-fluid">
                          </div>
                          <div class="comment-data-block ml-3">
                            <h6>Paul Molive</h6>
                            <p class="mb-0">Lorem ipsum dolor sit amet</p>
                            <div class="d-flex flex-wrap align-items-center comment-activity">
                              <a href="javascript:void();">like</a>
                              <a href="javascript:void();">reply</a>
                              <a href="javascript:void();">translate</a>
                              <span> 5 minit </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <form class="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
                      <input type="text" class="form-control rounded">
                      <div class="comment-attagement d-flex">
                        <a href="javascript:void();"><i class="ri-link mr-3"></i></a>
                        <a href="javascript:void();"><i class="ri-user-smile-line mr-3"></i></a>
                        <a href="javascript:void();"><i class="ri-camera-line mr-3"></i></a>
                      </div>
                    </form>
                  </div>
                </div>
              </template>
            </iq-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12" class="text-center">
            <img :src="require('../../assets/images/page-img/page-load-loader.gif')" alt="loader" style="height: 100px;">
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { findash } from '../../config/pluginInit'
export default {
  name: 'Profile',
  mounted () {
    findash.index()
  },
  data () {
    return {
      user: {
        background: require('../../assets/images/page-img/profile-bg.jpg'),
        profile: require('../../assets/images/user/11.png'),
        name: 'Nik Jone',
        role: ' - Web designer',
        about: 'Lorem ipsum dolor sit amet, contur adipiscing elit.',
        email: 'nikjone@demoo.com',
        phone: '001 2351 256 12',
        location: 'USA',
        careated_date: '07 Jan 2020'
      },
      iconData: [
        {
          image: require('../../assets/images/icon/08.png'),
          alter: 'facebook'
        },
        {
          image: require('../../assets/images/icon/09.png'),
          alter: 'Twitter'
        },
        {
          image: require('../../assets/images/icon/10.png'),
          alter: 'Instagram'
        },
        {
          image: require('../../assets/images/icon/11.png'),
          alter: 'Google plus'
        },
        {
          image: require('../../assets/images/icon/12.png'),
          alter: 'You tube'
        },
        {
          image: require('../../assets/images/icon/13.png'),
          alter: 'linkedin'
        }
      ],
      lifeEvent: [
        {
          image: require('../../assets/images/page-img/34.png')
        },
        {
          image: require('../../assets/images/page-img/07.jpg')
        }
      ],
      friends: [
        {
          name: 'Anna Rexia',
          image: require('../../assets/images/user/05.jpg')
        },
        {
          name: 'Tara Zona',
          image: require('../../assets/images/user/06.jpg')
        },
        {
          name: 'Polly Tech',
          image: require('../../assets/images/user/07.jpg')
        },
        {
          name: 'Bill Emia',
          image: require('../../assets/images/user/08.jpg')
        },
        {
          name: 'Moe Fugga',
          image: require('../../assets/images/user/09.jpg')
        },
        {
          name: 'Hal Appeno',
          image: require('../../assets/images/user/10.jpg')
        },
        {
          name: 'Zack Lee',
          image: require('../../assets/images/user/05.jpg')
        },
        {
          name: 'Terry Aki',
          image: require('../../assets/images/user/06.jpg')
        },
        {
          name: 'Greta Life',
          image: require('../../assets/images/user/07.jpg')
        }
      ],
      galary: [
        {
          image: require('../../assets/images/page-img/g1.jpg'),
          href: 'javascript:void(0);'
        },
        {
          image: require('../../assets/images/page-img/g2.jpg'),
          href: 'javascript:void(0);'
        },
        {
          image: require('../../assets/images/page-img/g3.jpg'),
          href: 'javascript:void(0);'
        },
        {
          image: require('../../assets/images/page-img/g4.jpg'),
          href: 'javascript:void(0);'
        },
        {
          image: require('../../assets/images/page-img/g5.jpg'),
          href: 'javascript:void(0);'
        },
        {
          image: require('../../assets/images/page-img/g6.jpg'),
          href: 'javascript:void(0);'
        },
        {
          image: require('../../assets/images/page-img/g7.jpg'),
          href: 'javascript:void(0);'
        },
        {
          image: require('../../assets/images/page-img/g8.jpg'),
          href: 'javascript:void(0);'
        },
        {
          image: require('../../assets/images/page-img/g9.jpg'),
          href: 'javascript:void(0);'
        }
      ],
      timelineItems: [
        {
          color: 'primary',
          title: 'Client Login',
          right: '24 November 2019',
          description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
          child: {
            type: 'img',
            items: []
          }
        },
        {
          color: 'success',
          title: 'Scheduled Maintenance',
          right: '23 November 2019',
          description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
          child: {
            type: 'img',
            items: []
          }
        },
        {
          color: 'danger',
          title: 'Dev Meetup',
          right: '20 November 2019',
          description: 'Bonbon macaroon jelly <b-link href="">beans gummi</b-link> bears jelly lollipop apple',
          child: {
            type: 'img',
            items: [
              require('../../assets/images/user/user-05.jpg'),
              require('../../assets/images/user/user-06.jpg'),
              require('../../assets/images/user/user-07.jpg'),
              require('../../assets/images/user/user-08.jpg'),
              require('../../assets/images/user/user-09.jpg'),
              require('../../assets/images/user/user10.jpg')
            ]
          }
        },
        {
          color: 'primary',
          title: 'Client Call',
          right: '19 November 2019',
          description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
          child: {
            type: 'img',
            items: []
          }
        },
        {
          color: 'warning',
          title: 'Mega Event',
          right: '15 November 2019',
          description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
          child: {
            type: 'img',
            items: []
          }
        }
      ],
      userBio: [
        {
          title: 'Joined',
          description: 'November 15, 2012'
        },
        {
          title: 'Lives',
          description: 'United States of America'
        },
        {
          title: 'Email',
          description: '<a href="mailto:nikjone@gmail.com"> nikjone@gmail.com</a>'
        },
        {
          title: 'Url',
          description: '<a href="https://getbootstrap.com/docs/4.0/getting-started/introduction/" target="_blank"> www.bootstrap.com </a>'
        },
        {
          title: 'Contact',
          description: '<a href="tel:001 4544 565 456">(001) 4544 565 456</a>'
        }
      ],
      story: [
        {
          title: 'Web Design',
          time: '1 hour ago',
          image: require('../../assets/images/page-img/s1.jpg'),
          class: 'mb-4',
          isActive: 'active'
        },
        {
          title: 'App Design',
          time: '4 hour ago',
          image: require('../../assets/images/page-img/s2.jpg'),
          class: 'mb-4',
          isActive: ''
        },
        {
          title: 'Abstract Design',
          time: '9 hour ago',
          image: require('../../assets/images/page-img/s3.jpg'),
          class: '',
          isActive: ''
        }
      ],
      suggestions: [
        {
          name: 'Paul Molive',
          mutual_friend: '4 mutual friends',
          image: require('../../assets/images/user/user-01.jpg')
        },
        {
          name: 'Paul Molive',
          mutual_friend: '4 mutual friends',
          image: require('../../assets/images/user/user-01.jpg')
        },
        {
          name: 'Anna Mull',
          mutual_friend: '6 mutual friends',
          image: require('../../assets/images/user/user-02.jpg')
        },
        {
          name: 'Paige Turner',
          mutual_friend: '8 mutual friends',
          image: require('../../assets/images/user/user-03.jpg')
        },
        {
          name: 'Barb Ackue',
          mutual_friend: '1 mutual friends',
          image: require('../../assets/images/user/user-04.jpg')
        },
        {
          name: 'Greta Life',
          mutual_friend: '3 mutual friends',
          image: require('../../assets/images/user/user-05.jpg')
        },
        {
          name: 'Ira Membrit',
          mutual_friend: '12 mutual friends',
          image: require('../../assets/images/user/user-06.jpg')
        },
        {
          name: 'Pete Sariya',
          mutual_friend: '2 mutual friends',
          image: require('../../assets/images/user/user-07.jpg')
        }
      ],
      news: [
        {
          description: 'there is a meetup in your city on friday at 19:00.<a href="#">see details</a>'
        },
        {
          description: '20% off coupon on selected items at pharmaprix'
        }
      ],
      twitterFeed: [
        {
          image: require('../../assets/images/page-img/42.jpg'),
          name: 'UI/Ux Designer',
          description: 'Creativity Design'
        },
        {
          image: require('../../assets/images/page-img/43.jpg'),
          name: 'Marketing',
          description: 'Accounting'
        },
        {
          image: require('../../assets/images/page-img/44.jpg'),
          name: 'Web Developer',
          description: 'uniq Concept'
        },
        {
          image: require('../../assets/images/page-img/45.jpg'),
          name: 'Latest News',
          description: 'Line information'
        }
      ],
      recentPages: [
        {
          image: require('../../assets/images/page-img/46.jpg'),
          name: 'Food town'
        },
        {
          image: require('../../assets/images/page-img/47.jpg'),
          name: 'Touro Univercity'
        },
        {
          image: require('../../assets/images/page-img/48.jpg'),
          name: 'Moviehouse & Eatery'
        },
        {
          image: require('../../assets/images/page-img/49.jpg'),
          name: 'Coffee + Crisp'
        }
      ]
    }
  }
}

</script>
