<template>
    <thead>
        <tr>
            <th v-for="(title, index) of list" :key="index" class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                {{ title }}
            </th>
           
        </tr>
    </thead>
</template>
  
<script>

import { reactive } from "vue";

import { watch } from "vue";

// 목록 테이블의 분류 항목
export default {
    name: "TableHead",
    props: {
        list: Array
    },
    setup(props) {


        const state = reactive({

        });

        watch(() => props.show, () => {

        }, { deep: true });



        return {

            state,
            props
        };

    },
    components: {}
};
</script>
<style scoped></style>