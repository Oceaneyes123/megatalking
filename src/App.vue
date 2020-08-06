<template>
  <div id="app">
    <v-app>
      <v-card
        tile
        height="75"
        width="100%"
        style="position:fixed;top:0;z-index:100"
      >
        <v-container class="d-flex flex-row">
          <v-card flat tile color="#00000000">
            <v-img
              @click="$router.push('/')"
              contain
              src="../src/assets/logo.jpg"
              width="100"
              class="subheading"
            ></v-img>
          </v-card>
          <v-spacer></v-spacer>
          <v-card flat class="d-flex align-center mr-5" color="#00000000">
            <div class="mr-6 subheading">커리큘럼</div>
            <div class="mr-6 subheading">레벨테스트</div>
            <div class="mr-6 subheading" @click="$router.push('/enrollment')">
              수강신청
            </div>
            <div class="mr-8 subheading">마이페이지</div>
            <div class="mr-4 subheading orange--text text--lighten-1">KR</div>
            <div class="mr-6 subheading">EN</div>
            <div class="mr-6 subheading">
              <a>로그인</a>
            </div>
          </v-card>
        </v-container>
      </v-card>

      <router-view></router-view>

      <v-card
        style="position:absolute;bottom:0;width:100%; left:50%;transform:translateX(-50%)"
        max-width="1000"
        class="mx-auto"
        color="#00000000"
        flat
      >
        <v-container>
          <v-row no-gutters>
            <v-col cols="12" md="3">
              <v-container>
                <v-row>
                  <div class="mb-4">고객센터 1688-5705</div>
                  <div class="caption text--secondary">
                    (평일 오전 9시~18시)
                  </div>
                </v-row>
                <v-row style="margin-top:150px">
                  <v-card color="#00000000" flat>
                    <v-img
                      @click="$router.push('/')"
                      contain
                      src="../src/assets/logo.jpg"
                      width="150"
                      class="subheading"
                    ></v-img>
                  </v-card>
                </v-row>
              </v-container>
            </v-col>
            <v-col cols="12" md="5">
              <v-container>
                <v-row>
                  <div class="mb-4">계좌번호 안내</div>
                </v-row>
                <v-row>
                  <div style="color:#cb5413" class="caption">
                    예금주 (주)유에듀케이션
                  </div>
                </v-row>
                <v-row class="mt-5">
                  <div class="caption text--secondary">
                    국민은행 466490-60-194511
                  </div>
                </v-row>
                <v-row>
                  <div class="caption text--secondary">
                    우리은행 605-747180-18892
                  </div>
                </v-row>
                <v-row>
                  <div class="caption text--secondary">
                    신한은행 562-01572-559672
                  </div>
                </v-row>
                <v-row>
                  <div class="caption text--secondary">
                    씨티은행 750-10229-91401
                  </div>
                </v-row>
                <v-row>
                  <div class="caption text--secondary">
                    농협 790007-52-578681
                  </div>
                </v-row>
                <v-row class="caption mt-10 text--secondary">
                  <div class="mr-3">(주)유에듀케이션</div>
                  <div class="mr-3">대표 정원석</div>
                  <div>사업자등록번호 124-87-33297</div>
                  <div>주소 경기 수원시 팔달구 인계동 1135-6 4층</div>
                </v-row>
              </v-container>
            </v-col>
            <v-col>
              <v-container class="text--secondary">
                <v-row>
                  <div style="letter-spacing:5px">
                    FOLLOW US
                  </div>
                </v-row>
                <v-row>
                  <v-card class="d-flex flex-row mt-5" color="#00000000" flat>
                    <v-img
                      src="../src/assets/fkor.png"
                      width="50"
                      class="mr-5"
                    ></v-img>
                    <v-img
                      src="../src/assets/fa.png"
                      width="50"
                      class="mr-5"
                    ></v-img>
                    <v-img
                      src="../src/assets/inst.png"
                      width="50"
                      class="mr-5"
                    ></v-img>
                    <v-img src="../src/assets/tw.png" width="50"></v-img>
                  </v-card>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-app>
  </div>
</template>

<style scoped>
.subheading {
  cursor: pointer;
}
</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.h1 {
  font-weight: 300;
  font-size: 6rem;
  letter-spacing: -0.09375rem;
}
.h2 {
  font-weight: 300;
  font-size: 3.75rem;
  letter-spacing: -0.03125rem;
}
.h3 {
  font-weight: 400;
  font-size: 3rem;
  letter-spacing: normal;
}
.h4 {
  font-weight: 400;
  font-size: 2.125rem;
  letter-spacing: -0.015625remm;
}
.h5 {
  font-weight: 400;
  font-size: 1.5rem;
  letter-spacing: normal;
}
.h6 {
  font-weight: 500;
  font-size: 1.25rem;
  letter-spacing: 0.009375rem;
}
</style>
