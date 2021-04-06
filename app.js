const App = {
    data() {
        return {
            title: 'Note list',
            placeholderStr: 'Add new note',
            inputValue: '',
            notes: [
                'My very first note',
                'My tiny second note',
                'My definetely third note',
            ]
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value;
        },
        addHandler() {
            this.notes.push(this.inputValue);
            this.inputValue = '';
        }
    }
};

Vue.createApp(App).mount('#app');