# Employee Management System

## 🚀 Project Overview
This is a modern React-based employee management system that demonstrates CRUD operations and authentication using the ReqRes API. The application showcases best practices in React development, state management, and responsive design using Tailwind CSS.

## ✨ Features
- **Authentication**
  - Secure login system with JWT tokens
  - Protected routes for authorized users
  - Persistent login state using localStorage
  
- **User Management**
  - View all users with pagination
  - Search users by name
  - Edit user details
  - Delete users
  - Responsive user cards
  
- **UI/UX**
  - Clean, modern interface with Tailwind CSS
  - Toast notifications for user feedback
  - Loading states and error handling
  - Mobile-responsive design

## 🛠️ Installation

1. Clone the repository
```bash
git clone <repository-url>
cd employee-management-system
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file in the root directory
```env
VITE_API_URL=https://reqres.in/api
```

## 🚦 Running the Application

1. Start the development server
```bash
npm run dev
```

2. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📡 API Endpoints

| Endpoint | Method | Description | Auth Required |
|----------|--------|-------------|---------------|
| `/login` | POST | User authentication | No |
| `/users` | GET | Fetch users list | Yes |
| `/users/:id` | GET | Get single user | Yes |
| `/users/:id` | PUT | Update user | Yes |
| `/users/:id` | DELETE | Delete user | Yes |

## 🔍 Key Dependencies
- React 18
- React Router v6
- Axios
- React-Toastify
- Tailwind CSS
- Vite

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Usage Notes
- Default login credentials:
  - Email: `eve.holt@reqres.in`
  - Password: `cityslicka`
- The application uses the ReqRes API for demonstration purposes
- All CRUD operations are simulated with the ReqRes API endpoints

## ⚖️ License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments
- [ReqRes API](https://reqres.in) for providing the test API
- [Tailwind CSS](https://tailwindcss.com) for the styling framework
- [React-Toastify](https://fkhadra.github.io/react-toastify) for notifications# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
