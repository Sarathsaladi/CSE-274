import React, { useState } from 'react';
import PredictionForm from './components/PredictionForm';
import ResultCard from './components/ResultCard';
import { Shield, Sparkles } from 'lucide-react';

function App() {
  const [prediction, setPrediction] = useState(null);
  const [isPredicting, setIsPredicting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handlePredict = (data) => {
    setIsPredicting(true);
    setPrediction(null);
    setSubmittedData(data);
    
    // Simulate ML model prediction delay
    setTimeout(() => {
      // Mock calculation for INR premium demonstration
      let basePremium = 12000; // Base premium of ₹12,000
      
      // Age factor
      basePremium += (parseInt(data.age) - 18) * 300;
      
      // BMI factor (assuming normal is around 25)
      if (parseFloat(data.bmi) > 25) {
        basePremium += (parseFloat(data.bmi) - 25) * 500;
      }
      
      // Smoker factor (huge impact)
      if (data.smoker === 'yes') {
        basePremium += 25000;
      }
      
      // Children factor
      basePremium += parseInt(data.children) * 2000;

      // Region factor (metro areas cost slightly more)
      const metroStates = ['maharashtra', 'delhi', 'karnataka', 'tamil nadu'];
      if (metroStates.includes(data.region)) {
        basePremium += 3000;
      } else if (data.region === 'gujarat') {
        basePremium += 1500;
      }
      
      // Nationality factor
      if (data.nationality === 'nri') {
        basePremium += 5000;
      } else if (data.nationality === 'foreign') {
        basePremium += 10000;
      }
      
      // Marital status factor
      if (data.maritalStatus === 'married') {
        basePremium -= 1500; // slight discount for married couples
      } else if (data.maritalStatus === 'single') {
        basePremium += 500;
      }

      setPrediction(basePremium);
      setIsPredicting(false);
    }, 1500);
  };

  return (
    <div className="container">
      {/* Hero Section */}
      <header className="text-center mb-12 mt-8 animate-fade-in">
        <div className="inline-flex items-center justify-center p-3 glass rounded-full mb-6">
          <Shield className="text-primary-color" size={32} style={{ color: 'var(--primary-color)' }} />
        </div>
        <h1 className="flex items-center justify-center gap-3">
          Insurance Premium Prediction
          <Sparkles className="text-yellow-400" size={32} />
        </h1>
        <p className="text-lg max-w-2xl mx-auto mt-4">
          Advanced categorical encoding and predictive analytics to accurately estimate health insurance costs based on personal factors.
        </p>
      </header>

      {/* Main Content */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 gap-6 max-w-6xl mx-auto">
        <div className="w-full">
          <PredictionForm onPredict={handlePredict} />
        </div>
        <div className="w-full">
          <ResultCard prediction={prediction} isPredicting={isPredicting} patientData={submittedData} />
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 text-center text-text-secondary text-sm pb-8 animate-fade-in delay-3">
        <p>© 2026 Predictive Health Analytics. For demonstration purposes only.</p>
      </footer>
    </div>
  );
}

export default App;
