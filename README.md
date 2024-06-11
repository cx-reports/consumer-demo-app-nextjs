![Tux, the Linux mascot](public/images/cx-reports-logo-dark.svg)

# CxReports Consumer Demo Application

**This application demonstrates how CxReports software can be integrated into third-party applications.**

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (v18.17 or later)
- macOS, Windows (including WSL), and Linux are supported.

## Installation

Follow these steps to set up and run the application:

1. Clone the GitHub repository:

   ```bash
   git clone https://github.com/cx-reports/consumer-demo-app-nextjs/tree/main
   ```

2. Navigate to the project directory and install the necessary packages:

   ```bash
   cd consumer-demo-app-nextjs
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the application in action.

## Configuration

To configure the application, follow these steps:

1. Create a .env.local file in the root directory of the project.

2. Add any necessary environment variables to this file. For example:

```bash
BASE_URL="YOUR_BASE_URL"
DEFAULT_WORKSPACE_ID=YOUR_WORKSPACE_ID
AUTH_TOKEN="YOUR_AUTH_TOKEN"
```

3. Save the file and restart the development server if it is already running.

## Support

For further assistance, please [contact](https://www.cx-reports.com/contact) our support team or check out the official [documentation](https://docs.cx-reports.com/).
