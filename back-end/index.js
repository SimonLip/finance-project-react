const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Підключення до бази даних MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/financial_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Помилка підключення до бази даних:'));
db.once('open', () => {
  console.log('Підключено до бази даних MongoDB');
});

// Схеми та моделі
const earningSchema = new mongoose.Schema({
  source: String,
  amount: Number,
  currency: String,
});

const Earning = mongoose.model('Earning', earningSchema);

const expenseSchema = new mongoose.Schema({
  source: String,
  amount: Number,
  currency: String,
});

const Expense = mongoose.model('Expense', expenseSchema);

// Маршрути для доходів
app.get('/api/earnings', async (req, res) => {
  try {
    const earnings = await Earning.find();
    res.json(earnings);
  } catch (err) {
    console.error('Помилка отримання даних про доходи:', err);
    res.status(500).send('Помилка сервера');
  }
});

app.post('/api/earnings/add', async (req, res) => {
  try {
    console.log('Отримано запит на додавання доходу:', req.body);
    const newEarning = new Earning(req.body);
    await newEarning.save();
    res.status(201).send('Дохід успішно додано');
  } catch (err) {
    console.error('Помилка додавання доходу:', err);
    res.status(500).send('Помилка сервера');
  }
});

// Маршрути для витрат
app.get('/api/expenses', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    console.error('Помилка отримання даних про витрати:', err);
    res.status(500).send('Помилка сервера');
  }
});

app.post('/api/expenses/add', async (req, res) => {
  try {
    console.log('Отримано запит на додавання витрат:', req.body);
    const newExpense = new Expense(req.body);
    await newExpense.save();
    res.status(201).send('Витрати успішно додано');
  } catch (err) {
    console.error('Помилка додавання витрат:', err);
    res.status(500).send('Помилка сервера');
  }
});

// Маршрут для видалення обраних доходів
app.post('/api/earnings/delete', async (req, res) => {
  try {
    const { ids } = req.body;
    await Earning.deleteMany({ _id: { $in: ids } });
    res.status(200).send('Доходи успішно видалено');
  } catch (err) {
    console.error('Помилка видалення обраних доходів:', err);
    res.status(500).send('Помилка сервера');
  }
});

// Маршрут для видалення обраних витрат
app.post('/api/expenses/delete', async (req, res) => {
  try {
    const { ids } = req.body;
    await Expense.deleteMany({ _id: { $in: ids } });
    res.status(200).send('Витрати успішно видалено');
  } catch (err) {
    console.error('Помилка видалення обраних витрат:', err);
    res.status(500).send('Помилка сервера');
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущено на порті ${PORT}`);
});
