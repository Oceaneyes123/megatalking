<template>
  <v-app>
    <v-container class="px-0 py-0 mx-0"></v-container>
    <v-card tile color="#344051" class="text-center">
      <v-img src="../assets/bg.jpg" width="100%" class="text-center pa-3">
        <div
          class="h3 font-weight-bold white--text mb-5"
          style="margin-top:200px"
        >
          무조건 듣기만하는 영어 회화?
        </div>
        <div class="white--text title mb-10">
          20대의 가장 큰 고민, 스펙과 영어! 값비싼 어학연수, 이젠 온라인으로
          즐기세요.
          <br />
          <br />뉴욕의 각 명소를 여행하며 모은 인터뷰를 통해 현지표현을 그대로!
          <br />총 20강좌로 이루어진 뉴욕라이브 잉글리쉬로 생생한
          뉴욕을느껴보세요!
          <br />
          <br />전화/화상영어로 함깨 학습할 수도 있고, 컨텐츠로 수강 할 수도
          있습니다.
        </div>
        <v-btn class="rounded-xl pa-8 title" color="primary"
          >뉴욕 스피킹 바로가기</v-btn
        >
        <v-container style="max-width:1000px;margin-top:90px">
          <v-card class="rounded-xl" elevation="7" width="100%">
            <v-row class="px-10">
              <v-col cols="12" sm="4">
                <v-card class="pt-10" flat color="#00000000">
                  <div class="mb-5 font-weight-bold">플립러닝 Push</div>
                  <v-icon class="mb-3" size="80">contact_mail</v-icon>
                  <div class="caption">
                    <v-icon color="#00aff0">fab fa-skype</v-icon>
                    화상영어 서비스
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card class="pt-10" flat>
                  <div class="mb-5 font-weight-bold">수업 녹음파일 전송</div>
                  <v-icon class="mb-3" size="80">video_label</v-icon>
                  <div class="caption">수업 피드백 및 복습 자료</div>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card class="pt-10" flat color="#00000000">
                  <div class="mb-5 font-weight-bold">강사 평가점수</div>
                  <div class="h6 mb-6">
                    <span class="font-weight-bold h4 mr-2">4.8</span>
                    <span style="color:#7e7e7e">/5.0</span>
                  </div>
                  <v-rating
                    readonly
                    v-model="rating"
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    empty-icon="$ratingFull"
                    half-increments
                    hover
                  ></v-rating>
                </v-card>
              </v-col>
            </v-row>
            <!--row 1 -->
            <v-card
              flat
              class="mt-10 mx-auto"
              max-width="700"
              style="position:relative;margin-bottom:100px"
            >
              <v-card
                class="pt-10 pl-10 text-left pb-5 rounded-xl"
                width="90%"
                color="#f1f1f1"
              >
                <div class="h4 font-weight-bold mb-7">나를 아는 영어</div>
                <div style="color:#b7b7b7;max-width:250px">
                  <div class="mb-5">
                    레벨테스트 부터 꼼꼼하게, 1차 예습, 수업, 3차 복습, 4차 영작
                    체계적인 학습관리, 알림 서비스까지!
                  </div>
                  <div>
                    자 연 스 럽 게 스며드는 영어회화,
                    <span style="color:#df5d24">메가토킹</span>은다릅니다.
                  </div>
                </div>
              </v-card>
              <v-card
                width="300"
                height="300"
                color="#e9c5b1"
                style="position:absolute;right:25px;bottom:-70px"
                class="rounded-xl"
                elevation="5"
              >
                <v-img
                  src="../assets/girl2.png"
                  width="1000"
                  style="transform: scale(1.3);position: absolute;bottom:33px"
                ></v-img>
              </v-card>
            </v-card>

            <!--row 2-->
            <v-card
              flat
              class="mt-10 mx-auto"
              max-width="700"
              style="position:relative;margin-bottom:100px"
            >
              <v-card
                class="pt-10 pr-10 ml-auto rounded-xl d-flex"
                width="100%"
                color="#f1f1f1"
              >
                <v-img
                  class="rounded-xl"
                  width="350"
                  position="50%"
                  src="../assets/girl.png"
                >
                </v-img>
                <div
                  style="color:#b7b7b7;max-width:250px"
                  class="ml-auto text-left"
                >
                  <div class="h4 font-weight-bold mb-7" style="color:#000">
                    맞춤형 시간표
                  </div>
                  <div class="mb-5">
                    직접 방문하지 않아도 언제, 어디서나 전화통화로 진행되는
                    레벨테스트를 통해 맞춤형 영어를 배울 수 있습니다.
                  </div>
                  <div
                    class="title font-weight-bold font-italic"
                    style="color:#b34013"
                  >
                    레벨테스트 하러가기 >
                  </div>
                </div>
              </v-card>
            </v-card>

            <!--row 3 -->
            <v-card
              flat
              class="mt-10 mx-auto"
              max-width="700"
              style="position:relative;margin-bottom:100px"
            >
              <v-card
                class="pt-10 pl-10 text-left pb-5 rounded-xl"
                width="100%"
                color="#f1f1f1"
              >
                <div class="h4 font-weight-bold mb-7" style="color:#70689f">
                  35,000개
                  <br />품격있는 컨텐츠
                </div>
                <div style="color:#b7b7b7;max-width:250px">
                  <div class="mb-5">
                    프리토킹, 비지니스, 면접영어, 여행, 영자신문 등 35,000개의
                    콘텐츠로 즐겨요.
                  </div>
                  <div
                    class="title font-weight-bold font-italic"
                    style="color:#b34013"
                  >
                    커리큘럼 자세히보기 >
                  </div>
                </div>
              </v-card>
            </v-card>

            <!-- grid -->
            <v-container style="max-width:800px; ">
              <v-row style="margin-bottom:200px">
                <v-col cols="4" class="px-0">
                  <v-card
                    max-width="200"
                    class="rounded-xl mx-auto"
                    style="position:relative"
                  >
                    <v-img
                      width="100%"
                      height="250"
                      eager
                      src="https://marketplace.canva.com/MADGxguiG6s/4/screen_2x/canva-woman-using-a-smartphone-while-fronting-a-macbook-pro-and-black-ipad-MADGxguiG6s.jpg"
                    ></v-img>
                    <v-card
                      style="position:absolute;bottom:-100px;width:80%;left: 50%; transform: translateX(-50%)"
                      class="pa-2 text-center rounded-xl"
                    >
                      <div class="title font-weight-bold">플립러닝 Push</div>
                      <div class="caption mb-3" style="color:#b7b7b7">
                        <v-icon color="#00aff0" small>fab fa-skype</v-icon>
                        화상영어 서비스
                      </div>
                      <div class="caption mb-5" style="color:#b7b7b7">
                        플립러닝 예습자료,
                        <br />카톡으로 보내드려요.
                      </div>
                      <v-btn
                        class="rounded-lg caption white--text"
                        color="#5a55a1"
                        >수강신청 바로가기</v-btn
                      >
                    </v-card>
                  </v-card>
                </v-col>
                <v-col cols="4" class="px-0">
                  <v-card max-width="200" class="rounded-xl mx-auto">
                    <v-img
                      width="100%"
                      height="250"
                      src="https://marketplace.canva.com/1rlcg/MADyRR1rlcg/1/s2/canva-man-and-woman-sitting-facing-book-MADyRR1rlcg.jpg"
                    ></v-img>
                    <v-card
                      style="position:absolute;bottom:-100px;width:80%;left: 50%; transform: translateX(-50%)"
                      class="pa-2 text-center rounded-xl"
                    >
                      <div class="font-weight-black subheading mb-3 mt-1">
                        생생한 수강후기
                      </div>
                      <div class="caption mb-5" style="color:#b7b7b7">
                        회원님이 작성한 후기를 보고 나에게 적합한 수업 유형과
                        난이도를 찾을 수 있어요.
                      </div>
                      <v-btn
                        class="rounded-lg caption white--text"
                        color="#5a55a1"
                        >게시판 바로가기</v-btn
                      >
                    </v-card>
                  </v-card>
                </v-col>
                <v-col cols="4" class="px-0">
                  <v-card max-width="200" class="rounded-xl mx-auto">
                    <v-img
                      width="100%"
                      height="250"
                      src="https://marketplace.canva.com/MADGyejemqw/4/screen_2x/canva-imac-turned-on-MADGyejemqw.jpg"
                    ></v-img>
                    <v-card
                      style="position:absolute;bottom:-100px;width:80%;left: 50%; transform: translateX(-50%)"
                      class="pa-2 text-center rounded-xl"
                    >
                      <div class="font-weight-bold title mb-3">
                        영작 UPGRADE
                      </div>
                      <div class="caption mb-5" style="color:#b7b7b7">
                        수업 끝나고 바로 바로 더 나은 표현, 녹음파일 제공 쉽게
                        영어를 배울 수있습니다. !
                      </div>
                      <v-btn
                        class="rounded-lg caption white--text"
                        color="#5a55a1"
                        >강의실 바로가기</v-btn
                      >
                    </v-card>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-container>
      </v-img>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      rating: 4.8
    };
  }
};
</script>
