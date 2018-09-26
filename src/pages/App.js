import React, { Component} from 'react'
import SearchBar from '../components/SearchBar'
import BlogList from "../components/BlogList";

const link =
  "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";

class App extends Component {
    //constructor
    constructor(){
        super()
    
    this.state = {
        loading:true,
        blogs: [],
        filteredBlogs: []
    }
}


handleTypeSearch = event =>{
   const filteredBlogs = this.state.blogs.filter(
     blog => blog.title.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
   )
   this.setState({ 
       filteredBlogs: filteredBlogs 
    })
}

componentDidMount(){
    this.handleGetBlogs()
}

handleGetBlogs = () => {
    fetch(link)
    .then(res => res.json())
    .then(res => this.setState({blogs: res, filteredBlogs: res, loading: false}))
}

    render() {

        console.log(this.state.filteredBlogs)

        if(this.state.loading === true){
        return (
                <h1>Loading</h1>
            )
        }

    return (
      <div>
          <SearchBar
            search={this.state.search}
            onChangeSearch={this.handleTypeSearch}
            />
            {this.state.filteredBlogs.map((blog,index) => (
            <BlogList
            key={index}
            title={blog.title}
            content={blog.content}
            author={blog.author}
            />
            ))}
      </div>
    )
  }
}

export default App