import React from "react";
import { useParams } from "react-router-dom";
import TestTaker from "../components/user/TestTaker";

const TestPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Test ID is required</div>;
  }

  return <TestTaker testId={id} />;
};

export default TestPage; 