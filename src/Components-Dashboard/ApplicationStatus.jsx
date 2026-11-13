
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./ApplicationStatus.css";

const ApplicationStatus = () => {
  const chartData = [
    { name: "Applied", value: 8, color: "#CEE0FD" },
    { name: "Shortlisted", value: 2, color: "#C3E6D5" },
    { name: "Interview", value: 3, color: "#FCE7C2" },
    { name: "Rejected", value: 1, color: "#FCD0CD" }
  ];

  const totalApplications = chartData.reduce((total, item) => total + item.value, 0);

  return (
    <div className="prp-dashboard-application-status-container">
      <h2 className="prp-dashboard-application-status-heading">Application Status</h2>
      <div className="prp-dashboard-application-status-content">
        <div className="prp-dashboard-application-status-list">
          {chartData.map((item, index) => (
            <div className={`prp-dashboard-application-status-item prp-dashboard-status-item-${index}`} key={index}>
              <span>{item.name}</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
        <div className="prp-dashboard-application-status-chart">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={chartData} dataKey="value" cx="50%" cy="50%" innerRadius={58}
                outerRadius={82} startAngle={90} endAngle={-270} stroke="none">
                {chartData.map((item, index) => (
                  <Cell key={index} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="prp-dashboard-application-status-chart-text">
            <h3>{totalApplications}</h3>
            <p>Total Applications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationStatus;
