import React, { useEffect, useState } from 'react';
import { IndianRupee, TrendingUp, ShieldCheck, User } from 'lucide-react';

const ResultCard = ({ prediction, isPredicting, patientData }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (prediction && !isPredicting) {
      // Simple count up animation
      const duration = 1500;
      const steps = 60;
      const stepTime = duration / steps;
      const increment = prediction / steps;
      
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= prediction) {
          setDisplayValue(prediction);
          clearInterval(timer);
        } else {
          setDisplayValue(current);
        }
      }, stepTime);
      
      return () => clearInterval(timer);
    }
  }, [prediction, isPredicting]);

  if (!prediction && !isPredicting) {
    return (
      <div className="glass glass-card animate-fade-in delay-2 flex flex-col items-center justify-center text-center h-full" style={{ minHeight: '300px' }}>
        <ShieldCheck size={48} className="text-secondary mb-4 opacity-50" />
        <h3 className="text-xl text-text-secondary">Ready for Prediction</h3>
        <p className="mt-2 text-sm">Enter the patient details in the form to calculate the estimated insurance premium.</p>
      </div>
    );
  }

  return (
    <div className="glass glass-card animate-fade-in delay-2 flex flex-col h-full" style={{ minHeight: '300px' }}>
      <h2 className="flex items-center gap-2 mb-6 text-2xl">
        <TrendingUp className="text-secondary" size={28} />
        Prediction Result
      </h2>

      <div className="flex-1 flex flex-col items-center justify-center">
        {isPredicting ? (
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-primary-color border-t-transparent rounded-full animate-spin mb-4" style={{ borderColor: 'var(--primary-color)', borderTopColor: 'transparent' }}></div>
            <p className="text-text-secondary animate-pulse">Analyzing factors...</p>
          </div>
        ) : (
          <div className="text-center w-full">
            {patientData && (
              <div className="mb-6 pb-6 border-b border-white border-opacity-10">
                <div className="flex items-center justify-center gap-2 text-text-secondary mb-1">
                  <User size={18} />
                  <span className="font-medium text-white text-lg">{patientData.name}</span>
                </div>
                <p className="text-sm">
                  {patientData.age} yrs • {patientData.maritalStatus.charAt(0).toUpperCase() + patientData.maritalStatus.slice(1)} • {patientData.nationality === 'indian' ? 'Indian' : (patientData.nationality === 'nri' ? 'NRI' : 'Foreign National')}
                </p>
              </div>
            )}
            <p className="text-text-secondary mb-2 uppercase tracking-wider text-sm font-semibold">Estimated Premium</p>
            <div className="text-5xl font-bold text-white mb-6 flex items-center justify-center gap-1">
              <IndianRupee size={40} className="text-secondary" />
              <span>{displayValue.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            
            <div className="bg-opacity-20 bg-emerald-500 border border-emerald-500 border-opacity-30 p-4 rounded-lg mt-6">
              <p className="text-sm flex items-start gap-2 text-left">
                <ShieldCheck size={20} className="text-secondary shrink-0 mt-0.5" />
                <span>Based on the categorical encoding of factors such as Age, BMI, and Smoking status, this is the projected annual insurance cost.</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultCard;
