<template>
    <div v-show="state.show" ref="userDetailPop" id="userDetailPop"
        style="position: absolute; width: 400px; height: 90vh; top: 10px; z-index: 2; background-color: rgba(255, 255, 255, 1); border-radius: 20px; border: solid 2px; padding: 15px;">
        
        
        <span @click="closePop" style="position: absolute; right: 10px; font-size: 12px; cursor:pointer;">❌</span>
        <h5>{{ email }}</h5>
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
            <form style="display: flex; flex-direction: column; width: 80%; ">

                
                <MaterialAvatar img="/img/team-2.90c40d0c.jpg" />
                <span>이메일</span>
                <!-- <input type="email" :placeholder="email" /> -->
                <MaterialInput type="email" disabled="true" :placeholder="email" />
                <span>사용자 이름</span>
                <MaterialInput type="username" disabled="true" :placeholder="username" />

                <!-- <input type="email" :placeholder="username" /> -->

                <!-- <span>SMS 수신 여부</span>
                <MaterialCheckbox /> -->

                <span>계정 활성화 여부</span>
                <!-- <MaterialCheckbox />
                <MaterialRadio /> -->
                <MaterialSwitch />
<!-- 
                <span>관리자 여부</span>
                <MaterialCheckbox /> -->

                <span>사용 기기</span>
                <MaterialInput type="text" disabled="true" placeholder="Phone 1" />

                <!-- <input type="text" placeholder="phone 1" /> -->

                <label for="userType">회원 유형:</label>

                <select id="userType">
                    <option value="dog">현장 관리자 (sysadmin)</option>
                    <option value="cat">지역 담당자 (supervisor)</option>
                    <option value="hamster">서비스 제공자 (manager)</option>
                    <option value="parrot">플랫폼 운영자 (member)</option>
                </select>

                <!-- <MaterialPagination size="lg" >
                    <MaterialPaginationItem label="현장 관리자" />
                    <MaterialPaginationItem  />
                    <MaterialPaginationItem />
                    <MaterialPaginationItem />


                </MaterialPagination> -->
                


                <span>전화번호</span>
                <MaterialInput placeholder="010-0000-0000" disabled="true" />
               

                <span>소속 회사</span>
                <MaterialInput placeholder="녹원정보기술" disabled="true" />

                <span>소속 그룹</span>
                <div style="display: flex; flex-direction: column; width: 300px;">
                    <input type="button" value="+" />
                    <!-- <MaterialButton text="+" /> -->
                    <ul>
                        <li>서버팀</li>
                    </ul>
                </div>

                <span>담당 서비스</span>
                <div>
                    <input type="button" value="+" />
                    <ul>
                        <li>제주해녀</li>
                        <li>미르 메타케어</li>
                    </ul>
                </div>

                <input type="submit" value="수정" />

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
// import MaterialButton from "../../components/MaterialButton.vue";

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
        return {
            getUserInfo,
            closePop,
            openPop,
            state
        };
    },
    components: { MaterialAvatar, MaterialInput, MaterialSwitch }
};
</script>
<style>

</style>