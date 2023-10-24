<script lang="ts" setup>
import { Ref, ref } from 'vue';
import KatasCompetitor from '../components/Competitors/KatasCompetitor.vue'
import { KataCompetitor } from '../Interfaces';
import ExitButton from '../components/Buttons/ExitButton.vue';

const base = ref(8)
const num_competitors = ref(0)
const competitors: Ref<KataCompetitor[]> = ref([])

const updateCompetitors = () => {
    const n = num_competitors.value
    
    if(n < competitors.value.length) {
        do {
            competitors.value.pop()
        } while(competitors.value.length > n)
    }

    if(n > competitors.value.length) {
        let id = competitors.value.length
        do {
            competitors.value.push({
                id,
                cal1:0,
                cal2:0,
                cal3:0,
            })
            id++
        } while(competitors.value.length < n)
    }
}

const get_winners = () => competitors.value.sort((a:KataCompetitor, b:KataCompetitor) => b.total! - a.total!)

const clearFields = () => competitors.value.forEach(competitor => {
    console.log('cleanin')
    competitor.name = undefined
    competitor.cal1 = 0
    competitor.cal2 = 0
    competitor.cal3 = 0
    competitor.total = undefined
});
    
</script>

<template>
    <div class="h-screen parent mx-40">
        <ExitButton />
        <section id="configuration" class="w-96 columns-3 g mb-11 py-3" style="padding-bottom: 2px;">
            <fieldset class="border-neutral-500 border-b">
                <input type="text" name="num-competitors" id="num-competitors" v-model="num_competitors"
                    class="num-competitors w-20" onfocus="this.value = ''" :onblur="'this.value =' + num_competitors" @change="updateCompetitors">
                <legend>
                    <span># Competidores</span>
                </legend>
                <br/>
            </fieldset>
            
            <fieldset class="border-neutral-500 border-b mx-3">
                <input type="radio" name="cal-base" id="base-8" v-model="base" :value="8" class="cal-base"/>
                <label for="base-8" class="string-calif" >8</label>

                <input type="radio" name="cal-base" id="base-9" v-model="base" :value="9" class="cal-base"/>
                <label for="base-9" class="string-calif" >9</label>
                <legend>
                    <span>Cal. base</span>
                </legend>
            </fieldset>
            <fieldset>
                <button class="border-neutral-500 border-b px-2" @click="clearFields">Reiniciar</button>
            </fieldset>
        </section>

        <section class="copmetitors-section">
            <KatasCompetitor :base="base" :competitor="competitor" v-for="(competitor, index) in competitors" :key="index" :id="index" />
        </section>

        <section class="grid justify-items-end self-end">
            <button class="rounded-lg text-white text-2xl bg-green-600 px-3 py-1" @click="get_winners">Calificar</button>
        </section>
    </div>
</template>

<style scoped>
#btn-return {
    position: absolute;
    top: 25px;
    left: -6rem;
}

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
    
    padding: 5px 8px;
    box-sizing: border-box;
}

legend {
    position: absolute;
    bottom: 0px;
    left: 15px;
    transform: translate(0%, 75%);
    margin: 0px;
    font-size: 8pt;
    padding: 0 5px;
    background-color: #232323;

    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
}

</style>
