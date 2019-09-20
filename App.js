import React from 'react';
import './App.css';

const API_KEY = '3166070d283249a5aedda56abddc8d0d';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(API_KEY);

class NewsSite {
	constructor(name, tag){
		this.name = name;
		this.tag = tag;
	}
	getName() {
		return this.name;
	}
	getTag() {
		return this.tag;
	}
}

class Article {
	constructor (title, description) {
		this.title = title;
		this.description = description;
	}
	render() {
		return (
		<div className="indivarticle">
		<h3><b>{this.title}</b></h3>
		<br></br>
		<p>{this.description}</p>
		<br></br>
		</div>
		);
	}
}

class ArticleList {
	constructor () {
		var list = [];
	}
	
	addArticle(article) {
		this.list.push(article);
		return;
	}
	
	displayList(item, index) {
		return (
		<div className="dynlist">
		</div>
		);
		
	}
	
	render() {
		return (
		<hr></hr>,
		this.list.forEach(this.displayList));
	}
}


class FullBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {source: 'bbc-news', keyword: ''};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleOptionChange = this.handleOptionChange.bind(this);
	}
	handleInputChange(event) {
		this.setState({keyword: event.target.value});
	}
	handleOptionChange(event) {
		this.setState({source: event.target.value});
	}
	render()  {
		return (
			<div className="searchBar">
			<form id="form1">
			<select value={this.state.value} onChange={this.handleOptionChange} id="selectbox">
			<option value="bbc-news">BBC News</option>
			</select>
			<input type="text" value={this.state.keyword} placeholder="trudeau" onChange={this.handleInputChange} id="searchbox"></input>
			</form>
			</div>
			);
		}
}

function App() {
	function keywordSearch() {
		var keyword = document.getElementById("searchbox").value;
		console.log(keyword);
		var source = document.getElementById("selectbox").value;
		console.log(source);
			newsapi.v2.everything({q: 'oil',sources: 'bbc-news', domains:'bbc.co.uk'}).then(response => {
			console.log(response);});
		return null;
		}
	const alist = new ArticleList;
	console.log("meme");
	newsapi.v2.everything({q: 'oil',sources: 'bbc-news', domains:'bbc.co.uk'}).then(response => {
			console.log(response);});
	return (
	<div className="App">
	<h1>News Aggregate</h1>
	<FullBar />
	<button form="form1" onClick={keywordSearch}
	 type="submit">Search</button>
	</div>
	);
}

class SearchBox extends React.Component {
	render() {
		return (<input type="text" placeholder="Enter keyword/phrase" name="searchbox"></input>);
	}
}





export default App;
	