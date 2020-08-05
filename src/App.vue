<template>
  <div id="app">
    <v-app>
      <v-card tile height="75" width="100%">
        <v-container class="d-flex flex-row">
          <v-card flat tile color="#00000000">
            <v-img contain src="../src/assets/logo.png" width="50"></v-img>
          </v-card>
          <v-spacer></v-spacer>
          <v-card flat class="d-flex align-center mr-5" color="#00000000">
            <div class="mr-4 subheading">커리큘럼</div>
            <div class="mr-4 subheading">레벨테스트</div>
            <div class="mr-4 subheading">수강신청</div>
            <div class="mr-8 subheading">마이페이지</div>
            <div class="mr-4 subheading orange--text text--lighten-1">KR</div>
            <div class="mr-4 subheading">EN</div>
            <div class="mr-4 subheading">
              <a>로그인</a>
            </div>
          </v-card>
        </v-container>
      </v-card>

      <router-view />
    </v-app>
  </div>
</template>

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
