
import { Component } from 'react';

class CategoryList extends Component {
    state = { inputCategory: '' };
    handleInputChange = (e) => {
        const { value } = e.target;
        this.setState({ inputCategory: value });
    }
    render() {
        const { categoriesList } = this.props;
        return (<>
            <ul> {categoriesList.map(el => <li>
                    <p></p>
                    <button type='button'></button>
                    <div><button>Delete</button><button>Edit</button></div>
                </li>)}
                
            </ul>
            <form action="">
<input  onChange={this.handleInputChange} type="text" placeholder='New category...' value={this.state.inputCategory}/>
<button type='submit'>+</button>
            </form>
        </>);
    }
}
 
export default CategoryList;