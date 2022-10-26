import Assignment from "./Assignment.js";

export default {
    components: {
        Assignment
    },
    template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2 uppercase font-medium">{{ title }} <span class="ml-3">({{assignments.length}})</span></h2>
            <div class="flex gap-2">
                <button 
                    @click="currentTag = tag" 
                    v-for="tag in tags" 
                    class="px-1 pb-px text-xs border border-lime-400 rounded"
                    :class="{
                        'border-lime-600 bg-lime-600 shadow-lime-200 shadow-sm': tag === currentTag
                    }"
                >{{ tag }}</button>
            </div>
            
            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                <assignment v-for = "assignment in filteredAssignments" :key="assignment.id" :assignment="assignment"></assignment>
                <!-- <li 
                    v-for = "assignment in assignments"
                    :key="assignment.id"
                >
                    <label>
                        {{ assignment.name }}
                        <input type="checkbox" v-model="assignment.complete">
                    </label>
                </li> -->
            </ul>
        </section>
    `,

    props: {
        assignments: Array,
        title: String
    },

    data() {
        return {
            currentTag: 'all'
        }
    },

    computed: {
        filteredAssignments() {
            if (this.currentTag == 'all') {
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag == this.currentTag);
        },

        tags() {
            // return un set de UNICOS valores que tiene la lista assignments en su campo 'tag'
            return ['all', ...new Set(this.assignments.map(a => a.tag))]; // usamos destructuring '...' para obtener los values del conjunto
        }
    }
}