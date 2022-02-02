const TransactionForm = () => {
  return (
    <>
      <select name="transactionType" id="">
        <option value="Incomes">Доходы</option>
        <option value="Expends">Расходы</option>
      </select>
      <form action="">
        <label>
          Day
          <input type="date" />
        </label>

        <label>
          Time
          <input type="time" />
        </label>

        <label>
          Category
          <input  value="eat" type="button"/>
        </label>

        <label>
          Summary
          <input type="text" placeholder="Enter sum"/>
        </label>

              <label>
                  Currency
          <input type="text" value="UAH"/>
        </label>

        <label>
          <input type="text" placeholder="comment"/>
        </label>
      </form>
    </>
  );
};

export default TransactionForm;