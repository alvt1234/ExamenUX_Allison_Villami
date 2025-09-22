import logo from './logo.svg';
import './App.css';
import axiosInstance from './api/axiosInstance';
import Tours from './Tours'; 
function App() {
  const testApiCall = async () => {
    try {
      const response = await axiosInstance.get('/test');
      console.log('API Response:', response.data);
    } catch (error) {
      console.error('API Error:', error);
    }
  };
  testApiCall();
  return (
    <div className="App">
      <Tours></Tours>
    </div>
  );
}

export default App;
