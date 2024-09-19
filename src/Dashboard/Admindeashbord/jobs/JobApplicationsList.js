import React, { useState, useEffect } from "react";
import axios from "axios";
import "./JobApplicationsList.css";

export default function JobApplicationsList() {
  const [jobApplications, setJobApplications] = useState([]);

  useEffect(() => {
    const fetchJobApplications = async () => {
      try {
        const response = await axios.get("https://develop-yourself.onrender.com/api/job-application");
        setJobApplications(response.data);
      } catch (error) {
        console.error("Error fetching job applications", error);
      }
    };

    fetchJobApplications();
  }, []);

  return (
    <div className="job-applications-list">
      <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
        طلبات العمل
      </h3>
      <div className="applications-table">
        <table>
          <thead>
            <tr>
              <th>الاسم</th>
              <th>اللقب</th>
              <th>رقم الهاتف</th>
              <th>البريد الإلكتروني</th>
              <th>التخصص</th>
              <th>السيرة الذاتية</th>
            </tr>
          </thead>
          <tbody>
            {jobApplications.map((application) => (
              <tr key={application._id}>
                <td>{application.name}</td>
                <td>{application.surname}</td>
                <td>{application.phone}</td>
                <td>{application.email}</td>
                <td>{application.specialization}</td>
                <td>
                  <a href={`https://develop-yourself.onrender.com/${application.cv}`} target="_blank" rel="noopener noreferrer">
                    تحميل
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
