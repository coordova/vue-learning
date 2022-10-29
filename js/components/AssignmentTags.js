export default {
    template: `
        <div class="flex gap-2">
            <!-- <button 
                @click="currentTag = this.currentTag" 
                v-for="tag in tags" 
                class="px-1 pb-px text-xs border border-lime-400 rounded"
                :class="{
                    'border-lime-600 bg-lime-600 shadow-lime-2c00 shadow-sm': tag === currentTag
                }"
            >{{ tag }}</button> -->
            <!-- <button 
                @click="$emit('change', tag)" 
                v-for="tag in tags" 
                class="px-1 pb-px text-xs border border-lime-400 rounded"
                :class="{
                    'border-lime-600 bg-lime-600 shadow-lime-2c00 shadow-sm': tag === currentTag
                }"
            >{{ tag }}</button> -->
            
            <button 
                @click="$emit('update:currentTag', tag)" 
                v-for="tag in tags" 
                class="px-1 pb-px text-xs border border-lime-400 rounded"
                :class="{
                    'border-lime-600 bg-lime-600 shadow-lime-2c00 shadow-sm': tag === currentTag
                }"
            >{{ tag }}</button>
        </div>
    `,

    props: {
        initialTags: Array,
        currentTag: String,
    },

    computed: {
        tags() {
            // return un set de UNICOS valores que tiene la lista assignments en su campo 'tag'
            // return ['all', ...new Set(this.assignments.map(a => a.tag))]; // usamos destructuring '...' para obtener los values del conjunto
            return ['all', ...new Set(this.initialTags)]; // usamos destructuring '...' para obtener los values del conjunto
        }
    }
}