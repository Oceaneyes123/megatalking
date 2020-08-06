<template>
  <v-app>
    <v-container fluid class="py-0 px-0">
      <v-card tile color="#8bb6f7" class="text-center pa-3">
        <div
          class="h4 font-weight-bold white--text mb-5"
          style="margin-top:200px"
        >
          수강 신청
        </div>
        <div class="h4 mb-5" style="color:#2564cb">
          “Anytime, Anywhere, Home Learn English.”
        </div>
        <div class="h5 mb-5" style="color:#5f8dd3">
          메가토킹은 새벽부터 밤까지, 회원님만을 위한 맞춤 강의를 제공합니다.
        </div>
        <v-container style="max-width:1000px;margin-top:90px">
          <v-card
            class="rounded-xl"
            elevation="7"
            width="100%"
            style="margin-bottom:500px"
          >
            <v-container class="px-0 py-0">
              <v-row no-gutters>
                <v-col cols="12" md="8">
                  <v-card
                    class="pl-10 pt-10 pr-8 rounded-xl"
                    flat
                    color="#fafafa"
                  >
                    <div class="h5 font-weight-bold text-left">수강 종류</div>
                    <v-container class="px-0 mt-7">
                      <v-row no-gutters class="mb-5">
                        <v-col cols="12" sm="6" class="text-left">
                          <div class="h5 font-weight-bold">전화로 할래요</div>
                          <div class="subheading">
                            <v-icon color="#5a55a1" style="font-size:20px"
                              >fas fa-phone-square-alt</v-icon
                            >
                            화성영어 서비스 제공
                          </div>
                        </v-col>
                        <v-col cols="12" sm="6" class="text-left">
                          <div
                            class="h5 font-weight-bold"
                            style="color:#4242a3"
                          >
                            화상으로 할래요.
                          </div>
                          <div class="subheading">
                            <v-icon color="#5a55a1" style="font-size:20px"
                              >fas fa-phone-square-alt</v-icon
                            >
                            스카이프 서비스 제공
                          </div>
                        </v-col>
                      </v-row>
                    </v-container>

                    <v-divider class="mr-10"></v-divider>

                    <div class="h5 font-weight-bold text-left mt-10 mb-10">
                      수업 선택
                    </div>
                    <v-tabs v-model="tab" vertical>
                      <v-tab v-for="(duration, i) in durations" :key="i">
                        {{ duration }}
                      </v-tab>
                      <v-tab-item v-for="(index, i) in 3" :key="i">
                        <v-card flat color="#f5f4f6">
                          <v-container class="pa-5 pa-sm-10">
                            <!-- frequency row-->
                            <v-row no-gutters justify="center" class="mb-3">
                              <v-col
                                cols="12"
                                sm="4"
                                v-for="(frequency, i) in frequncies"
                                :key="i"
                                class="px-2"
                              >
                                <v-btn
                                  class="rounded-lg"
                                  block
                                  depressed
                                  color="#FFFFFF"
                                >
                                  {{ frequency }}
                                </v-btn>
                              </v-col>
                            </v-row>
                            <div class="caption" style="color:#bdbdbd">
                              수업 횟수
                            </div>
                            <!-- days row-->
                            <v-row no-gutters justify="center" class="mt-10">
                              <v-col
                                cols="12"
                                sm="4"
                                v-for="(day, i) in days"
                                :key="i"
                                class="px-2 mb-3"
                              >
                                <v-btn
                                  class="rounded-lg"
                                  block
                                  depressed
                                  color="#FFFFFF"
                                >
                                  {{ day }}
                                </v-btn>
                              </v-col>
                            </v-row>
                            <div class="caption" style="color:#bdbdbd">
                              수업 날짜
                            </div>
                            <!-- period row-->
                            <v-row
                              no-gutters
                              justify="center"
                              class="mb-3 mt-10"
                            >
                              <v-col
                                cols="12"
                                sm="3"
                                v-for="(period, i) in periods"
                                :key="i"
                                class="px-2"
                              >
                                <v-btn
                                  class="rounded-lg"
                                  block
                                  depressed
                                  color="#FFFFFF"
                                >
                                  {{ period }}
                                </v-btn>
                              </v-col>
                            </v-row>
                            <div class="caption" style="color:#bdbdbd">
                              수강기간
                            </div>
                            <!-- book row-->
                            <v-row
                              no-gutters
                              justify="center"
                              class="mb-3 mt-10"
                              v-if="tab == 0"
                            >
                              <v-col
                                cols="12"
                                sm="3"
                                v-for="(book, i) in bookList10"
                                :key="i"
                                class="px-2 mb-2"
                              >
                                <v-btn
                                  height="100"
                                  class="rounded-lg px-0"
                                  block
                                  depressed
                                  color="#FFFFFF"
                                  :disabled="book.status == 'disabled'"
                                  style="display: unset; white-space: unset;line-break: strict;word-break: keep-all;"
                                >
                                  {{ book.text }}
                                </v-btn>
                              </v-col>
                            </v-row>
                            <v-row
                              no-gutters
                              justify="center"
                              class="mb-3 mt-10"
                              v-if="tab == 1"
                            >
                              <v-col
                                cols="12"
                                sm="3"
                                v-for="(book, i) in bookList20"
                                :key="i"
                                class="px-2 mb-2"
                              >
                                <v-btn
                                  height="100"
                                  class="rounded-lg px-0"
                                  block
                                  depressed
                                  color="#FFFFFF"
                                  :disabled="book.status == 'disabled'"
                                  style="display: unset; white-space: unset;line-break: strict;word-break: keep-all;"
                                >
                                  {{ book.text }}
                                </v-btn>
                              </v-col>
                            </v-row>
                            <v-row
                              no-gutters
                              justify="center"
                              class="mb-3 mt-10"
                              v-if="tab == 2"
                            >
                              <v-col
                                cols="12"
                                sm="3"
                                v-for="(book, i) in bookList30"
                                :key="i"
                                class="px-2 mb-2"
                              >
                                <v-btn
                                  height="100"
                                  class="rounded-lg px-0"
                                  block
                                  depressed
                                  color="#FFFFFF"
                                  :disabled="book.status == 'disabled'"
                                  style="display: unset; white-space: unset;line-break: strict;word-break: keep-all;"
                                >
                                  {{ book.text }}
                                </v-btn>
                              </v-col>
                            </v-row>
                            <div class="caption" style="color:#bdbdbd">
                              수업 유형
                            </div>
                          </v-container>
                        </v-card>
                      </v-tab-item>
                    </v-tabs>

                    <div class="h5 font-weight-bold text-left mt-10 mb-10">
                      수업 시간
                    </div>

                    <v-container class="pb-1">
                      <v-row no-gutters>
                        <v-col class="text-left" style="cursor:pointer;">
                          <span
                            style="cursor:pointer;color:#5a55a1"
                            @click="(currentZone = 0), setTime(6)"
                          >
                            프라임 </span
                          ><br />
                          <span class="caption" @click="currentZone = 0"
                            >6:00 - 10:00</span
                          >
                        </v-col>
                        <v-col class="text-left" style="cursor:pointer;">
                          <span
                            style="cursor:pointer;color:#5a55a1"
                            @click="(currentZone = 1), setTime(10)"
                          >
                            이코노미 </span
                          ><br />
                          <span class="caption" @click="currentZone = 1"
                            >10:00 - 5:00</span
                          >
                        </v-col>
                        <v-col class="text-left" style="cursor:pointer;">
                          <span
                            style="cursor:pointer;color:#5a55a1"
                            @click="(currentZone = 2), setTime(17)"
                          >
                            프라임 </span
                          ><br />
                          <span class="caption" @click="currentZone = 2"
                            >5:00 - 0:00</span
                          >
                        </v-col>
                      </v-row>
                    </v-container>
                    <v-divider
                      class="mt-0"
                      style="background-color: #222dc05F"
                    ></v-divider>
                    <v-card flat color="#f5f4f6" class="mb-5">
                      <v-tabs
                        grow
                        v-if="seeMore && currentZone == 0"
                        show-arrows
                        slider-color="#5a55a1"
                      >
                        <v-tab v-for="n in 4" :key="n" @click="setTime(n + 5)">
                          {{ n + 5 }}
                        </v-tab>
                      </v-tabs>
                      <v-tabs
                        grow
                        v-if="seeMore && currentZone == 1"
                        show-arrows
                        slider-color="#5a55a1"
                      >
                        <v-tab v-for="n in 7" :key="n" @click="setTime(n + 9)">
                          {{ n + 9 }}
                        </v-tab>
                      </v-tabs>
                      <v-tabs
                        grow
                        v-if="seeMore && currentZone == 2"
                        show-arrows
                        slider-color="#5a55a1"
                      >
                        <v-tab v-for="n in 7" :key="n" @click="setTime(n + 16)">
                          {{ n + 16 }}
                        </v-tab>
                      </v-tabs>
                      <v-container class="px-0">
                        <v-row no-gutters>
                          <v-col
                            cols="2"
                            v-for="(time, i) in timeList"
                            :key="i"
                          >
                            <v-btn depressed color="#FFF" class="rounded-lg">
                              {{ time }}
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                    <div
                      v-if="!seeMore"
                      @click="seeMore = true"
                      class="caption mb-5"
                      style="color:#bdbdbd"
                    >
                      시간표 전체보기 >
                    </div>
                  </v-card>
                </v-col>

                <v-col cols="12" md="4">
                  <v-card flat class="pt-10 rounded-xl">
                    <div class="h5 font-weight-bold">수강선택 요약</div>
                    <v-container class="mt-3 px-7 text-left">
                      <v-row no-gutters class="px-2">
                        <v-col cols="4">
                          수강코스
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col class="font-weight-bold">
                          비즈니스 과정
                        </v-col>
                      </v-row>
                      <v-divider class="mx-3 mb-4"></v-divider>
                      <v-row no-gutters class="px-2">
                        <v-col>
                          수강과정
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col class="font-weight-bold">
                          주2 화목 / 12주
                        </v-col>
                      </v-row>
                      <v-divider class="mx-3 mb-4"></v-divider>
                      <v-row no-gutters class="px-2">
                        <v-col>
                          시작일
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col class="font-weight-bold">
                          8/5
                        </v-col>
                      </v-row>
                      <v-divider class="mx-3"></v-divider>
                    </v-container>

                    <v-divider
                      style="margin-top:100px; margin-bottom:100px"
                      class="mx-7"
                    ></v-divider>

                    <div class="h5 font-weight-bold mb-5">결제 예정금액</div>

                    <v-container class="mt-3 px-7 text-left">
                      <v-row no-gutters class="px-2">
                        <v-col>
                          결제금액
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col class="font-weight-bold">
                          0
                        </v-col>
                      </v-row>
                      <v-divider class="mx-3 mb-4"></v-divider>
                      <v-row no-gutters class="px-2">
                        <v-col>
                          할인금액
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col class="font-weight-bold">
                          0
                        </v-col>
                      </v-row>
                      <v-divider class="mx-3 mb-4"></v-divider>
                      <v-row no-gutters class="px-2">
                        <v-col>
                          교재비
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col class="font-weight-bold">
                          0
                        </v-col>
                      </v-row>
                      <v-divider class="mx-3 mb-4"></v-divider>
                      <v-row no-gutters class="px-2">
                        <v-col>
                          총 할인금액
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col class="font-weight-bold">
                          0
                        </v-col>
                      </v-row>
                    </v-container>
                    <v-btn
                      color="#5a55a1"
                      class="rounded-lg white--text font-weight-bold"
                      style="margin-top:150px"
                    >
                      수업 신청하기
                    </v-btn>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-container>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
      durations: ["하루 10분", "하루 20분", "하루 30분"],
      frequncies: ["주2회 화목", "주3회 화목", "주5회 화목"],
      days: [],
      periods: ["4주", "12주", "6개월", "1년"],
      dateTime: new Date(),
      timeList: [],
      seeMore: false,
      currentZone: 0,
      bookList10: [
        {
          status: "enabled",
          text: "프리토킹 묻고 답하기",
          curriculum: "프리토킹",
          material: "묻고 답하기"
        },
        {
          status: "enabled",
          text: "프리토킹 \n 의견말하기",
          curriculum: "프리토킹",
          material: "의견말하기"
        },
        {
          status: "enabled",
          text: "프리토킹\n 사진묘사",
          curriculum: "프리토킹",
          material: "사진묘사"
        },
        {
          status: "enabled",
          text: "프리토킹\n 영자신문 (준비중)",
          curriculum: "프리토킹",
          material: "영자신문"
        },
        {
          status: "enabled",
          text: "일상&패턴\n 스피킹패턴",
          curriculum: "일상&패턴",
          material: "스피킹패턴"
        },
        {
          status: "disabled",
          text: "일상&패턴\n 문법패턴",
          curriculum: "일상&패턴",
          material: "문법패턴"
        },
        {
          status: "enabled",
          text: "일상&패턴\n 일상대화",
          curriculum: "일상&패턴",
          material: "일상대화"
        },
        {
          status: "disabled",
          text: "리딩&스피킹\n 퍼펙트리딩",
          curriculum: "리딩&스피킹",
          material: "퍼펙트리딩"
        },
        {
          status: "disabled",
          text: "리딩&스피킹\n 영자신문 (준비중)",
          curriculum: "리딩&스피킹",
          material: "영자신문"
        },
        {
          status: "disabled",
          text: "비지니스\n 인터뷰과정",
          curriculum: "비지니스",
          material: "인터뷰과정"
        },
        {
          status: "enabled",
          text: "비지니스\n 비지니스회화",
          curriculum: "비지니스",
          material: "비지니스회화"
        },
        {
          status: "enabled",
          text: "여행영어",
          curriculum: "여행영어",
          material: "여행영어"
        }
      ],

      bookList20: [
        {
          status: "enabled",
          text: "프리토킹 묻고 답하기",
          curriculum: "프리토킹",
          material: "묻고 답하기"
        },
        {
          status: "enabled",
          text: "프리토킹 \n 의견말하기",
          curriculum: "프리토킹",
          material: "의견말하기"
        },
        {
          status: "enabled",
          text: "프리토킹\n 사진묘사",
          curriculum: "프리토킹",
          material: "사진묘사"
        },
        {
          status: "enabled",
          text: "프리토킹\n 영자신문 (준비중)",
          curriculum: "프리토킹",
          material: "영자신문"
        },
        {
          status: "enabled",
          text: "일상&패턴\n 스피킹패턴",
          curriculum: "일상&패턴",
          material: "스피킹패턴"
        },
        {
          status: "disabled",
          text: "일상&패턴\n 문법패턴",
          curriculum: "일상&패턴",
          material: "문법패턴"
        },
        {
          status: "enabled",
          text: "일상&패턴\n 일상대화",
          curriculum: "일상&패턴",
          material: "일상대화"
        },
        {
          status: "enabled",
          text: "리딩&스피킹\n 퍼펙트리딩",
          curriculum: "리딩&스피킹",
          material: "퍼펙트리딩"
        },
        {
          status: "enabled",
          text: "리딩&스피킹\n 영자신문 (준비중)",
          curriculum: "리딩&스피킹",
          material: "영자신문"
        },
        {
          status: "enabled",
          text: "비지니스\n 인터뷰과정",
          curriculum: "비지니스",
          material: "인터뷰과정"
        },
        {
          status: "enabled",
          text: "비지니스\n 비지니스회화",
          curriculum: "비지니스",
          material: "비지니스회화"
        },
        {
          status: "enabled",
          text: "여행영어",
          curriculum: "여행영어",
          material: "여행영어"
        }
      ],

      bookList30: [
        {
          status: "enabled",
          text: "프리토킹 묻고 답하기",
          curriculum: "프리토킹",
          material: "묻고 답하기"
        },
        {
          status: "enabled",
          text: "프리토킹 \n 의견말하기",
          curriculum: "프리토킹",
          material: "의견말하기"
        },
        {
          status: "enabled",
          text: "프리토킹\n 사진묘사",
          curriculum: "프리토킹",
          material: "사진묘사"
        },
        {
          status: "enabled",
          text: "프리토킹\n 영자신문 (준비중)",
          curriculum: "프리토킹",
          material: "영자신문"
        },
        {
          status: "enabled",
          text: "일상&패턴\n 스피킹패턴",
          curriculum: "일상&패턴",
          material: "스피킹패턴"
        },
        {
          status: "enabled",
          text: "일상&패턴\n 문법패턴",
          curriculum: "일상&패턴",
          material: "문법패턴"
        },
        {
          status: "enabled",
          text: "일상&패턴\n 일상대화",
          curriculum: "일상&패턴",
          material: "일상대화"
        },
        {
          status: "enabled",
          text: "리딩&스피킹\n 퍼펙트리딩",
          curriculum: "리딩&스피킹",
          material: "퍼펙트리딩"
        },
        {
          status: "enabled",
          text: "리딩&스피킹\n 영자신문 (준비중)",
          curriculum: "리딩&스피킹",
          material: "영자신문"
        },
        {
          status: "enabled",
          text: "비지니스\n 인터뷰과정",
          curriculum: "비지니스",
          material: "인터뷰과정"
        },
        {
          status: "enabled",
          text: "비지니스\n 비지니스회화",
          curriculum: "비지니스",
          material: "비지니스회화"
        },
        {
          status: "enabled",
          text: "여행영어",
          curriculum: "여행영어",
          material: "여행영어"
        }
      ]
    };
  },

  watch: {},

  mounted() {
    for (var i = 1; i < 12; i++) {
      var today = new Date();
      var nextDates = new Date(today);
      nextDates.setDate(nextDates.getDate() + i);
      if (
        nextDates.getDay() != 6 &&
        nextDates.getDay() != 0 &&
        this.days.length < 6
      ) {
        this.days.push(this.formatDate(nextDates));
      }
    }

    this.timeList = [];
    this.setTime(6);
  },

  methods: {
    formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate();
      //year = d.getFullYear();

      if (day.length < 2) day = +day;

      return [month, day].join("/");
    },

    setTime(timeText) {
      this.timeList = [];
      this.dateTime.setHours(timeText);
      this.dateTime.setMinutes(0);

      for (var i = 0; i < 6; i++) {
        var nextTime = new Date(this.dateTime);
        nextTime.setMinutes(this.dateTime.getMinutes() + 10 * i);
        this.timeList.push(
          nextTime.getHours() +
            ":" +
            (nextTime.getMinutes() == 0
              ? nextTime.getMinutes() + "0"
              : nextTime.getMinutes())
        );
      }
    }
  }
};
</script>
