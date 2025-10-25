import React from 'react';
import { TrendingUp, Users, DollarSign, Zap, Target, Award } from 'lucide-react';
import './Metrics.css';

export default function Metrics() {
  const metrics = [
    {
      icon: TrendingUp,
      value: "200%",
      label: "User Growth",
      description: "Year-over-year increase"
    },
    {
      icon: DollarSign,
      value: "$2.5M",
      label: "Revenue Generated",
      description: "From new product features"
    },
    {
      icon: Users,
      value: "40%",
      label: "Churn Reduction",
      description: "Through UX improvements"
    },
    {
      icon: Zap,
      value: "60%",
      label: "Faster Time-to-Market",
      description: "Optimized delivery process"
    },
    {
      icon: Target,
      value: "95%",
      label: "Feature Adoption",
      description: "Within first quarter"
    },
    {
      icon: Award,
      value: "4.8/5",
      label: "User Satisfaction",
      description: "Average product rating"
    }
  ];

  return (
    <section className="metrics-wrapper">
      <div className="metrics-container">
        <div className="metrics-header">
          <h2 className="metrics-title">Impact at a Glance</h2>
          <p className="metrics-subtitle">
            Key metrics and outcomes from products I've managed
          </p>
        </div>

        <div className="metrics-grid">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div key={index} className="metric-card">
                <div className="metric-icon-wrapper">
                  <IconComponent className="metric-icon" />
                </div>
                <div className="metric-content">
                  <h3 className="metric-value">{metric.value}</h3>
                  <p className="metric-label">{metric.label}</p>
                  <p className="metric-description">{metric.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="metrics-footer">
          <p className="metrics-note">
            All metrics represent actual outcomes from products managed between 2020-2024
          </p>
        </div>
      </div>
    </section>
  );
}