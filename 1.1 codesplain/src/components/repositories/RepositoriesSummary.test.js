import RepositoriesSummary from "./RepositoriesSummary";
import { screen, render, waitFor } from "@testing-library/react";

test("display information of the repository", async () => {
  const repository = {
    language: "JavaScript",
    stargazers_count: 4,
    forks: 39,
    open_issues: 1,
  };
  render(<RepositoriesSummary repository={repository} />);
  for (let key in repository) {
    
     const value = repository[key];
     const element = screen.getByText(new RegExp(value, "i"));
     expect(element).toBeInTheDocument();
    
  }
});
