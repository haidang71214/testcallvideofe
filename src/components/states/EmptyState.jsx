const EmptyState = ({ selectedSpecialty, onSpecialtyClick }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-xl border border-white/20">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-6">
          <span className="text-4xl">👨‍⚕️</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Không tìm thấy bác sĩ
        </h3>
        <p className="text-gray-600 text-lg mb-6">
          {selectedSpecialty
            ? `Chúng tôi hiện không tìm thấy bác sĩ chuyên khoa ${selectedSpecialty}`
            : "Hiện tại chưa có bác sĩ nào khả dụng"}
        </p>
        {selectedSpecialty && (
          <button
            onClick={() => onSpecialtyClick(selectedSpecialty)}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Xem tất cả bác sĩ
          </button>
        )}
      </div>
    </div>
  );
};

export default EmptyState;