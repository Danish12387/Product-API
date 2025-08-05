<!DOCTYPE html>
<body>
  <h1>🛒 Product API – RESTful Service for Product & Pricing Data</h1>

  <p>
    A Node.js RESTful API built for <strong>myStore</strong>, simulating real-world product information aggregation using data from an external source
    (<a href="https://fakestoreapi.com" target="_blank">fakestoreapi.com</a>) and local pricing data stored in MongoDB.
  </p>

  <h2>📦 Features</h2>
  <ul>
    <li><code>GET /products/:id</code> – Fetch product title from external API + price from MongoDB</li>
    <li><code>PUT /products/:id</code> – Update product price (value & currency) in MongoDB</li>
    <li><code>POST /seed-prices</code> – Seed dummy prices for selected product IDs (for development/testing)</li>
  </ul>

  <h2>⚙️ Tech Stack</h2>
  <ul>
    <li><strong>Backend:</strong> Node.js, Express.js</li>
    <li><strong>Database:</strong> MongoDB (Mongoose ODM)</li>
    <li><strong>External API:</strong> <a href="https://fakestoreapi.com">Fake Store API</a></li>
    <li><strong>Validation:</strong> Mongoose Schema Validators</li>
    <li><strong>Error Handling:</strong> Centralized middleware</li>
  </ul>

  <h2>🚀 Getting Started</h2>
  <ol>
    <li><strong>Clone the Repository:</strong>
      <pre><code>git clone https://github.com/Danish12387/Product-API.git
cd Product-API</code></pre>
    </li>
    <li><strong>Install Dependencies:</strong>
      <pre><code>npm install</code></pre>
    </li>
    <li><strong>Create a .env file:</strong>
      <pre><code>PORT=5000
NODE_ENV=''
DB_URI=mongodb+srv://&lt;username&gt;:&lt;password&gt;@cluster.mongodb.net/product-api</code></pre>
    </li>
    <li><strong>Run the Server:</strong>
      <pre><code>npm run dev</code></pre>
    </li>
  </ol>
  <p>Visit: <code>http://localhost:5000</code></p>

  <h2>📡 API Endpoints</h2>

  <h3>➤ GET /products/:id</h3>
  <p>Fetches product data from FakeStoreAPI and price from MongoDB.</p>
  <pre><code>{
  "id": 13,
  "title": "The Big Lebowski (Blu-ray) (Widescreen)",
  "current_price": {
    "value": 13.49,
    "currency_code": "USD"
  }
}</code></pre>

  <h3>➤ PUT /products/:id</h3>
  <p>Updates the price of a product.</p>
  <pre><code>{
  "current_price": {
    "value": 99.99,
    "currency_code": "USD"
  }
}</code></pre>

  <p><strong>Validation:</strong> value must be > 0 and currency must be one of:
    <code>USD, EUR, GBP, INR, JPY, AUD, CAD, CNY, RUB, BRL, PKR, ZAR</code></p>

  <h3>➤ POST /seed-prices</h3>
  <p>Seeds dummy prices for development.</p>
  <pre><code>{
  "message": "Dummy prices added successfully",
  "insertedCount": 7
}</code></pre>

  <h2>🧾 MongoDB Document Example</h2>
  <pre><code>{
  "_id": "64dxxxxxxx",
  "productId": 13,
  "value": 13.49,
  "currency_code": "USD"
}</code></pre>

  <h2>🛡️ Production Readiness</h2>
  <ul>
    <li>✅ Centralized error handling</li>
    <li>✅ Uses environment variables</li>
    <li>✅ Mongoose schema validation</li>
    <li>✅ Dev-only dummy seed route</li>
  </ul>

  <h2>📁 Project Structure</h2>
  <pre><code>
Product-API/
├── config/
│   └── env.js
├── database/
│   └── mongodb.js
├── controllers/
│   └── product.controller.js
├── models/
│   └── Product.price.js
├── routes/
│   └── product.route.js
├── middlewares/
│   └── error.middleware.js
├── .env.example
├── app.js
├── .gitignore
├── README.md
└── package.json
  </code></pre>

  <h2>👨‍💻 Author</h2>
  <p><strong>Syed Muhammad Danish</strong> – <a href="https://github.com/Danish12387">GitHub Profile</a></p>
</body>
</html>
