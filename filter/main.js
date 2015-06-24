var List = React.createClass({
	render: function() {
		return (
			<ul>
				{
					this.props.items.map(function(item) {
						return <li key={item.name}> {item.name} <a href={item.url}> {item.url} </a> </li>
					})
				}
			</ul>
		)
	}
});

var FilteredList = React.createClass({
	filterList: function(event) {
		var updatedList = this.state.initialItems;
		updatedList = updatedList.filter(function(item) {
			return item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
		});
		this.setState({items: updatedList});
	},
	getInitialState: function() {
		return {
			initialItems: [
			    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
			    { name: 'AngularJS', url: 'https://angularjs.org/'},
			    { name: 'jQuery', url: 'http://jquery.com/'},
			    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
			    { name: 'React', url: 'http://facebook.github.io/react/'},
			    { name: 'Ember', url: 'http://emberjs.com/'},
			    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
			    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
			    { name: 'Mootools', url: 'http://mootools.net/'},
			    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
			    { name: 'Lodash', url: 'http://lodash.com/'},
			    { name: 'Moment', url: 'http://momentjs.com/'},
			    { name: 'Express', url: 'http://expressjs.com/'},
			    { name: 'Koa', url: 'http://koajs.com/'},
			],
			items: []
		}
	},
	componentWillMount: function() {
		this.setState({items: this.state.initialItems})
	},
	render: function() {
		return (
			<div className="filter-list">
				<input type="text" placeholder="Search" onChange={this.filterList} />
			<List items={this.state.items} />
			</div>
		);
	}
});

React.render(<FilteredList />, document.getElementById('mount-point'));