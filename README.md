From inside `finlogger-dashboard`:

```bash
cat > README.md <<'EOF'
# FinLogger Dashboard

A responsive React dashboard UI for tracking monthly expenses. Built with React Bootstrap and Context API as part of a capstone-style project. This implementation focuses on the dashboard layout, modal UI, and form validation (no backend persistence).

## Features

- **Responsive Dashboard UI** (desktop/tablet/mobile)
- **Overview section**
  - Month picker
  - Total expenses, monthly income, and balance cards
- **Expense Summary** table (by category)
- **Expense Details** table (date, description, amount)
  - Edit opens modal in **edit** mode
  - Delete opens a confirmation modal
- **Expense Modal**
  - Add / Edit modes
  - Required field validation with Bootstrap feedback

## Tech Stack

- React (Create React App)
- React Bootstrap
- Context API for global state
- Basic client-side form validation

## Project Structure

```

src/
components/
Header.js
Overview.js
OverviewCard.js
ExpenseSummary.js
ExpenseDetails.js
ExpenseModal.js
DeleteConfirmationModal.js
context/
AppContext.js
ExpenseModalContext.js
data.js
public/
images/

````

> Note: Icons used in tables/cards are served from `public/images`.

## Getting Started

### Prerequisites
- Node.js (LTS recommended)
- npm

### Install & Run

```bash
npm install
npm start
````

Then open:

* [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

## How to Use

* Select a month from the month input in the Overview section.
* Click **Add Expense** to open the expense modal in **add** mode.
* Click the **edit** icon in Expense Details to open the modal in **edit** mode (prefilled).
* Click the **delete** icon to open the delete confirmation modal.

## Notes / Limitations

* This is a UI-focused capstone implementation.
* Data is currently sourced from a local file (`src/data.js`).
* Saving/deleting expenses is not persisted (placeholder logic only).

## License

This project is provided for educational purposes.
EOF

````

## 2) Commit and push README.md

```bash
git add README.md
git commit -m "Add project README"
git push
````
