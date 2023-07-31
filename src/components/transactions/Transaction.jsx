import editImage from '../../assets/images/edit.svg';
import deleteImage from '../../assets/images/delete.svg';
import { useDispatch } from 'react-redux';
import { editActive, removeTransaction } from '../../features/transaction/transactionSlice';

const Transaction = ({ transaction }) => {
    const { name, type, amount, id } = transaction || {};
    const dispatch = useDispatch();
    const handleEdit = () => {
        dispatch(editActive(transaction))
    }
    const handleDelete = () => {
        dispatch(removeTransaction(id))
    }
    return (
        <li className={`transaction ${type}`}>
            <p>{name}</p>
            <div className="right">
                <p>৳ {amount}</p>
                <button onClick={handleEdit} className="link">
                    <img
                        className="icon"
                        src={editImage}
                        alt="Edit"
                    />
                </button>
                <button onClick={handleDelete} className="link">
                    <img
                        className="icon"
                        src={deleteImage}
                        alt="Delete"
                    />
                </button>
            </div>
        </li>
    );
};

export default Transaction;