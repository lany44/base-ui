<!-- @author smwang -->
<!-- @email smwang@yangqianguan.com -->
<!-- @date 2018-11-07 12:17:06.075 -->
<!-- @desc generated by yqg-cli@0.3.6 -->

<template>

    <div class="comp-tag-input">
        <div class="doc card">
            <div class="case">
                <h3>基本用法</h3>
                <b-md-view :md-text="MD.CompTagInputBasic"/>

                <demo-box>
                    <div slot="code"><b-md-view :md-text="MD.CompTagInputBasicCode"/></div>
                    <div slot="main">
                        <div>
                            <form class="form-block" @submit.prevent>
                                <b-form-group label="basic">
                                    <b-tag-input v-model="basic"/>
                                </b-form-group>
                            </form>
                        </div>
                        <pre class="json-preview">{{ $j(basic) }}</pre>
                    </div>
                </demo-box>
            </div>
        </div>

    </div>

</template>

<script type="text/babel">

    import MD from '../../../common/md';

    export default {
        name: 'CompTagInput',

        data() {
            return {
                MD,
                basic: [
                    '标签1', '标签2', '标签3'
                ]
            };
        }
    };

</script>
