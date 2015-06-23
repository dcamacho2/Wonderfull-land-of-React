var FilteredList = React.createClass({
	filterList: function(e) {
		var updatedList = this.state.initialItems;
		updatedList = updatedList.filter(function(item) {
			return item.toLowerCase().search(
				e.target.value.toLowerCase()
			) !== -1;
		});
		this.setState({
			items: updatedList
		});
	},
	getInitialState: function() {
		return {
			initialItems: ["Java", "Javascript", "Python", "C", "PHP", "SQL", "C++", "HTML/CSS"],
			items: []
		}
	},
	componentWillMount: function() {
		this.setState({
			items: this.state.initialItems
		})
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

var List = React.createClass({
	render: function() {
		return (
			<ul>
				{
					this.props.items.map(function(item) {
						return <li key={item}> {item} </li>
					})
				}
			</ul>
		)
	}
});



React.render(<FilteredList />, document.getElementById('mount-point'));