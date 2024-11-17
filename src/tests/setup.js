import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import '@testing-library/jest-dom/vitest';

afterEach(() => {
    console.log('Unit Test OK');
    cleanup();
})