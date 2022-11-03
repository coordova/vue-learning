import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
import assignment from "./Assignment.js";

export default {
    components: {
        AssignmentList,
        AssignmentCreate
    },

    template: `

        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
            
            <!-- <form @submit.prevent="add">
                <input v-model="newAssignment" type="text" placeholder="New Assignment..." class="bg-gray-600 placeholder:text-slate-400 border-gray-800 px-3 py-2 rounded-md">
                <button type="submit" class="px-3 py-2 rounded-md bg-lime-600 text-white hover:bg-lime-500 ml-2">Add</button>
            </form> -->
            
            <assignment-create @addEventFromChild="add"></assignment-create>
            
        </section>

        <!-- <section v-show="inProgressAssignments.length">
            <h2 class="font-bold mb-2">In Progress</h2>
            
            <ul>
                <li 
                    v-for = "assignment in inProgressAssignments"
                    :key="assignment.id"
                >
                    <label>
                        {{ assignment.name }}
                        <input type="checkbox" v-model="assignment.complete">
                    </label>
                </li>
            </ul>
        </section>
        <section v-show="completedAssignments.length" class="mt-8">
            <h2 class="font-bold mb-2">Completed</h2>
            
            <ul>
                <li 
                    v-for = "assignment in completedAssignments"
                    :key="assignment.id"
                >
                    <label>
                        {{ assignment.name }}
                        <input type="checkbox" v-model="assignment.complete">
                    </label>
                </li>
            </ul>
        </section> -->
        
    `,

    data() {
        return {
            assignments: [],
            newAssignment: ''
        }
    },

    computed: {
        /* inProgressAssignments() {
            return this.assignments.filter(assignment => ! assignment.complete );
        },

        completedAssignments() {
            return this.assignments.filter(assignment => assignment.complete );
        } */

        /* Computer property 'filters' that returns an object */

        filters() {
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.completed ),
                completed: this.assignments.filter(assignment => assignment.completed )
            }
        }
    },

    /* Hooks : Los mas importantes del ciclo [created(), mounted(), unmounted()] los restantes son [beforeCreate, beforeMount, beforeUnmount]  */
    /* beforeCreate() {
        alert('before create');
    }, */

    // Hook 'created'
    created() {
        fetch('http://localhost:3000/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments;
            });
    },

    methods: {
        add(name) {
            // console.log(Math.floor(Math.random() * this.assignments.length));
            const setTags = new Set(this.assignments.map(a => a.tag));
            const arrayTags = [...setTags]; // from SET to ARRAY using SPREAD Operator (...)
            // console.log([...setTags].length);
            // console.log(arrayTags.length);
            // console.log(Math.floor(Math.random() * (arrayTags.length)));

            this.assignments.push({
                // name: this.newAssignment,
                name: name,
                completed: false,
                id: this.assignments.length +1,
                tag: arrayTags[Math.floor(Math.random() * (arrayTags.length))]
            });
            // this.newAssignment = '';
        }
    }
}