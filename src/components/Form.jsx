import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTransaction } from "../features/transaction/transactionSlice";

const Form = () => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [amount, setAmount] = useState('')
    const dispatch = useDispatch();
    const { isError, isLoading } = useSelector(state => state.transaction)
    const handleCreate = (e) => {
        e.preventDefault();
        dispatch(createTransaction({
            name, type, amount: Number(amount)
        }))

    }
    return (
        <div className="form">
            <h3>Add new transaction</h3>
            <form onSubmit={handleCreate}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="My Salary"
                    />
                </div>

                <div className="form-group radio">
                    <label>Type</label>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="income"
                            required
                            name="type"
                            checked={type === "income"}
                            onChange={(e) => setType(e.target.value)}
                        />
                        <label>Income</label>
                    </div>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="expense"
                            name="type"
                            placeholder="Expense"
                            checked={type === "expense"}
                            onChange={(e) => setType(e.target.value)}
                        />
                        <label>Expense</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Amount</label>
                    <input
                        type="number"
                        placeholder="300"
                        required
                        name="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

                <button disabled={isLoading} className="btn" type="submit">Add Transaction</button>
                {!isLoading && isError && (
                    <p className="error">An error has occured .</p>
                )}
            </form>
            <button className="btn cancel_edit">Cancel Edit</button>
        </div>
    );
};

export default Form;