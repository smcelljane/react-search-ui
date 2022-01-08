import { fireEvent, render, screen } from "@testing-library/react";
import Search from "../Search";

const testData = [
  {
    id: 1,
    name: "Ann Liebmann",
    policyNumber: "0013983887",
    phone: "+27-61-453-5444",
    email: "ann.lieb@i",
  },
  {
    id: 2,
    name: "Ann Summer",
    policyNumber: "0013983888",
    phone: "+27-63-453-5445",
    email: "ann.summer@i",
  },
  {
    id: 3,
    name: "Ann Samuel",
    policyNumber: "0013983889",
    phone: "+27-64-453-5446",
    email: "ann.samuel@i",
  },
];

describe("Search Component Renders", () => {
  describe("ui renders", () => {
    it("ui renders correctly", async () => {
      render(<Search clients={testData} />);
      //debug();

      expect(screen.getByTestId("search-input")).toBeInTheDocument();
      expect(screen.getByTestId("search-icon")).toBeInTheDocument();
      expect(
        screen.getByPlaceholderText("Search ( Client Name / Policy Number )")
      ).toBeTruthy();
    });
  });

  describe("test data renders", () => {
    it('renders "no clients" when there are no clients', () => {
      render(<Search />);
      expect(screen.getByText(/no clients/i)).toBeTruthy();
    });

    it("renders clients", () => {
      render(<Search clients={testData} />);
    });
  });
});

describe("Input Value", () => {
  describe("update query", () => {
    it("updates onchange", () => {
      render(<Search clients={testData} />);

      const searchInput = screen.queryByTestId("search-input");
      fireEvent.change(searchInput, { target: { value: "Ann" } });
      expect(searchInput.value).toBe("Ann");
    });
  });

  describe("with empty query", () => {
    it("does not trigger handleChange function", () => {
      const handleChange = jest.fn();
      render(<Search clients={testData} handleChange={handleChange} />);
      fireEvent.change(screen.queryByTestId("search-input"));
      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe("with data inside query", () => {
    it("triggers handleChange function", async () => {
      const handleChange = jest.fn();
      render(<Search clients={testData} handleChange={handleChange} />);

      const searchInput = await screen.findByTestId("search-input");
      fireEvent.change(searchInput, { target: { value: "Ann" } });

      expect(searchInput.value).toBe("Ann");
    });

    it("filtered search items by name", async () => {
      const handleChange = jest.fn();
      render(<Search clients={testData} handleChange={handleChange} />);

      const searchInput = await screen.findByTestId("search-input");
      fireEvent.change(searchInput, { target: { value: "sam" } });

      const clientNames = screen
        .getAllByTestId("search-bag-item-name")
        .map((c) => c.textContent);

      clientNames.forEach((name) => {
        expect(name.toLowerCase()).toContain("sam");
      });
    });

    it("filtered search items by policy no", async () => {
      const handleChange = jest.fn();
      render(<Search clients={testData} handleChange={handleChange} />);

      const searchInput = await screen.findByTestId("search-input");
      fireEvent.change(searchInput, { target: { value: "889" } });

      const clientPolicies = screen
        .getAllByTestId("search-bag-item-policy")
        .map((c) => c.textContent);

      clientPolicies.forEach((policy) => {
        expect(policy).toContain("889");
      });
    });
  });
});
