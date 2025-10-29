import React from 'react';
import { TrendingUp, DollarSign, Users, Zap, Target, Award } from 'lucide-react';
import './Metrics.css';

export default function Metrics() {
  const metrics = [
    {
      icon: TrendingUp,
      value: "10%",
      label: "Conversion Increase",
      description: "Boosted web app conversions at Athlete Tech Group",
      color: "#1E90FF" // blue for growth
    },
    {
      icon: DollarSign,
      value: "$100K",
      label: "Revenue Generated",
      description: "Limited-edition product line at Carter-Ryan Gallery",
      color: "#28A745" // green for money/revenue
    },
    {
      icon: Users,
      value: "40+",
      label: "Community Members",
      description: "Grew MacEwan University Climbing Club membership",
      color: "#FFC107" // yellow for people/community
    },
    {
      icon: Zap,
      value: "50%",
      label: "Delivery Time Reduction",
      description: "Cut client project timelines at Carmella Marketing",
      color: "#FF5733" // orange/red for speed/efficiency
    },
    {
      icon: Target,
      value: "2x",
      label: "Client Sales Growth",
      description: "Helped small businesses double online sales with Sinomii",
      color: "#6F42C1" // purple for achievement/goal
    },
    {
      icon: Award,
      value: "90%",
      label: "Profit Margin",
      description: "Achieved on new product lines at Carter-Ryan Gallery",
      color: "#FFD700" // gold for success/profit
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
                <div className="metric-icon-wrapper" style={{ backgroundColor: metric.color + "20" }}>
                  <IconComponent className="metric-icon" style={{ color: metric.color }} />
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
            All metrics represent actual outcomes from products and initiatives I've led
          </p>
        </div>
      </div>
    </section>
  );
}
