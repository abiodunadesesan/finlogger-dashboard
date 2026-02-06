import { Table, Col } from "react-bootstrap";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { useState } from "react";
import { useExpenseModal } from "../context/ExpenseModalContext";
import { useAppContext } from "../context/AppContext";

/* Helper function to format date */
function updateDateFormat(date) {
  const d1 = new Date(date);
  const month = d1.toLocaleString("en-us", { month: "short" });
  const day = d1.getDate();
  const dayOfWeek = d1.toLocaleString("en-us", { weekday: "short" });
  return `${month} ${day}, ${dayOfWeek}`;
}

function ExpenseDetails({ data }) {
  /* Expense modal context */
  const { handleShow } = useExpenseModal();

  /* App context */
  const { setExpenseIdToBeDeleted } = useAppContext();

  /* Delete confirmation modal state */
  const [showDM, setShowDM] = useState(false);

  /* Edit expense */
  const handleEdit = (event, expense) => {
    event.preventDefault();
    handleShow("edit", expense);
  };

  /* Show delete confirmation modal */
  const handleDMShow = (event, expenseId) => {
    event.preventDefault();
    setShowDM(true);
    setExpenseIdToBeDeleted(expenseId);
  };

  /* Close delete confirmation modal */
  const handleDMClose = () => {
    setShowDM(false);
  };

  /* Delete logic (added later in course) */
  const handleDelete = () => {
    handleDMClose();
  };

  /* Build table rows */
  const tableItems = data.map((expense) => (
    <tr key={expense._id}>
      <td className="text-nowrap">{updateDateFormat(expense.date)}</td>
      <td>{expense.description}</td>
      <td>${expense.amount}</td>
      <td>
        <button
          type="button"
          className="me-2 edit expButton btn btn-link p-0"
          onClick={(e) => handleEdit(e, expense)}
        >
          <img src="./images/edit.png" alt="Edit" />
        </button>

        <button
          type="button"
          className="delete btn btn-link p-0"
          onClick={(e) => handleDMShow(e, expense._id)}
        >
          <img src="./images/delete.png" alt="Delete" />
        </button>
      </td>
    </tr>
  ));

  return (
    <Col md="8">
      <p className="heading">Expense Details</p>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th width="31%">DATE</th>
            <th width="31%">DESCRIPTION</th>
            <th width="31%">AMOUNT</th>
            <th width="7%" className="editDeleteTd"></th>
          </tr>
        </thead>
        <tbody>{tableItems}</tbody>
      </Table>

      {showDM && (
        <DeleteConfirmationModal
          showDM={showDM}
          handleDMClose={handleDMClose}
          handleDelete={handleDelete}
        />
      )}
    </Col>
  );
}

export default ExpenseDetails;

