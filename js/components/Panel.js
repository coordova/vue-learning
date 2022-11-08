export default {
    template: `
        <div :class="{
            'p-4 border rounded-lg': true,
            'bg-white border-gray-300 text-black' : theme == 'light',
            'bg-gray-700 border-gray-600 text-white' : theme == 'dark',
            'bg-blue-700 border-blue-600 text-white' : theme == 'blue',
            'bg-lime-700 border-lime-600 text-white' : theme == 'lime',
        }">
            <h2 v-if="$slots.heading" class="font-bold text-lg mb-2">
                <slot name="heading" />
            </h2>
            <!-- Default slot -->
            <slot />
            
            <footer v-if="$slots.footer" class="border-gray-600 border-t mt-4 pt-4 text-sm">
                 <slot name="footer"></slot>
            </footer>
        </div>
    `,

    props: {
        theme: {
            type: String,
            default: 'dark'
        }
    }
}