import React from 'react'

const AdminPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">관리자 페이지</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">관리자 대시보드</h2>
          <p className="text-gray-600">
            관리자 기능을 사용할 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AdminPage