import React, { useState } from 'react';
import './BackLog.css';
import { ChevronDown, ChevronRight, CheckCircle, Clock, TrendingUp, DollarSign, Target, Code, Briefcase } from 'lucide-react';
const ProductBacklog = () => {
  const [expandedEpics, setExpandedEpics] = useState({});
  const [filterStatus, setFilterStatus] = useState('all');
  const epics = [
    {
      id: 1,
      title: "Mobile-to-Web Platform Migration",
      organization: "Athlete Tech Group",
      timeline: "Feb 2024 – Mar 2024",
      icon: <Code className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
      items: [
        {
          id: "PBI-101",
          title: "Develop Responsive Web Application MVP",
          userStory: "As an existing mobile app user, I want to access the platform via web browser so that I can use the service on any device",
          acceptanceCriteria: [
            "Responsive design works across desktop, tablet, and mobile",
            "Feature parity with core mobile app functionality",
            "Seamless user authentication and session management"
          ],
          impact: "10% increase in user conversions",
          status: "delivered",
          timeline: "2-month timeline"
        },
        {
          id: "PBI-102",
          title: "Execute End-to-End Database Migration",
          userStory: "As a system administrator, I want to migrate from legacy database to modern infrastructure so that the platform is scalable and performant",
          acceptanceCriteria: [
            "Zero data loss during migration",
            "Improved query performance and scalability",
            "Rollback plan documented and tested"
          ],
          impact: "28% reduction in infrastructure costs",
          status: "delivered"
        },
        {
          id: "PBI-103",
          title: "Coordinate Cross-Functional Agile Delivery",
          userStory: "As a product manager, I need to align dev teams, contractors, and third-party developers so that we deliver MVP on schedule",
          acceptanceCriteria: [
            "Sprint planning and backlog grooming completed bi-weekly",
            "Clear communication channels established",
            "Deliverables meet acceptance criteria"
          ],
          impact: "Successful 2-month MVP delivery with multiple teams",
          status: "delivered"
        }
      ]
    },
    {
      id: 2,
      title: "Agency Process Optimization & Client Delivery",
      organization: "Carmella Marketing",
      timeline: "May 2024 – Sep 2024",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
      items: [
        {
          id: "PBI-201",
          title: "Implement AI-Powered Wireframe Review Process",
          userStory: "As a design team, we want to streamline wireframe reviews so that we reduce revision cycles and deliver faster",
          acceptanceCriteria: [
            "AI tools integrated into design workflow",
            "Low-fidelity prototypes created for client review",
            "Structured feedback loops established"
          ],
          impact: "50% reduction in delivery timeline, 18% increase in company sales",
          status: "delivered"
        },
        {
          id: "PBI-202",
          title: "Design & Develop Client Websites with Sales Funnels",
          userStory: "As a client, I want a website with integrated sales funnels so that I can convert visitors into customers effectively",
          acceptanceCriteria: [
            "Full website design and development completed",
            "Sales funnel optimization implemented",
            "Analytics and conversion tracking enabled"
          ],
          impact: "34% boost in client sales",
          status: "delivered"
        },
        {
          id: "PBI-203",
          title: "Standardize Development Delivery Process",
          userStory: "As a development team, we need standardized processes so that we deliver projects consistently and on time",
          acceptanceCriteria: [
            "Two-week delivery cycle established",
            "Product management best practices applied",
            "Quality standards maintained"
          ],
          impact: "100% on-time delivery rate",
          status: "delivered"
        }
      ]
    },
    {
      id: 3,
      title: "Limited Edition Product Line Launch",
      organization: "Carter-Ryan Gallery",
      timeline: "Aug 2021 – May 2022",
      icon: <Target className="w-5 h-5" />,
      color: "from-orange-500 to-red-500",
      items: [
        {
          id: "PBI-301",
          title: "Create Limited-Edition Product Line",
          userStory: "As a gallery customer, I want access to exclusive limited-edition products so that I can own unique art pieces",
          acceptanceCriteria: [
            "Product line designed for new target demographic",
            "Manufacturing and quality standards met",
            "Marketing strategy aligned with launch"
          ],
          impact: "$100K revenue in 4 months",
          status: "delivered"
        },
        {
          id: "PBI-302",
          title: "Implement Demand Forecasting & Inventory Alignment",
          userStory: "As a retail operations manager, I need to forecast demand accurately so that product availability matches customer trends",
          acceptanceCriteria: [
            "Cross-functional collaboration with sales and inventory teams",
            "Data-driven demand forecasting model",
            "Inventory levels optimized for trends"
          ],
          impact: "Improved product availability and customer satisfaction",
          status: "delivered"
        },
        {
          id: "PBI-303",
          title: "Optimize Backend Systems & Customer Flow",
          userStory: "As a business owner, I want streamlined operations so that we maximize profitability and customer experience",
          acceptanceCriteria: [
            "Backend systems optimized for efficiency",
            "Customer journey mapped and improved",
            "Operational costs reduced"
          ],
          impact: "90% profit margin achieved",
          status: "delivered"
        }
      ]
    },
    {
      id: 4,
      title: "Flagship Store Launch & Operations",
      organization: "Arc'teryx Banff",
      timeline: "Feb 2025 – Present",
      icon: <Briefcase className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500",
      items: [
        {
          id: "PBI-401",
          title: "Launch First Arc'teryx Mountain Store in North America",
          userStory: "As a retail operations team, we need to successfully launch the flagship mountain store so that we establish Arc'teryx presence in the market",
          acceptanceCriteria: [
            "Inventory setup and merchandising completed",
            "Product flow optimized for store layout",
            "Launch day operations executed flawlessly"
          ],
          impact: "$1M+ in sales within first 6 weeks",
          status: "delivered"
        },
        {
          id: "PBI-402",
          title: "Implement Gear Library Program",
          userStory: "As a customer, I want to test gear before purchasing so that I make informed buying decisions",
          acceptanceCriteria: [
            "Gear library program launched and promoted",
            "Customer engagement tracking implemented",
            "Product usage and demand data collected"
          ],
          impact: "Increased customer engagement and conversion",
          status: "delivered"
        },
        {
          id: "PBI-403",
          title: "Optimize Localized Inventory Allocation",
          userStory: "As an inventory manager, I need actionable insights on local trends so that we stock the right products at the right time",
          acceptanceCriteria: [
            "In-store inventory trends analyzed",
            "Feedback provided to allocation team",
            "Customer needs aligned with product availability"
          ],
          impact: "Improved inventory efficiency and sales performance",
          status: "in-progress"
        }
      ]
    },
    {
      id: 5,
      title: "E-Commerce Platform Development",
      organization: "Sinomii (Founder/CEO)",
      timeline: "2024 – 2025",
      icon: <DollarSign className="w-5 h-5" />,
      color: "from-indigo-500 to-blue-500",
      items: [
        {
          id: "PBI-501",
          title: "Build Custom Web Development Platform for SMBs",
          userStory: "As a small business owner, I want a professional website so that I can establish my online presence and grow sales",
          acceptanceCriteria: [
            "Full-stack development (UI/UX, frontend, backend)",
            "Custom website tailored to client needs",
            "Deployment and hosting configured"
          ],
          impact: "Multiple clients achieved 2x sales growth",
          status: "delivered"
        },
        {
          id: "PBI-502",
          title: "Implement SEO & Analytics Solutions",
          userStory: "As a business owner, I want my website to be discoverable and trackable so that I can measure ROI and attract customers",
          acceptanceCriteria: [
            "SEO best practices implemented",
            "Analytics tracking configured",
            "Content management system integrated"
          ],
          impact: "Improved online visibility and data-driven decision making",
          status: "delivered"
        }
      ]
    },
    {
      id: 6,
      title: "Technical Product Development",
      organization: "Personal Projects",
      timeline: "2023",
      icon: <Code className="w-5 h-5" />,
      color: "from-yellow-500 to-orange-500",
      items: [
        {
          id: "PBI-601",
          title: "Petal Profits - Personal Finance Application",
          userStory: "As a user, I want a gamified finance app so that I can understand my finances through an engaging garden-growing analogy",
          acceptanceCriteria: [
            "Financial data visualization",
            "Budgeting tools with garden growth metaphor",
            "Financial literacy education components"
          ],
          impact: "Full-stack PERN application completed",
          status: "delivered",
          techStack: "PostgreSQL, Express, React, Node"
        },
        {
          id: "PBI-602",
          title: "Scheduler - Real-Time Appointment Management",
          userStory: "As a user, I want to manage appointments in real-time so that all clients see updated schedules instantly",
          acceptanceCriteria: [
            "Real-time updates across all clients",
            "Create, update, delete appointments",
            "Component-driven development with testing"
          ],
          impact: "WebSocket-powered real-time collaboration",
          status: "delivered",
          techStack: "React, Storybook, Cypress, Axios, Jest"
        }
      ]
    }
  ];
  const toggleEpic = (epicId) => {
    setExpandedEpics(prev => ({
      ...prev,
      [epicId]: !prev[epicId]
    }));
  };
  const getStatusBadge = (status) => {
    if (status === 'delivered') {
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
          <CheckCircle className="w-3 h-3" />
          Delivered
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
        <Clock className="w-3 h-3" />
        In Progress
      </span>
    );
  };
  const filteredEpics = epics.map(epic => ({
    ...epic,
    items: epic.items.filter(item =>
      filterStatus === 'all' || item.status === filterStatus
    )
  })).filter(epic => epic.items.length > 0);
  const totalItems = epics.reduce((sum, epic) => sum + epic.items.length, 0);
  const deliveredItems = epics.reduce((sum, epic) =>
    sum + epic.items.filter(item => item.status === 'delivered').length, 0
  );
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Product Backlog</h1>
              <p className="text-lg text-slate-600">Mathew Steenwinkel - Product Manager Portfolio</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-600">{deliveredItems}/{totalItems}</div>
              <div className="text-sm text-slate-600">Items Delivered</div>
            </div>
          </div>
          <div className="flex gap-2 mt-6">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${filterStatus === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
            >
              All Items
            </button>
            <button
              onClick={() => setFilterStatus('delivered')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${filterStatus === 'delivered'
                  ? 'bg-green-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
            >
              Delivered
            </button>
            <button
              onClick={() => setFilterStatus('in-progress')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${filterStatus === 'in-progress'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
            >
              In Progress
            </button>
          </div>
        </div>

        {/* Epics */}
        <div className="space-y-4">
          {filteredEpics.map((epic) => (
            <div key={epic.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* Epic Header */}
              <button
                onClick={() => toggleEpic(epic.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${epic.color} text-white`}>
                    {epic.icon}
                  </div>
                  <div className="text-left">
                    <h2 className="text-xl font-bold text-slate-900">{epic.title}</h2>
                    <div className="flex gap-4 mt-1 text-sm text-slate-600">
                      <span className="font-medium">{epic.organization}</span>
                      <span>•</span>
                      <span>{epic.timeline}</span>
                      <span>•</span>
                      <span>{epic.items.length} items</span>
                    </div>
                  </div>
                </div>
                {expandedEpics[epic.id] ? (
                  <ChevronDown className="w-6 h-6 text-slate-400" />
                ) : (
                  <ChevronRight className="w-6 h-6 text-slate-400" />
                )}
              </button>

              {/* Epic Items */}
              {expandedEpics[epic.id] && (
                <div className="border-t border-slate-200">
                  {epic.items.map((item, index) => (
                    <div
                      key={item.id}
                      className={`p-6 ${index !== epic.items.length - 1 ? 'border-b border-slate-100' : ''
                        }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-xs font-mono font-semibold text-slate-500">
                              {item.id}
                            </span>
                            {getStatusBadge(item.status)}
                          </div>
                          <h3 className="text-lg font-semibold text-slate-900 mb-2">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4 rounded-r">
                        <p className="text-sm text-slate-700 italic">{item.userStory}</p>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-slate-700 mb-2">
                          Acceptance Criteria:
                        </h4>
                        <ul className="space-y-1">
                          {item.acceptanceCriteria.map((criteria, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                              <span className="text-green-500 mt-0.5">✓</span>
                              <span>{criteria}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-green-600" />
                          <span className="font-medium text-slate-700">Impact:</span>
                          <span className="text-slate-600">{item.impact}</span>
                        </div>
                        {item.techStack && (
                          <div className="flex items-center gap-2">
                            <Code className="w-4 h-4 text-blue-600" />
                            <span className="text-slate-600 text-xs">{item.techStack}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key Metrics Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Metrics Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-1">+10%</div>
              <div className="text-sm text-slate-600">Conversion Rate</div>
              <div className="text-xs text-slate-500 mt-1">Mobile-to-Web</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-1">-28%</div>
              <div className="text-sm text-slate-600">Cost Reduction</div>
              <div className="text-xs text-slate-500 mt-1">Infrastructure</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-1">-50%</div>
              <div className="text-sm text-slate-600">Delivery Time</div>
              <div className="text-xs text-slate-500 mt-1">Agency Process</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-1">$1M+</div>
              <div className="text-sm text-slate-600">Sales Revenue</div>
              <div className="text-xs text-slate-500 mt-1">Store Launch (6 weeks)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductBacklog;