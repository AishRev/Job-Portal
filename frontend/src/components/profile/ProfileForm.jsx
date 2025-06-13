// src/components/Profile/ProfileForm.jsx
import React, { useState } from 'react';
import { updateProfile } from '../../api/api';
import { useNavigate } from 'react-router-dom';

const ProfileForm = () => {
  const [jobPreference, setJobPreference] = useState('');
  const [resume, setResume] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('jobPreference', jobPreference);
    if (resume) formData.append('resume', resume);

    try {
      await updateProfile(formData);
      navigate('/dashboard');
    } catch (err) {
      alert('Profile update failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Profile Setup</h2>
      <input
        type="text"
        value={jobPreference}
        onChange={(e) => setJobPreference(e.target.value)}
        placeholder="Preferred Job Role"
        required
      />
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={(e) => setResume(e.target.files[0])}
      />
      <button type="submit">Save Profile</button>
    </form>
  );
};

export default ProfileForm;
