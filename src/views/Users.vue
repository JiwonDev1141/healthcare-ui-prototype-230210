<template>
  <div class="container-fluid py-4" style="height: 85vh">
    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div class="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3">
              <h6 class="text-white text-capitalize ps-3">유저 목록</h6>
            </div>
          </div>
          <div class="card-body px-0 pb-2">

            <div class="table-responsive p-0">
              <table class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      아이디
                    </th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                      휴대전화번호
                    </th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      SMS 수신 여부
                    </th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      수정일
                    </th>
                    <th class="text-secondary opacity-7"></th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img src="../assets/img/team-2.jpg" class="avatar avatar-sm me-3 border-radius-lg"
                            alt="user1" />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">2b9ca54e2db89315</h6>
                          <p class="text-xs text-secondary mb-0">
                            john@creative-tim.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-xs font-weight-bold mb-0">010-2180-1691</p>
                      <p class="text-xs text-secondary mb-0">Organization</p>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="badge badge-sm bg-gradient-success">Online</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">2022-10-05
                        11:58:46</span>
                    </td>
                    <td class="align-middle">
                      <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip"
                        data-original-title="Edit user" @click="showDetail">
                        상세 보기
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img src="../assets/img/team-2.jpg" class="avatar avatar-sm me-3 border-radius-lg"
                            alt="user1" />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">2b9ca54e2db89315</h6>
                          <p class="text-xs text-secondary mb-0">
                            john@creative-tim.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-xs font-weight-bold mb-0">010-2180-1691</p>
                      <p class="text-xs text-secondary mb-0">Organization</p>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="badge badge-sm bg-gradient-success">Online</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">2022-10-05
                        11:58:46</span>
                    </td>
                    <td class="align-middle">
                      <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip"
                        data-original-title="Edit user" @click="showDetail">
                        상세 보기
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img src="../assets/img/team-2.jpg" class="avatar avatar-sm me-3 border-radius-lg"
                            alt="user1" />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">2b9ca54e2db89315</h6>
                          <p class="text-xs text-secondary mb-0">
                            john@creative-tim.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-xs font-weight-bold mb-0">010-2180-1691</p>
                      <p class="text-xs text-secondary mb-0">Organization</p>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="badge badge-sm bg-gradient-success">Online</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">2022-10-05
                        11:58:46</span>
                    </td>
                    <td class="align-middle">
                      <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip"
                        data-original-title="Edit user" @click="showDetail">
                        상세 보기
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img src="../assets/img/team-2.jpg" class="avatar avatar-sm me-3 border-radius-lg"
                            alt="user1" />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">2b9ca54e2db89315</h6>
                          <p class="text-xs text-secondary mb-0">
                            john@creative-tim.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-xs font-weight-bold mb-0">010-2180-1691</p>
                      <p class="text-xs text-secondary mb-0">Organization</p>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="badge badge-sm bg-gradient-success">Online</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">2022-10-05
                        11:58:46</span>
                    </td>
                    <td class="align-middle">
                      <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip"
                        data-original-title="Edit user" @click="showDetail">
                        상세 보기
                      </a>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- 화면 중앙에 정렬 -->
    <div style="
          position: absolute; top: 50%;
          left: 50%;
          transform: translate(-50%, -50%); z-index: 2;
        ">
      <UserDetailPop :show="state.showDetail" :email="state.currentUserId" :username="state.username" />
    </div>
  </div>
</template>

<script>
// import NavPill from "./components/NavPill.vue";
// import MasterCard from "@/examples/Cards/MasterCard.vue";
// import DefaultInfoCard from "@/examples/Cards/DefaultInfoCard.vue";
// import PaymentCard from "./components/PaymentCard.vue";
// import InvoiceCard from "./components/InvoiceCard.vue";
// import BillingCard from "./components/BillingCard.vue";
// import TransactionCard from "./components/TransactionCard.vue";

import { reactive } from 'vue';
import UserDetailPop from './components/custom/UserDetailPop.vue';
import { ref } from 'vue';

// 아이디
// 비밀번호
// 이름
// 휴대전화번호
// SMS 수신 여부
// 이메일
// 사용자 역할
// 생성일
// 회원 탈퇴 신청일
// 회원가입 확인 완료 여부
// 직급 / 등급
// 관리자 여부
// 사용기기
// 생년월일
// 기업 ID
// 기업 코드
// 서비스 ID
// 서비스 코드
// 소속 그룹
// 프로필 이미지
// 수정일
// 계정 활성화 / 비활성화 여부
// 유저 index number

export default {
  name: "user",
  components: {
    UserDetailPop
  },
  setup() {

    const sample = ref("sample text.");

    const state = reactive({
      showDetail: 0,
      email: false,
      currentUserId: "awesomedev3@rockwonitglobal.com",
      username: "Jiwon",
      profileImg: "/favicon.png",
    })

    // watch(() => props.show, () => {
      
    // }, { deep: true });

    const showDetail = () => {
      state.showDetail += 1;
      console.log(state)
    };

    return {
      showDetail,
      state,
      sample
    }
  },


};
</script>
