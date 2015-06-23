var ReactorTimer = React.createClass({
	getInitialState: function() {
		//The return object is returned is assigned to this.state
		return {elapsed: 0};
	},
	componentDidMount: function() {
		//called when component is rendered to the page
		this.timer = setInterval(this.tick, 50);
	},
	componentWillMount: function() {
		//called imediatly before the component is removed
		clearInterval(this.timer);
	},
	tick: function() {
		//based on the interval above, this function will run every 50 miliseconds
		//calling setState causes the component to be rerendered
		this.setState({
			elapsed: new Date() - this.props.start
		});
	},
	render: function() {
		var elapsed = Math.round(this.state.elapsed / 100);
		var seconds = (elapsed / 10).toFixed(1);

		return (
			<p>This awesome React mini-project has been running for <b> {seconds} </b> seconds</p>
		);
	}
});

React.render(<ReactorTimer start={Date.now()} />, document.body);