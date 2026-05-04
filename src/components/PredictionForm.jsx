import React, { useState } from 'react';
import { Activity } from 'lucide-react';

const PredictionForm = ({ onPredict }) => {
  const [formData, setFormData] = useState({
    name: '',
    nationality: 'indian',
    maritalStatus: 'single',
    age: '',
    sex: 'male',
    bmi: '',
    children: '0',
    smoker: 'no',
    region: 'maharashtra'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPredict(formData);
  };

  const statesAndUTs = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", 
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
    "Lakshadweep", "Delhi", "Puducherry", "Ladakh", "Jammu and Kashmir"
  ];

  return (
    <form onSubmit={handleSubmit} className="glass glass-card animate-fade-in delay-1">
      <h2 className="flex items-center gap-2 mb-6 text-2xl">
        <Activity className="text-primary" size={28} />
        Patient Details
      </h2>
      
      <div className="grid grid-cols-2">
        <div className="form-group col-span-2 md:col-span-1">
          <label htmlFor="name">Full Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="e.g. Rahul Sharma"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="nationality">Nationality</label>
          <div className="relative">
            <select id="nationality" name="nationality" value={formData.nationality} onChange={handleChange}>
              <option value="indian">Indian</option>
              <option value="nri">Non-Resident Indian (NRI)</option>
              <option value="foreign">Foreign National</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input 
            type="number" 
            id="age" 
            name="age" 
            value={formData.age} 
            onChange={handleChange} 
            placeholder="e.g. 35"
            min="18"
            max="100"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="sex">Sex</label>
          <div className="relative">
            <select id="sex" name="sex" value={formData.sex} onChange={handleChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="maritalStatus">Marital Status</label>
          <div className="relative">
            <select id="maritalStatus" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="bmi">BMI (Body Mass Index)</label>
          <input 
            type="number" 
            step="0.1"
            id="bmi" 
            name="bmi" 
            value={formData.bmi} 
            onChange={handleChange} 
            placeholder="e.g. 25.4"
            min="10"
            max="60"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="children">Number of Children</label>
          <div className="relative">
            <select id="children" name="children" value={formData.children} onChange={handleChange}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5 or more</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="smoker">Smoker Status</label>
          <div className="relative">
            <select id="smoker" name="smoker" value={formData.smoker} onChange={handleChange}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="region">State / Union Territory</label>
          <div className="relative">
            <select id="region" name="region" value={formData.region} onChange={handleChange}>
              {statesAndUTs.map((state) => (
                <option key={state} value={state.toLowerCase()}>{state}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
          Calculate Premium
        </button>
      </div>
    </form>
  );
};

export default PredictionForm;
