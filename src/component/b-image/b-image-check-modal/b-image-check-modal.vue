<!-- @author Kyles Light -->
<!-- @email kuilin@yangqianguan.com -->
<!-- @date 2018-05-10 23:52:05.015 -->
<!-- @desc generated by yqg-cli@0.1.9 -->

<template>

    <b-dialog :dialog-class="checkSize" :open="visible" class="b-image-check-modal" @close="cancel">
        <div class="b-image-check-modal-body" @click="cancel">
            <div class="image-preview">
                <img :src="image.uri">
            </div>
        </div>
    </b-dialog>

</template>

<script type="text/babel">

    import BDialog from '../../b-dialog';

    export default {
        name: 'BImageCheckModal',

        components: {
            BDialog
        },

        props: {
            image: {
                type: Object,
                default: () => ({})
            },

            checkSize: {
                type: String,
                default: ''
            }
        },

        data() {
            return {
                visible: false
            };
        },

        mounted() {
            const vm = this;
            vm.visible = true;
        },

        methods: {
            cancel() {
                const vm = this;
                vm.visible = false;
                vm.reject();
            },

            confirm() {
                const vm = this;
                vm.visible = false;
                vm.resolve();
            }
        }
    };

</script>

