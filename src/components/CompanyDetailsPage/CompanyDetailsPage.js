import React from 'react';
import { useParams } from 'react-router-dom';

const CompanyDetailsPage = () => {
    const suggestedCompanies = [
        { id: 1, name: 'شركة 1', description: 'وصف شركة 1', details: 'تفاصيل شركة 1' },
        { id: 2, name: 'شركة 2', description: 'وصف شركة 2', details: 'تفاصيل شركة 2' },
        { id: 3, name: 'شركة 3', description: 'وصف شركة 3', details: 'تفاصيل شركة 3' },
        { id: 4, name: 'شركة 4', description: 'وصف شركة 4', details: 'تفاصيل شركة 4' },
        { id: 5, name: 'شركة 5', description: 'وصف شركة 5', details: 'تفاصيل شركة 5' },
        { id: 6, name: 'شركة 6', description: 'وصف شركة 6', details: 'تفاصيل شركة 6' },
        { id: 7, name: 'شركة 7', description: 'وصف شركة 7', details: 'تفاصيل شركة 7' },
        { id: 8, name: 'شركة 8', description: 'وصف شركة 8', details: 'تفاصيل شركة 8' },
        // أضف المزيد من الشركات إذا لزم الأمر
      ];
     
  const { id } = useParams();
  const company = suggestedCompanies.find(company => company.id === parseInt(id));

  return (
    <div>
      {company ? (
        <>
          <h1>{company.name}</h1>
          <p>{company.description}</p>
          <p>{company.details}</p>
        </>
      ) : (
        <p>الشركة غير موجودة</p>
      )}
    </div>
  );
};

export default CompanyDetailsPage;
