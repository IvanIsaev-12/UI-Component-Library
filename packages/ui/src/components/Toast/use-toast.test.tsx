/// <reference types="@testing-library/jest-dom" />
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { ToastProvider, useToast } from "./use-toast";

describe("useToast", () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("throws error when used outside ToastProvider", () => {
		expect(() => {
			renderHook(() => useToast());
		}).toThrow(/useToast is used outside ToastProvider/i);
	});

	it("displays a toast with default variant", () => {
		const { result } = renderHook(() => useToast(), {
			wrapper: ToastProvider,
		});

		act(() => {
			result.current.displayToast("Test default toast");
		});

		expect(result.current.toasts).toHaveLength(1);
		expect(result.current.toasts[0].variant).toBe("default");
	});

	it("displays a toast with success variant", () => {
		const { result } = renderHook(() => useToast(), {
			wrapper: ToastProvider,
		});

		act(() => {
			result.current.displayToast("Success message", "success");
		});

		expect(result.current.toasts).toHaveLength(1);
		expect(result.current.toasts[0].variant).toBe("success");
	});

	it("displays a toast with error variant", () => {
		const { result } = renderHook(() => useToast(), {
			wrapper: ToastProvider,
		});

		act(() => {
			result.current.displayToast("Error message", "error");
		});

		expect(result.current.toasts).toHaveLength(1);
		expect(result.current.toasts[0].variant).toBe("error");
	});

	it("displays a toast with warning variant", () => {
		const { result } = renderHook(() => useToast(), {
			wrapper: ToastProvider,
		});

		act(() => {
			result.current.displayToast("Warning message", "warning");
		});

		expect(result.current.toasts).toHaveLength(1);
		expect(result.current.toasts[0].variant).toBe("warning");
	});

	it("removes toast when removeToast is called", () => {
		const { result } = renderHook(() => useToast(), {
			wrapper: ToastProvider,
		});

		act(() => {
			result.current.displayToast("Test toast");
		});

		const toastId = result.current.toasts[0].id;

		act(() => {
			result.current.removeToast(toastId);
		});

		expect(result.current.toasts).toHaveLength(0);
	});

	it("auto-dismisses toast after 3 seconds", () => {
		const { result } = renderHook(() => useToast(), {
			wrapper: ToastProvider,
		});

		act(() => {
			result.current.displayToast("Auto dismiss test");
		});

		expect(result.current.toasts).toHaveLength(1);

		act(() => {
			vi.advanceTimersByTime(3000);
		});

		expect(result.current.toasts).toHaveLength(0);
	});

	it("handles multiple toasts", () => {
		const { result } = renderHook(() => useToast(), {
			wrapper: ToastProvider,
		});

		act(() => {
			result.current.displayToast("First toast");
			result.current.displayToast("Second toast");
			result.current.displayToast("Third toast");
		});

		expect(result.current.toasts).toHaveLength(3);
	});
});
