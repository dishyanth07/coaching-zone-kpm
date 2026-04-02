import React from 'react';
import { Users, GraduationCap, Trophy } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label }) => (
  <div className="stat-card glass-card reveal-on-scroll">
    <div className="stat-icon-container">
      <Icon className="stat-icon" />
    </div>
    <div className="stat-value">{value}</div>
    <div className="stat-label">{label}</div>
  </div>
);

const TrustStats = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          <StatCard icon={Users} value="500+" label="Students Trained" />
          <StatCard icon={GraduationCap} value="50+" label="Teachers Trained" />
          <StatCard icon={Trophy} value="ISO" label="MSME Certified" />
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
