<template>
    <div v-show="state.show" ref="userDetailPop" id="userDetailPop"
    style="width: 400px; height:80vh; overflow-x: hidden; z-index: 0; background-color: rgba(255, 255, 255, 1); box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; border-radius: 10px; border: solid 0px;  padding: 15px;">
    <div style="margin-bottom: 15px;">
        <button class="p-0 btn btn-link text-dark fixed-plugin-close-button" style="position: absolute; right: 20px;"><i class="material-icons">clear</i></button>
        <h5>회원 상세정보</h5>
    </div>
    
    <div @click="toggleEditMode" style="width: 56px; position:absolute; right: 20px; z-index: 2;">
            <MaterialButton fullWidth="false" variant="gradient" :text="state.editBtnText" size="sm" color="dark" />
            
        </div>
        <div>
            <!-- 아이디	userId
비밀번호	userPw
이름	userName
휴대전화번호	mobile
SMS 수신 여부	isReceiveSMS
이메일	email
사용자 역할	userRole
생성일	createdAt
회원 탈퇴 신청일	withdrawnAt
회원가입 확인 완료 여부	isAuthenticated
직급 / 등급	userRank
관리자 여부	isManager
사용기기	deviceId
생년월일	birthDate
기업 ID	companyId
기업 코드	companyCode
서비스 ID	serviceId
서비스 코드	serviceCode
소속 그룹	group
프로필 이미지	userPhoto
수정일	updatedAt
계정 활성화 / 비활성화 여부	use
유저 index number	userIndex -->
            <form style="display: flex; flex-direction: column; width: 100%;  ">

                <MaterialAvatar img="/img/team-2.90c40d0c.jpg" />
                <div class="input-area">
                    <span>이메일</span>
                    <MaterialInput type="email" :disabled="!state.isEditMode" :placeholder="email" />
                </div>

                <div class="input-area">
                    <span>사용자 이름</span>
                    <MaterialInput type="username" :disabled="!state.isEditMode" :placeholder="username" />
                </div>

                <div class="input-area">
                    <span>계정 활성화 여부</span>
                    <MaterialSwitch />
                </div>

                <div class="input-area">
                    <span>사용 기기</span>
                    <MaterialInput type="text" :disabled="!state.isEditMode" placeholder="Phone 1" />
                </div>

                <span>회원 유형 </span>
                <div class="input-area">

                    <select id="userType">
                        <option value="dog">현장 관리자 (sysadmin)</option>
                        <option value="cat">지역 담당자 (supervisor)</option>
                        <option value="hamster">서비스 제공자 (manager)</option>
                        <option value="parrot">플랫폼 운영자 (member)</option>
                    </select>
                </div>

             

                <!-- <MaterialPagination size="lg" >
                    <MaterialPaginationItem label="현장 관리자" />
                    <MaterialPaginationItem  />
                    <MaterialPaginationItem />
                    <MaterialPaginationItem />


                </MaterialPagination> -->


                <div class="input-area">
                    <span>전화번호</span>
                    <MaterialInput placeholder="010-0000-0000" :disabled="!state.isEditMode" />
                </div>

                <div class="input-area">
                    <span>소속 회사</span>
                    <MaterialInput placeholder="녹원정보기술" :disabled="!state.isEditMode" />
                </div>




                <div>

                    <InvoiceCard title="소속 그룹" buttonText="추가" :list="state.groupList"></InvoiceCard>
                    <PaymentCard title="서비스" buttonText="추가" :list="state.serviceList" />
                </div>




            </form>

        </div>
    </div>
</template>
  
<script>
//   import { ref } from "vue";

import axios from "axios";
import { reactive } from "vue";
import MaterialAvatar from "../../components/MaterialAvatar.vue";
import MaterialInput from "../../components/MaterialInput.vue"
// import MaterialCheckbox from "../../components/MaterialCheckbox.vue"
// import MaterialRadio from "../../components/MaterialRadio.vue";
import MaterialSwitch from "../../components/MaterialSwitch.vue";
// import MaterialPagination from "../../components/MaterialPagination.vue";
// import MaterialPaginationItem from "../../components/MaterialPaginationItem.vue"
import MaterialButton from "../../components/MaterialButton.vue";
import InvoiceCard from "./InvoiceCard.vue";
import PaymentCard from "./PaymentCard.vue";

// 유저 상세 / 수정 팝업
export default {
    name: "UserDetail",
    props: {
        show: Boolean,
        email: String,
        username: String,
        userId: String,
        profileImg: String
    },
    setup() {
        const state = reactive({
            show: true,
            groupList: [
                {
                    name: "플랫폼사업팀",
                    description: "플랫폼사업팀은 DigitalTwin 시스템의 3D Web 시각화 및 플랫폼 Engineering 영역에 필요한 인프라 구축, 서비스 개발, 데이터 분석 관련 업무를 담당..."
                },
                {
                    name: "클라이언트 팀",
                    description: "..."
                }
            ],
            serviceList: [
                {
                    name: "제주 해녀",
                    imgSrc: "/img/jejuhanyeo_logo.png",
                    description: "플랫폼사업팀은 DigitalTwin 시스템의 3D Web 시각화 및 플랫폼 Engineering 영역에 필요한 인프라 구축, 서비스 개발, 데이터 분석 관련 업무를 담당..."
                },
                {
                    name: "미르 메타케어",
                    imgSrc: "/img/mirmetacare_logo.png",
                    description: "..."
                }
            ],
            isEditMode: false,
            editBtnText: '수정'
        });
        const getUserInfo = () => {
            // id로 유저 찾기
            axios.get("/user/:id").then(data => {
                console.log(data);
            });
        };
        const closePop = () => {
            // const userDetailPop = ref("userDetailPop");
            state.show = false;
            // console.log(userDetailPop)
        };
        const openPop = () => {
            // const userDetailPop = document.getElementById("userDetailPop");
            state.show = true;
        };

        const toggleEditMode = () => {
            state.isEditMode = !state.isEditMode;
            state.editBtnText = state.isEditMode ? '저장' : '수정'
        }

        const handleEditBtn = () => {
            if(state.isEditMode) {
                // 수정 모드일 경우 form submit으로 데이터 서버에 전송
                return;
            }
            
            return;
            
        }

      

        return {
            getUserInfo,
            closePop,
            openPop,
            toggleEditMode,
            handleEditBtn,
            state
        };
    },
    components: { MaterialAvatar, MaterialInput, MaterialSwitch, MaterialButton, InvoiceCard, PaymentCard }
};
</script>
<style scoped>
.input-area {
    margin: 5px 0 5px 0;
}
</style>