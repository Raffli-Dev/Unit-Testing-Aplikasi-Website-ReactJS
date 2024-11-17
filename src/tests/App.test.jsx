import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import AppConsole from "../AppConsole";
import AppUi from "../AppUi";

describe("App Unit Testing", () => {
    test("Title harus Raffli Projek", () => {
        render(<AppConsole />);
        const webTitle = screen.getByTestId("web-title");
        expect(webTitle).toHaveTextContent(/^Raffli Projek$/);
    })

    test("Title harus Raffli Projek Halaman 2", () => {
        render(<AppUi />);
        const webTitle = screen.getByTestId("web-title");
        expect(webTitle).toHaveTextContent(/^Raffli Projek Halaman 2$/);
    })

    test("Like Button harus 0", () => {
        render(<AppUi />);
        
    })
})