import Assignment from "./Assignment.js";

export default {
    components: {
        Assignment
    },
    template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2 uppercase font-medium">{{ title }}</h2>
            
            <ul class="border border-gray-600 divide-y divide-gray-600">
                <assignment v-for = "assignment in assignments" :key="assignment.id" :assignment="assignment"></assignment>
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
    }
}