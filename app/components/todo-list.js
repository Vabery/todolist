import Ember from 'ember';

export default Ember.Component.extend({
    /* truncated for brevity */
    didInsertElement() {
        let todos = this.get('todos');
        if (todos.get('length') > 0 && todos.isEvery('complete', true)) {
            this.set('allAreDone', true);
        } else {
            this.set('allAreDone', false);
        }
    },
    allAreDoneObserver: Ember.observer('allAreDone', function() {
        let completeValue = this.get('allAreDone');
        let todos = this.get('todos');
        todos.forEach((todo) => {
            todo.set('complete', completeValue)
            this.sendAction('updateTodo', todo);
        });
    }),
    actions: { /* truncated for brevity */ }
});
