export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center py-16">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-green-700 mb-4 text-center">Terms of Service</h2>
        <p className="text-gray-700 mb-4">
          By using <strong>CookEasy</strong>, you agree to the following terms:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
          <li>You are responsible for the content you post and share on CookEasy.</li>
          <li>Do not post offensive, illegal, or copyrighted material without permission.</li>
          <li>We reserve the right to remove content or suspend accounts that violate our policies.</li>
          <li>CookEasy is provided as-is without any warranties.</li>
        </ul>
        <p className="text-gray-600">
          For questions about these terms, please <a href="/contact" className="text-green-700 underline">contact us</a>.
        </p>
      </div>
    </div>
  );
}