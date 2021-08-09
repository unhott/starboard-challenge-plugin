import { Runtime } from "starboard-notebook/dist/src/types";

export const plugin = {
    id: "starboard-challenge-plugin",
    metadata: {
        name: "StarboardChallengePlugin",
    },
    exports: {},
    async register(runtime: Runtime, opts: {}) {
        // TODO *** Currently some sort of type inheritance issue, 
        // so having to cast as unknown to HTMLElement. 
        const notebook = runtime.dom.notebook as unknown as HTMLElement;
        notebook.addEventListener("sb:remove_cell", (event) => {
            event.preventDefault();
            console.log("You can't remove cells in challenge mode! ");
        });
        notebook.addEventListener("sb:insert_cell", (event) => {
            event.preventDefault();
            console.log("You can't add cells in challenge mode! ");
        });
        notebook.addEventListener("sb:set_cell_property", (event) => {
            if (event.detail.property == 'locked') {
                event.preventDefault();
                console.log("You can't change which cells are locked in challenge mode! ");
            };
        });
        notebook.addEventListener("sb:move_cell", (event) => {
            event.preventDefault();
            console.log("You can't move cells in challenge mode! ");
        });    
        notebook.addEventListener("sb:change_cell_type", (event) => {
            event.preventDefault();
            console.log("You can't change cell types in challenge mode! ");
        });    
        }
  };