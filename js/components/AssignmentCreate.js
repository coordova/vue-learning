export default {

    template: `
        <form @submit.prevent="add">
            <input v-model="newAssignment" type="text" placeholder="New Assignment..." class="bg-gray-600 placeholder:text-slate-400 border-gray-800 px-3 py-2 rounded-md focus:outline-none focus:ring-1 ring-lime-300 active:ring-1 active:ring-lime-300">
            <button type="submit" class="px-3 py-2 rounded-md bg-lime-600 text-white hover:bg-lime-500 ml-2 focus:outline-none active:bg-lime-700">Add</button>
        </form>
    `,

    data() {
        return {
            newAssignment: ''
        }
    },

    methods: {
        add() {
            this.$emit('addEventFromChild', this.newAssignment);

            this.newAssignment = '';
        }
    }

}