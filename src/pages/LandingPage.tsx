import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="text-primary text-xl font-bold">
                AWS Certification Mock Tests
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link to="/login">
                <Button variant="outline" className="text-white border-white hover:bg-secondary-600">
                  Log in
                </Button>
              </Link>
              <Link to="/register">
                <Button>Sign up</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">Prepare for AWS Certification Exams</h1>
              <p className="text-xl mb-6">
                Practice with our mock tests to boost your confidence and increase your chances of passing.
              </p>
              <div className="flex space-x-4">
                <Link to="/sample-test">
                  <Button size="lg">Try Sample Test</Button>
                </Link>
                <Link to="/register">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-secondary-600">
                    Sign Up for Full Access
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="/aws-certified-logo.png" 
                alt="AWS Certification" 
                className="max-w-xs mx-auto"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/400x300/232F3E/FF9900?text=AWS+Certification";
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Mock Tests?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Realistic Questions</h3>
              <p className="text-gray-600">
                Our questions are designed to match the style and difficulty of actual AWS certification exams.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance Tracking</h3>
              <p className="text-gray-600">
                Track your progress and identify areas where you need to improve with detailed analytics.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Detailed Explanations</h3>
              <p className="text-gray-600">
                Every question comes with thorough explanations to help you understand the concepts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Offered */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Available Certification Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "AWS Certified Cloud Practitioner", level: "Foundational" },
              { name: "AWS Certified Solutions Architect", level: "Associate" },
              { name: "AWS Certified Developer", level: "Associate" },
              { name: "AWS Certified SysOps Administrator", level: "Associate" },
              { name: "AWS Certified DevOps Engineer", level: "Professional" },
              { name: "AWS Certified Security", level: "Specialty" }
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className={`h-2 ${cert.level === "Foundational" ? "bg-blue-500" : cert.level === "Associate" ? "bg-primary" : cert.level === "Professional" ? "bg-secondary" : "bg-green-500"}`}></div>
                <div className="p-6">
                  <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full mb-2 ${
                    cert.level === "Foundational" ? "bg-blue-100 text-blue-800" : 
                    cert.level === "Associate" ? "bg-primary-100 text-primary-800" : 
                    cert.level === "Professional" ? "bg-secondary-100 text-secondary-800" : 
                    "bg-green-100 text-green-800"
                  }`}>
                    {cert.level}
                  </span>
                  <h3 className="font-semibold text-lg mb-2">{cert.name}</h3>
                  <Link to="/register" className="text-primary hover:text-primary-600 font-medium">
                    Start practicing →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to ace your AWS exam?</h2>
          <p className="text-xl mb-8">Sign up now and get access to all our mock tests!</p>
          <Link to="/register">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-primary-600"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">AWS Certification Mock Tests</h3>
              <p className="text-gray-300">
                Helping you prepare for AWS certification exams with high-quality practice questions and resources.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/sample-test" className="text-gray-300 hover:text-primary">Sample Test</Link></li>
                <li><Link to="/login" className="text-gray-300 hover:text-primary">Log in</Link></li>
                <li><Link to="/register" className="text-gray-300 hover:text-primary">Sign up</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-primary">Terms of Service</a></li>
                <li><a href="/" className="text-gray-300 hover:text-primary">Privacy Policy</a></li>
                <li><a href="/" className="text-gray-300 hover:text-primary">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>© {new Date().getFullYear()} AWS Certification Mock Tests. All rights reserved.</p>
            <p className="mt-2 text-sm">Not affiliated with Amazon Web Services, Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 