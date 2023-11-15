const { createApp } = Vue;

const app = Vue.createApp({
    data() {
        return{
            todo_text:'',
            todos: [
                {text :'learn HTML'},
                {text :'learn CSS'},
                {text :'learn SleeepStudyRepeat'},
                 {text :'learn JavaScript'},
                 {text :'learn Vue Js'},
            ],
        }
    },
    methods:{
        addTodo(){
            this.todos.push({
                text: this.todo_text,
            });
            this.todo_text='';
        }
    }

     
  });
  app.mount("#app");