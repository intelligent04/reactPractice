import React from 'react'

const UserPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">사용자 페이지</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 사용자 프로필 섹션 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">프로필 정보</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xl font-semibold">U</span>
                </div>
                <div className="ml-4">
                  <p className="font-medium text-gray-900">사용자 이름</p>
                  <p className="text-sm text-gray-500">user@example.com</p>
                </div>
              </div>
              <div className="border-t pt-3">
                <p className="text-sm text-gray-600">가입일: 2024년 1월 1일</p>
                <p className="text-sm text-gray-600">마지막 로그인: 오늘</p>
              </div>
            </div>
          </div>

          {/* 사용자 활동 섹션 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-600">활동 내역</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">로그인 횟수</span>
                <span className="font-semibold text-green-600">15회</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">작성한 게시글</span>
                <span className="font-semibold text-green-600">8개</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">댓글 수</span>
                <span className="font-semibold text-green-600">23개</span>
              </div>
            </div>
          </div>

          {/* 설정 섹션 */}
          <div className="bg-white rounded-lg shadow-md p-6 md:col-span-2">
            <h2 className="text-xl font-semibold mb-4 text-purple-600">계정 설정</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                프로필 수정
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
                비밀번호 변경
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
                계정 삭제
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPage