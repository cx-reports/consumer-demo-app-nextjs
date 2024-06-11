![Tux, the Linux mascot](public/images/cx-reports-logo-v1.svg)

# CxReports Consumer Demo Application

**This application demonstrates how CxReports software can be integrated into third-party applications.**

<br>

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (v18.17 or later)
- macOS, Windows (including WSL), and Linux are supported.

<br>

## Installation

Follow these steps to set up and run the application:

1. Clone the GitHub repository:

   ```bash
   git clone https://github.com/cx-reports/consumer-demo-app-nextjs.git
   ```

2. Navigate to the project directory and install the necessary packages:

   ```bash
   cd consumer-demo-app-nextjs
   npm install
   ```

3. Create a .env.local file in the root directory of the project.

4. Add the following environment variables to the .env.local file, replacing the placeholder values with your actual values:

   ```bash
   BASE_URL="your_base_url"
   DEFAULT_WORKSPACE_ID=your_workspace_id
   AUTH_TOKEN="your_auth_token"
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the application in action.

<br>

## Support

For further assistance, please [contact](https://www.cx-reports.com/contact) our support team or check out the official [documentation](https://docs.cx-reports.com/).
