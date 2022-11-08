import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
    components: { Assignments, Panel },

    template: `
        <div class="grid gap-6">
            <assignments></assignments>
            
            <panel>
                <template v-slot:heading>
                    Titulo
                </template>
                
                <!-- <template v-slot:default> -->
                   Contenido - el slot por defecto no necesita ser referenciado con template v-slot:default
                <!-- </template> -->
                
                <template #footer>
                <!-- <template v-slot:footer> -->
                    El pie de la tarjeta aqui
                </template>
            </panel>
            
            <panel theme="light">
                <template v-slot:heading>
                    Titulo
                </template>
                
                <!-- <template v-slot:default> -->
                   Contenido - el slot por defecto no necesita ser referenciado con template v-slot:default
                <!-- </template> -->
                
                <template #footer>
                <!-- <template v-slot:footer> -->
                    El pie de la tarjeta aqui
                </template>
            </panel>
            
            <panel theme="blue">
                <template v-slot:heading>
                    Titulo
                </template>
                
                <!-- <template v-slot:default> -->
                   Contenido - el slot por defecto no necesita ser referenciado con template v-slot:default
                <!-- </template> -->
                
                <template #footer>
                <!-- <template v-slot:footer> -->
                    El pie de la tarjeta aqui
                </template>
            </panel>
            
            <panel theme="lime">
                <template v-slot:heading>
                    Titulo
                </template>
                
                <!-- <template v-slot:default> -->
                   Contenido - el slot por defecto no necesita ser referenciado con template v-slot:default
                <!-- </template> -->
                
                <template #footer>
                <!-- <template v-slot:footer> -->
                    El pie de la tarjeta aqui
                </template>
            </panel>
        </div>
    `,

    props: {
        add: Object
    }

}