export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center py-16">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-green-700 mb-4 text-center">Privacy Policy</h2>
        <p className="text-gray-700 mb-4">
          <strong>CookEasy</strong> respects your privacy. We do not share your personal information with third parties except as necessary to provide our services or as required by law.
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
          <li>We collect only the information you provide when you register or use our services.</li>
          <li>Your data is stored securely and used only to enhance your experience on CookEasy.</li>
          <li>We may use cookies to improve site functionality and user experience.</li>
          <li>You can contact us anytime to request deletion of your account or data.</li>
        </ul>
        <p className="text-gray-600">
          For any privacy-related questions, please <a href="/contact" className="text-green-700 underline">contact us</a>.
        </p>
      </div>
    </div>
  );
}