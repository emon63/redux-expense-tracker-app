import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTransaction, createTransaction } from "../features/transaction/transactionSlice";

const Form = () => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [amount, setAmount] = useState('')
    const [editMode, setEditMode] = useState(false)
    const dispatch = useDispatch();
    const { isError, isLoading } = useSelector(state => state.transaction)
    const { editing } = useSelector(state => state.transaction);
    useEffect(() => {
        const { id, name, type, amount } = editing || {};
        if (id) {
            setEditMode(true);
            setName(name);
            setAmount(amount);
            setType(type);
        } else {
            setEditMode(false);
            reset()
        }
    }, [editing])

    const reset = () => {
        setName('');
        setAmount('');
        setType('');
    }
    const handleCreate = (e) => {
        e.preventDefault();
        dispatch(createTransaction({
            name, type, amount: Number(amount)
        }));
        reset();
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(changeTransaction({
            id: editing?.id,
            data: {
                name: name, type: type, amount: amount
            }
        }));
        reset();
        setEditMode(false)
    }


    const cancelEditMode = () => {
        reset();
        setEditMode(false)
    }

    return (
        <div className="form">
            <h3>Add new transaction</h3>
            <form onSubmit={editMode ? handleUpdate : handleCreate}>
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

                <button disabled={isLoading} className="btn" type="submit">{editMode ? 'Update Transaction' : 'Add Transaction'}</button>
                {!isLoading && isError && (
                    <p className="error">An error has occured .</p>
                )}
            </form>
            {editMode && <button onClick={cancelEditMode} className="btn cancel_edit">Cancel Edit</button>}
        </div>
    );
};

export default Form;