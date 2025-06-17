# FinShark - Financial Data Analysis Platform

FinShark is a full-stack web application designed to provide users with access to real-time financial data, enabling them to search for stocks, view detailed company profiles, analyze financial statements, and manage a personalized stock portfolio.

## ✨ Features

- **User Authentication**: Secure user registration and login system using JWT (JSON Web Tokens).
- **Stock Search**: Real-time stock search functionality powered by the Financial Modeling Prep (FMP) API.
- **Company Insights**: In-depth company information including:
  - **Company Profile**: General information, CEO, industry, description, etc.
  - **Financial Statements**: Access to Income Statements, Balance Sheets, and Cash Flow Statements.
  - **Key Metrics**: View important financial ratios and key performance indicators.
  - **10-K Filings**: Direct links to the latest SEC 10-K filings.
- **Portfolio Management**:
  - Add stocks to a personal portfolio.
  - View all stocks in the portfolio.
  - Remove stocks from the portfolio.
- **Stock-Specific Comments**: Users can add and view comments on individual stocks.

## 💻 Tech Stack

### Frontend

- **React 19**
- **TypeScript**
- **Tailwind CSS** for styling
- **React Router** for client-side routing
- **Axios** for API communication
- **React Hook Form** & **Yup** for form validation
- **React Toastify** for user notifications

### Backend

- **.NET 9 Web API**
- **C#**
- **Entity Framework Core** as the ORM
- **Microsoft SQL Server** for the database
- **ASP.NET Core Identity** for user management and authentication
- **JWT Bearer Tokens** for securing API endpoints

### External Services

- **Financial Modeling Prep (FMP)**: Used as the primary source for financial data.

## 🚀 Getting Started

To get the project up and running on your local machine, follow these steps.

### Prerequisites

- [.NET 9 SDK](https://dotnet.microsoft.com/download/dotnet/9.0) or later
- [Node.js](https://nodejs.org/) (which includes npm)
- [Microsoft SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) (Express edition is sufficient)

### Backend Setup

1.  **Navigate to the API directory:**
    ```bash
    cd api
    ```

2.  **Configure the Database Connection:**
    Open `api/appsettings.json` and update the `DefaultConnection` string to point to your local SQL Server instance.

    ```json
    "ConnectionStrings": {
      "DefaultConnection": "Data Source=YOUR_SERVER_NAME;Initial Catalog=finshark;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=True"
    }
    ```

3.  **Add Your FMP API Key:**
    In the same `appsettings.json` file, replace the placeholder for `FMPKey` with your actual key from [Financial Modeling Prep](https://site.financialmodelingprep.com/developer).

    ```json
    "FMPKey": "YOUR_FMP_API_KEY"
    ```

4.  **Apply Database Migrations:**
    Run the following command in the `api` directory to create the database and apply the schema.
    ```bash
    dotnet ef database update
    ```

5.  **Run the Backend Server:**
    ```bash
    dotnet run
    ```
    The API will be available at `http://localhost:5130`.

### Frontend Setup

1.  **Navigate to the Frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the `frontend` directory and add your FMP API key. This is required for some direct API calls from the frontend.

    ```
    REACT_APP_API_KEY=YOUR_FMP_API_KEY
    ```

4.  **Start the Frontend Development Server:**
    ```bash
    npm start
    ```
    The application will open in your browser at `http://localhost:3000`.

## 📂 Project Structure
