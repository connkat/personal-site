import { useState, useRef, useEffect } from "react";

const useElementInView = (options) => {
	const [isInView, setIsInView] = useState(false);
	const targetRef = useRef < HTMLDivElement > null;
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const [entry] = entries;
			setIsInView(entry.isIntersecting);
		}, options);

		if (targetRef.current) {
			observer.observe(targetRef.current);
		}

		let currentRef = targetRef.current;

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, [options]);

	return [targetRef, isInView];
};

export { useElementInView };
