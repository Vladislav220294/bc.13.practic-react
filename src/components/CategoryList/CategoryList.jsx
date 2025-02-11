
import { Component } from 'react';
import {nanoid  }from 'nanoid'
class CategoryList extends Component {
    state = { inputCategory: '' };
    handleInputChange = (e) => {
        const { value } = e.target;
        this.setState({ inputCategory: value });
    }
    handleSubmitNewCategory = (e) => {
        e.preventDefault();
        const newCategory = {
            title: inputCategory,
            id: nanoid(),
        }
        this.props.addCategory(newCategory)
this.reset()
    }

    reset = () => {
        this.setState({ inputCategory:''  });
    }
    render() {
        const { categoriesList } = this.props;
        return (<>
            <ul> {categoriesList.map(el => <li key={el.id}>
                <p>{el.title }</p>
                    <button type='button'></button>
                    <div><button>Delete</button><button>Edit</button></div>
                </li>)}
                
            </ul>
            <form action="" onSubmit={this.handleSubmit}>
<input  onChange={this.handleInputChange} type="text" placeholder='New category...' value={this.state.inputCategory}/>
<button type='submit'>+</button>
            </form>
        </>);
    }
}
 
export default CategoryList;