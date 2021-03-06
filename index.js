console.clear();

const TodoForm = ({addTodo}) => {
	// Input tracker
let input;
return (
	<div>
		<input red={node => {
			input = node;
		}} />
		<button onClick={() => {
			addTodo(input.value);
			input.value = '';
		}}>
		+
		</button>
	</div>
	);
};

const Todo = ({todo, remove}) => {
	// Each Todo
	return (<li onClick(remove(todo.id))>{todo.text}</li>)
}

const TodoList = ({todos, remove}) => {
	// Map through the todos
	const todoNode = todos.map((todo) => {
		return (<Todo todo={todo} key={todo.id} remove={remove}/>)
	});
	return (<ul>{todoNode}</ul>);
}

const Title = () => {
	return (
		<div>
			<div>
				<h1>Todo</h1>
			</div>
		</div>
	);
};

// Container Component
// Todo Id
window.id = 0;
class TodoApp extends React.Component{
	constructor(props){
		// Pass props to parent class
		super(props);
		// Set initial state
		this.state = {
			data: []
		}
	}
	// Add todo handler
	addTodo(val){
		//Assemble data
		const todo = {text: val, id: window.id++}
		// Update data
		this.state.data.push(todo)
		// Update state
		this.setState({data: this.state.data});
	}
	// Handle remove
	handleRemove(id){
		// Filter all todos expect the one to be removed
		const remainder = this.state.data.filter((todo) => {
			if(todo.id !== id) return todo;
		});
		// Update state with filter
		this.setState({data: remainder});
	}

	render(){
		// Render JSX
		return (
			<div>
				<Title />
				<TodoForm addTodo={this.addTodo.bind(this)}/>
				<TodoList
				todos={this.state.data}
				remove={this.handleRemove.bind(this)}
				/>
			</div>
			);
		}
	}

	class TodoApp extends React.Component{
		constructor (props){
			// Pass props to parent class
			super(props);
			// Set Initial state
			this.state = {
				data: []
			}
			this.apiUrl = 'https://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos'
		}
		// Lifecycle method
	}

	this.setState()

	 // Add todo handler
  addTodo(val){
    // Assemble data
    const todo = {text: val}
    // Update data
    axios.post(this.apiUrl, todo)
       .then((res) => {
          this.state.data.push(res.data);
          this.setState({data: this.state.data});
       });
  }
  // Handle remove
  handleRemove(id){
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });
    // Update state with filter
    axios.delete(this.apiUrl+'/'+id)
      .then((res) => {
        this.setState({data: remainder});      
      })
  }
  

	ReactDOM.render(<TodoApp />, document.getElementById('container'));