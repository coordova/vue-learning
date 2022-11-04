import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
import Panel from "./Panel.js";

export default {
    components: {
        Assignment,
        AssignmentTags,
        Panel
    },
    template: `
        <panel v-show="assignments.length" class="w-72">
            <div class="flex justify-between items-start">
                <h2 class="font-bold mb-2 uppercase font-medium">{{ title }} <span class="ml-3">({{assignments.length}})</span></h2>
                <button v-show="canToggle" @click="$emit('toggle')" class="px-2 font-normal text-lg text-white border border-red-500 bg-red-500 rounded-full hover:bg-red-600 hover:text-white scale-75">&times;</button>
            </div>
            
            <!-- <assignment-tags 
                v-model:currentTag="currentTag"     
                :initial-tags="assignments.map(a => a.tag)" 
                :current-tag="currentTag"
                @change="currentTag = $event"
            /> -->
            <!-- Using v-model for track current track -->
            <assignment-tags 
                v-model:currentTag="currentTag"     
                :initial-tags="assignments.map(a => a.tag)" 
            />
            <!-- <div class="flex gap-2">
                <button 
                    @click="currentTag = tag" 
                    v-for="tag in tags" 
                    class="px-1 pb-px text-xs border border-lime-400 rounded"
                    :class="{
                        'border-lime-600 bg-lime-600 shadow-lime-2c00 shadow-sm': tag === currentTag
                    }"
                >{{ tag }}</button>
            </div> -->
            
            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                <assignment 
                    v-for = "assignment in filteredAssignments" 
                    :key="assignment.id" 
                    :assignment="assignment"
                ></assignment>
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
            <slot></slot>
        </panel>
    `,

    props: {
        assignments: Array,
        title: String,
        canToggle: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            currentTag: 'all',
        }
    },

    computed: {
        /* filteredAssignments() {
            if (this.currentTag == 'all') {
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag == this.currentTag);
        }, */

        filteredAssignments() {
            if (this.currentTag == 'all') {
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag == this.currentTag);
        },


    }
}