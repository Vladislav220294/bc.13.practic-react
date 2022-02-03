import { Component } from "react";

class TransactionForm extends Component {
  state = {
    date: '2022-02-03',
    time: '',
    category: 'eat',
    summary: '',
    currency: 'UAH',
    comment: '',
    categoriesList: [],
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    
  }

  handleSubmit = ((e) => {
    e.prevent.Default();

  })
  render() {
    const {categoriesList, date, time, category, summary, currency, comment} = this.state
    return (
    <>
      <select name="transactionType" id="">
        <option value="Incomes">Доходы</option>
        <option value="Expends">Расходы</option>
      </select>
      <form action="" onSubmit={this.handleSubmit}>
        <label>
          Day
            <input type="date" name='date' value={date}  onChange={this.handleChange}/>
        </label>

        <label>
          Time
          <input type="time" name='time' value={time} onChange={this.handleChange}/>
        </label>

        <label>
          Category
            <input  type="button" name='category' value={category } onClick={null}/>
        </label>

        <label>
          Summary
          <input type="text" placeholder="Enter sum" name='summary' value={summary} onChange={this.handleChange}/>
        </label>

              <label>
                  Currency
            <input type="button"  name='currency' value={currency} onClick={null}/>
        </label>

        <label>
            <input type="text" placeholder="comment" name='comment' comment={ comment} onChange={this.handleChange}/>
          </label>
          <button type="submit">Submit</button>
        </form>
        <CategoryList categoriesList={categoriesList}/>
    </>
  );
  }

};

export default TransactionForm;