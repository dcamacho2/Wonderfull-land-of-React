var NavMenu = React.createClass({
	getInitialState: function() {
		return {focused: 0};
	},
	clicked: function(index) {
		this.setState({focused: index})
	},
	render: function() {
		return (
			<div>
				<ul> {this.props.items.map(function(m, index){
					var style = '';

					if(this.state.focused == index) {
						style = 'focused'
					}

					return <li key={m} className={style} onClick={this.clicked.bind(this, index)}> {m} </li>;
				}.bind(this)) }
				</ul>
				<p>Selected: {this.props.items[this.state.focused]} </p>
			</div>
		);
	}
});

React.render(
	<NavMenu items={ ["Home", "Services", "About", "Contact Us"] } />,
	document.body
);