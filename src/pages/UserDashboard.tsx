import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Dashboard from "../components/layout/Dashboard";
import { MockDataService } from "../services/MockDataService";
import { Test, UserTestResult } from "../types";
import Button from "../components/ui/Button";

const UserDashboard: React.FC = () => {
  const { user } = useAuth();
  const [tests, setTests] = useState<Test[]>([]);
  const [recentResults, setRecentResults] = useState<UserTestResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [testsData, resultsData] = await Promise.all([
          MockDataService.getTests(),
          user ? MockDataService.getUserTestResults(user.id) : Promise.resolve([]),
        ]);
        
        setTests(testsData.filter(test => test.isPublished));
        setRecentResults(resultsData.sort((a, b) => 
          new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
        ).slice(0, 5));
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const getRecommendedTests = (): Test[] => {
    // In a real app, this would use an algorithm to recommend tests based on user history
    // For now, we'll just return the first 3 tests
    return tests.slice(0, 3);
  };

  return (
    <Dashboard>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {user?.name}!
          </h1>
          <Link to="/tests">
            <Button>Take a Test</Button>
          </Link>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recommended Tests */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium text-gray-900">Recommended Tests</h2>
                <div className="mt-4 space-y-4">
                  {getRecommendedTests().map((test) => (
                    <div key={test.id} className="border rounded-md p-4">
                      <h3 className="font-semibold text-gray-800">{test.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{test.description}</p>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <span className="mr-3">
                          {test.timeLimit ? `${test.timeLimit}m` : "Untimed"}
                        </span>
                        <span className="mr-3">
                          {test.questionIds.length} questions
                        </span>
                        <span>
                          {test.difficulty.charAt(0).toUpperCase() + test.difficulty.slice(1)}
                        </span>
                      </div>
                      <div className="mt-3">
                        <Link to={`/test/${test.id}`}>
                          <Button size="sm">Start Test</Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Results */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium text-gray-900">Recent Results</h2>
                <div className="mt-4">
                  {recentResults.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Test
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Score
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Result
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Time
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {recentResults.map((result) => (
                            <tr key={result.id}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                <Link
                                  to={`/results/${result.id}`}
                                  className="text-primary hover:text-primary-700"
                                >
                                  {result.testTitle}
                                </Link>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {result.score}%
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <span
                                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    result.isPassed
                                      ? "bg-green-100 text-green-800"
                                      : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {result.isPassed ? "Pass" : "Fail"}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {formatTime(result.timeSpent)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-center py-6 text-gray-500">
                      You haven't taken any tests yet.
                    </div>
                  )}
                </div>
                {recentResults.length > 0 && (
                  <div className="mt-4 text-right">
                    <Link
                      to="/history"
                      className="text-primary hover:text-primary-700 text-sm font-medium"
                    >
                      View all results →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Quick Stats */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium text-gray-900">Your Stats</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm font-medium text-gray-500">Tests Taken</div>
                <div className="mt-1 text-3xl font-semibold text-gray-900">
                  {recentResults.length}
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm font-medium text-gray-500">Avg. Score</div>
                <div className="mt-1 text-3xl font-semibold text-gray-900">
                  {recentResults.length > 0
                    ? Math.round(
                        recentResults.reduce((sum, result) => sum + result.score, 0) /
                          recentResults.length
                      )
                    : 0}
                  %
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm font-medium text-gray-500">Pass Rate</div>
                <div className="mt-1 text-3xl font-semibold text-gray-900">
                  {recentResults.length > 0
                    ? Math.round(
                        (recentResults.filter((result) => result.isPassed).length /
                          recentResults.length) *
                          100
                      )
                    : 0}
                  %
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm font-medium text-gray-500">Available Tests</div>
                <div className="mt-1 text-3xl font-semibold text-gray-900">
                  {tests.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default UserDashboard; 