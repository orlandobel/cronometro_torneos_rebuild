<script lang="ts" setup>
import { reactive, watch, ref } from 'vue';
import KatasCompetitor from '../components/Competitors/KatasCompetitor.vue'

const competitors = ref('0')
const base = ref(8)
</script>

<template>
    <div class="h-screen w-full parent">
        <section id="configuration" class="border-neutral-500 border-b w-56 columns-2 g mb-11 py-3" style="padding-bottom: 2px;">
            <fieldset>
                <input type="text" name="num-competitors" id="num-competitors" v-model="competitors"
                    class="num-competitors w-20" onfocus="this.value = ''" :onblur="'this.value =' + competitors">
                <legend>
                    <span># Competidores</span>
                </legend>
                <br/>
            </fieldset>
            
            <fieldset>
                <input type="radio" name="cal-base" id="base-8" v-model="base" value="8" class="cal-base"/>
                <label for="base-8" class="string-calif" >8</label>

                <input type="radio" name="cal-base" id="base-9" v-model="base" value="9" class="cal-base"/>
                <label for="base-9" class="string-calif" >9</label>
                <legend>
                    <span>Cal. base</span>
                </legend>
            </fieldset>
            <!--input type="text" name="num-competitors" id="num-competitors" placeholder="Número de competidores"
                class="num-competitors border-neutral-500 border-b"-->
        </section>

        <section class="copmetitors-section">
            <KatasCompetitor :id="'competitor-'+index" :base="base" :competitor="index" v-for="index in parseInt(competitors)" :key="index" />
        </section>

        <section class="grid justify-items-end self-end">
            <button class="rounded-lg text-white text-2xl bg-green-600 px-3 py-1">Calificar</button>
        </section>
    </div>
</template>

<style scoped>
.num-competitors {
    background-color: transparent;
    text-align: center;
}

.num-competitors:focus {
    outline: none;
}

.cal-base {
    -ms-transform: scale(2); /* IE 9 */
    -webkit-transform: scale(2); /* Chrome, Safari, Opera */
    transform: scale(2);
    margin: 0px 8px;
    opacity: 0;
}

input[type='radio']:checked {
    opacity: 1;
    accent-color: red;
}

.parent {
    position: relative;
}
.self-end {
    position: absolute;

    bottom: 20px;
    right: 0;
}

.string-calif {
    position: relative;
    z-index: 4;

    left: -19px;
    
}

fieldset { 
    position: relative;
    margin-top: 0px;
    
    padding: 5px;
    box-sizing: border-box;
}

legend {
    position: absolute;
    bottom: 0px;
    left: 5px;
    transform: translate(0%, 75%);
    margin: 0px;
    font-size: 8pt;
    padding: 0 5px;
    background-color: #232323;

    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
}

</style>
